import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { sendContactFormSubmissionReceipt } from "@/lib/email/mandrill";

interface ContactData {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_CONTACT_ID;

async function appendToSheet(data: ContactData) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const row = [
    new Date().toISOString(),
    data.fullName,
    data.email,
    data.phone || "",
    data.subject,
    data.message,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A:F",
    valueInputOption: "RAW",
    requestBody: {
      values: [row],
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    // Validate required fields
    if (!data.fullName || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await appendToSheet(data);

    await sendContactFormSubmissionReceipt(
      data.email,
      data.fullName,
      data.subject,
      data.message,
    );

    return NextResponse.json({ message: "Contact submission received" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 },
    );
  }
}
