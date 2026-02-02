import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

interface MembershipData {
  fullName: string
  email: string
  phone: string
  country: string
  membershipType: string
  organization?: string
  message?: string
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_MEMBERSHIP_ID

async function appendToSheet(data: MembershipData) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const row = [
    new Date().toISOString(),
    data.fullName,
    data.email,
    data.phone,
    data.membershipType,
    data.organization || '',
    data.country,
    data.message || '',
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Sheet1!A:H',
    valueInputOption: 'RAW',
    requestBody: {
      values: [row],
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const data: MembershipData = await request.json()

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.country || !data.membershipType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await appendToSheet(data)
    return NextResponse.json({ message: 'Membership application received' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to submit membership form' },
      { status: 500 }
    )
  }
}
