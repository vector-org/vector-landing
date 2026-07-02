import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey =
  process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    const normalizedEmail =
      typeof email === "string" ? email.toLowerCase().trim() : ""

    if (!normalizedEmail) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      )
    }

    if (normalizedEmail.length > 256 || !emailPattern.test(normalizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      )
    }

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase newsletter configuration")
      return NextResponse.json(
        {
          success: false,
          error: "Failed to subscribe. Please try again."
        },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    })

    const { error } = await supabase
      .from("emails")
      .insert({ email: normalizedEmail })

    if (error) {
      console.error("Error submitting email:", error)

      if (error.code === "23505") {
        return NextResponse.json({
          success: false,
          error: "This email is already subscribed"
        })
      }

      return NextResponse.json({
        success: false,
        error: "Failed to subscribe. Please try again."
      })
    }

    return NextResponse.json({
      success: true
    })
  } catch (error) {
    console.error("Exception submitting email:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again."
      },
      { status: 500 }
    )
  }
}
