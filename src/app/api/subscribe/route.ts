import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_ANON_KEY!

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert the email
    const { data, error } = await supabase
      .from("emails")
      .insert([{ email: email.toLowerCase().trim() }])
      .select()
      .single()

    if (error) {
      console.error("Error submitting email:", error)

      // Handle duplicate email
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
      success: true,
      data
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

