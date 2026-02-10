/**
 * Strip optional surrounding double quotes from an env value.
 * .env and Amplify sometimes keep quotes, which breaks Google Auth.
 */
export function stripQuotes(value: string | undefined): string | undefined {
  if (value == null || value === "") return undefined;
  const t = value.trim();
  if (t.startsWith('"') && t.endsWith('"') && t.length >= 2) return t.slice(1, -1);
  return t;
}

export function getGoogleClientEmail(): string | undefined {
  return stripQuotes(process.env.GOOGLE_CLIENT_EMAIL);
}

export function getGooglePrivateKey(): string | undefined {
  const raw = stripQuotes(process.env.GOOGLE_PRIVATE_KEY);
  return raw?.replace(/\\n/g, "\n");
}
