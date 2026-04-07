import { NextResponse } from "next/server"

const HUBSPOT_API_URL = "https://api.hubapi.com/crm/v3/objects/contacts"

export async function POST(req: Request) {
  const { name, email } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  try {
    const res = await fetch(HUBSPOT_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        properties: {
          email,
          name
        }
      })
    })

    if (!res.ok) {
      const error = await res.json()
      console.error("HubSpot API error:", error)
      return NextResponse.json({ error: "HubSpot API failed" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("HubSpot error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

