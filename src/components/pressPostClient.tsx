"use client"

import { useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "./navMenu"
import Footer from "./footer"

const components = {
  ImageBlock: (props: any) => {
    return (
      <>
        <Image
          src={props.src || ""}
          alt={props.alt || ""}
          width={1200}
          height={675}
          className="my-8 h-auto w-full rounded-lg object-contain"
          sizes="(max-width: 768px) 100vw, 896px"
        />
        {props.caption && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {props.caption}
          </p>
        )}
      </>
    )
  },
  VideoBlock: (props: any) => {
    return (
      <>
        <video
          src={props.src || ""}
          controls
          autoPlay={props.autoplay}
          loop={props.loop}
          muted={props.muted}
          className="my-8 w-full rounded-lg"
        />
        {props.caption && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {props.caption}
          </p>
        )}
      </>
    )
  },
  img: (props: any) => {
    return (
      <Image
        src={props.url || props.src || ""}
        alt={props.alt || ""}
        width={1200}
        height={675}
        className="my-8 h-auto w-full rounded-lg object-contain"
        sizes="(max-width: 768px) 100vw, 896px"
      />
    )
  },
  h1: (props: any) => (
    <h1 className="mb-6 mt-12 text-4xl font-bold md:text-5xl" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mb-4 mt-10 text-3xl font-bold md:text-4xl" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mb-3 mt-8 text-2xl font-semibold md:text-3xl" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="mb-2 mt-6 text-xl font-semibold md:text-2xl" {...props} />
  ),
  p: (props: any) => (
    <p className="my-4 text-base leading-relaxed md:text-lg" {...props} />
  ),
  a: (props: any) => (
    <a
      className="font-medium text-primary underline hover:text-secondary"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="my-4 ml-6 list-disc space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />
  ),
  li: (props: any) => <li className="text-base md:text-lg" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="my-6 border-l-4 border-primary bg-[--background] py-4 pl-6 pr-4 italic"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="rounded bg-[--background] px-2 py-1 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-[--background] p-4 font-mono text-sm"
      {...props}
    />
  ),
  hr: (props: any) => <hr className="my-8 border-t-2 border-input" {...props} />
}

export default function PressPostClient(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  })

  const post = data.post

  const date = new Date(post.date || "").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <NavMenu />

      <article className="relative flex w-screen max-w-[1600px] flex-col items-center bg-white px-8 py-16 md:px-24">
        <div className="mb-8 w-full max-w-3xl">
          <Link
            href="/press"
            className="inline-flex items-center gap-2 font-medium text-gray-600 hover:text-primary"
          >
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Press
          </Link>
        </div>

        <header className="mb-12 w-full max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500">
            <span>{date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          <h1 className="mb-6 text-3xl font-bold md:text-4xl">{post.title}</h1>

          <p className="text-lg text-gray-600 md:text-xl">{post.description}</p>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="rounded-full bg-[--background] px-4 py-2 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {post.coverImage && (
          <div className="relative mb-12 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl">
            <Image
              src={post.coverImage}
              alt={post.title || ""}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-3xl">
          <TinaMarkdown content={post.body} components={components} />
        </div>

        <div className="mt-16 w-full max-w-3xl border-t-2 border-input pt-8">
          <p className="text-sm font-medium text-gray-500">Written by</p>
          <p className="mt-2 text-xl font-semibold">{post.author}</p>
        </div>
      </article>

      <div className="relative flex w-screen max-w-[1600px] flex-col items-center border-t border-black bg-white">
        <div className="flex w-full px-8 md:px-24">
          <Footer />
        </div>
      </div>
    </div>
  )
}


