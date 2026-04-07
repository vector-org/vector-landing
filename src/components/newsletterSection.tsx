"use client"

import { Button, Checkbox, Input } from "@/components/ui"
import Link from "next/link"
import Image from "next/image"
import { Controller, useForm } from "react-hook-form"
import { useState } from "react"
import { PiDiscordLogo, PiTelegramLogo } from "react-icons/pi"
import { RiTwitterXFill, RiCheckLine } from "react-icons/ri"
import { ImSpinner2 } from "react-icons/im"

type FormData = {
  email: string
  terms: boolean
}

export const Section = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    defaultValues: { terms: false }
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (data: FormData) => {
    try {
      setError(null)
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email })
      })

      const result = await res.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setError(
          result.error || "Oops, something went wrong. Please try again."
        )
      }
    } catch (err) {
      setError("Oops, something went wrong. Please try again.")
      console.error("Error submitting form:", err)
    }
  }

  return (
    <div id="newsletter">
      <div className="relative z-10 mt-8 flex flex-col items-center px-7 md:mb-2 md:mt-4 md:max-w-3xl">
        <Image
          src="/logo.svg"
          alt="VECTOR"
          width={486}
          height={90}
          className="w-[260px] sm:mt-0 md:mt-10 md:w-[486px]"
        />
      </div>

      {submitted ? (
        <div className="relative z-10 mb-40 mt-16 flex flex-col items-center px-7 md:mb-60 md:mt-8 md:max-w-3xl">
          <div role="status" aria-live="polite">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-50 text-green-600">
              <RiCheckLine size={24} />
            </div>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
              Thank you for subscribing!
            </h3>
            <p className="mt-2 text-center text-base text-gray-600">
              You&#39;re on the list. We&#39;ll be in touch soon.
            </p>

            <p className="mb-3 mt-4 text-center text-sm font-medium text-gray-900">
              Join us on social media
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="https://t.me/playonvector"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join VECTOR on Telegram"
                className="rounded-full p-2.5 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
              >
                <PiTelegramLogo fontSize={28} />
              </Link>
              <Link
                href="https://x.com/playonvector"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow VECTOR on X (Twitter)"
                className="rounded-full p-2.5 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
              >
                <RiTwitterXFill fontSize={28} />
              </Link>
              <Link
                href="https://discord.com/invite/playonvector"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join VECTOR on Discord"
                className="rounded-full p-2.5 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
              >
                <PiDiscordLogo fontSize={28} />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative z-10 mb-40 mt-8 flex flex-col items-center gap-10 px-7 md:mb-52 md:mt-8 md:max-w-3xl"
        >
          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="w-full rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}
          <p className="mt-8 text-center text-xl font-medium">
            Join VECTORs early access launch and receive the latest updates.
          </p>

          <div className="m-0 flex w-full flex-col justify-center gap-7 px-7">
            <div className="flex flex-col">
              <Input
                placeholder="Email"
                type="email"
                autoComplete="email"
                disabled={isSubmitting}
                {...register("email", {
                  required: "Email is required",
                  maxLength: {
                    value: 256,
                    message: "Email must be less than 256 characters"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-2">
            <Controller
              name="terms"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox
                  id="terms1"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={isSubmitting}
                  ref={field.ref}
                />
              )}
            />
            <div className="grid gap-1.5 leading-none">
              <p className="text-sm">
                I agree to VECTOR&#39;s{" "}
                <Link className="underline" href="/terms-of-service">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link className="underline" href="/data-protection-policy">
                  Data Protection Policy
                </Link>
                .
              </p>
              {errors.terms && (
                <span className="mt-1 text-sm text-red-500">
                  You must accept the terms
                </span>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <ImSpinner2 className="animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Section

