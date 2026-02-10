# AWS Amplify – Environment variables for forms

The **Contact**, **Membership**, and **Film submission** forms need these environment variables set in Amplify so they work in production.

## Where to set them

**Amplify Console** → Your app → **Hosting** → **Environment variables** (or **App settings** → **Environment variables**). Add each name and value, then **Redeploy** the app.

## Required variables

| Variable | Used by |
|----------|--------|
| `GOOGLE_SHEET_SUBMISSIONS_ID` | Film submission |
| `GOOGLE_SHEET_CONTACT_ID` | Contact form |
| `GOOGLE_SHEET_MEMBERSHIP_ID` | Membership form |
| `GOOGLE_CLIENT_EMAIL` | All three (Google Sheets) |
| `GOOGLE_PRIVATE_KEY` | All three (Google Sheets) |
| `MAILCHIMP_TX_API_KEY` | All three (Mandrill email) |
| `MAIL_FROM_EMAIL` | All three |
| `MAIL_FROM_NAME` | All three |
| `MAILCHIMP_TO_ADMIN_EMAIL` | Optional (BCC for receipts) |

## `GOOGLE_PRIVATE_KEY` on Amplify

Amplify env vars are single-line. For the Google service account private key:

- **Option A:** Paste the key as a **single line** and keep the literal `\n` between the lines (e.g. `-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n`). The app will turn those `\n` into real newlines.
- **Option B:** If your UI allows multi-line values, paste the key with real newlines.

If the key is wrong or missing, Google Auth fails and the APIs return **500**. After changing env vars, trigger a new deploy.

## If you still get 500

1. Confirm every variable above is set in Amplify (no typos in names).
2. Redeploy after changing env vars.
3. In Amplify → **Monitoring** or your logging solution, check the server logs for the exact error (e.g. “Missing env: …” or Google/Mandrill errors).
