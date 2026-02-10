import { NextRequest, NextResponse } from "next/server";
import { sendSubmissionReceipt } from "@/lib/email/mandrill";
import { google } from "googleapis";

interface SubmissionData {
  filmTitle: string;
  originalLanguage: string;
  englishSubtitles: string;
  countryOfProduction: string;
  yearOfCompletion: string;
  filmDuration: number;
  category: string;
  genres: string;
  actors: Array<{ fullName: string; role: string; biography: string }>;
  directors: Array<{ fullName: string; role: string; biography: string }>;
  producers: Array<{ fullName: string; role: string; biography: string }>;
  crew: Array<{ fullName: string; department: string; biography: string }>;
  email: string;
  rightsConfirmation: boolean;
  contentCleared: boolean;
  termsAgreement: boolean;
}

async function appendToSheet(data: SubmissionData, spreadsheetId: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const row = [
    new Date().toISOString(),
    data.email,
    data.filmTitle,
    data.category,
    data.filmDuration,
    data.originalLanguage,
    data.englishSubtitles || "",
    data.countryOfProduction || "",
    data.yearOfCompletion || "",
    data.genres || "",
    // Actors with all details
    data.actors
      .map((a) => `Name: ${a.fullName} | Role: ${a.role} | Bio: ${a.biography}`)
      .join("\n\n"),
    // Directors with all details
    data.directors
      .map((d) => `Name: ${d.fullName} | Role: ${d.role} | Bio: ${d.biography}`)
      .join("\n\n"),
    // Producers with all details
    data.producers
      .map((p) => `Name: ${p.fullName} | Role: ${p.role} | Bio: ${p.biography}`)
      .join("\n\n"),
    // Crew with all details
    data.crew
      .map(
        (c) =>
          `Name: ${c.fullName} | Department: ${c.department} | Bio: ${c.biography}`,
      )
      .join("\n\n"),
    data.rightsConfirmation ? "Yes" : "No",
    data.contentCleared ? "Yes" : "No",
    data.termsAgreement ? "Yes" : "No",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:Q",
    valueInputOption: "RAW",
    requestBody: {
      values: [row],
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const data: SubmissionData = await request.json();

    // Validate required fields
    if (
      !data.filmTitle ||
      !data.email ||
      !data.filmDuration ||
      !data.category
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_SUBMISSIONS_ID;
    console.log("Attempting to save to Google Sheet...", {
      hasSpreadsheetId: !!spreadsheetId,
    });

    if (!spreadsheetId) {
      return NextResponse.json(
        { message: "Google Sheet not configured" },
        { status: 500 },
      );
    }

    await appendToSheet(data, spreadsheetId);

    console.log("Successfully saved to Google Sheet");

    // Send submission receipt email
    await sendSubmissionReceipt(
      data.email,
      data.filmTitle,
      data.originalLanguage,
      data.countryOfProduction,
      data.yearOfCompletion,
      data.filmDuration.toString(),
      data.category,
      data.genres,
    );

    return NextResponse.json(
      { message: "Submission received successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      {
        message: `Failed to submit: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    );
  }
}
