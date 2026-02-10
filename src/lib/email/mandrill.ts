import mailchimpTransactional from "@mailchimp/mailchimp_transactional";

const apiKey = process.env.MAILCHIMP_TX_API_KEY || "";
const fromEmail = process.env.MAIL_FROM_EMAIL || "";
const fromName = process.env.MAIL_FROM_NAME || "";
const adminEmail = process.env.MAILCHIMP_TO_ADMIN_EMAIL || ""; // optional
const submissionConfirmationTemplate =
  process.env.MC_TEMPLATE_SLUG_SUBMISSION_RECEIPT || "";
const contactConfirmationTemplate =
  process.env.MC_TEMPLATE_SLUG_CONTACT_RECEIPT || "";
const membershipConfirmationTemplate =
  process.env.MC_TEMPLATE_SLUG_MEMBERSHIP_RECEIPT || "";

export const mandrill = mailchimpTransactional(apiKey);

function requireEnv(name: string, value: string) {
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export async function sendSubmissionReceipt(
  email: string,
  filmTitle: string,
  originalLanguage: string,
  countryOfProduction: string,
  yearOfCompletion: string,
  filmDuration: string,
  category: string,
  genres: string,
) {
  try {
    requireEnv("MAILCHIMP_TX_API_KEY", apiKey);
    requireEnv("MAIL_FROM_EMAIL", fromEmail);
    requireEnv("MAIL_FROM_NAME", fromName);
    requireEnv(
      "MC_TEMPLATE_SLUG_SUBMISSION_RECEIPT",
      submissionConfirmationTemplate,
    );

    const to = [{ email, type: "to" as const }];

    // Optional: BCC admin on every submission receipt

    if (adminEmail) {
      to.push({ email: adminEmail, type: "to" as const });
    }

    const res = await mandrill.messages.sendTemplate({
      template_name: submissionConfirmationTemplate,
      template_content: [], // required by Mandrill API (can be empty)
      message: {
        from_email: fromEmail,
        from_name: fromName,
        to,
        subject: "Thank you for submitting your film to AIFFA!",
        merge: true,
        merge_language: "mailchimp", // enables *|VAR|* format in template
        global_merge_vars: [
          { name: "EMAIL", content: email },
          { name: "FILM_TITLE", content: filmTitle },
          { name: "ORIGINAL_LANGUAGE", content: originalLanguage },
          { name: "COUNTRY_OF_PRODUCTION", content: countryOfProduction },
          { name: "YEAR_OF_COMPLETION", content: yearOfCompletion },
          { name: "FILM_DURATION", content: filmDuration },
          { name: "CATEGORY", content: category },
          { name: "GENRES", content: genres },
        ],
      },
    });

    return res;
  } catch (error) {
    console.error("Error sending submission receipt:", error);
    throw error;
  }
}

export async function sendContactFormSubmissionReceipt(
  email: string,
  fullName: string,
  subject: string,
  message: string,
) {
  try {
    requireEnv("MAILCHIMP_TX_API_KEY", apiKey);
    requireEnv("MAIL_FROM_EMAIL", fromEmail);
    requireEnv("MAIL_FROM_NAME", fromName);
    requireEnv("MC_TEMPLATE_SLUG_CONTACT_RECEIPT", contactConfirmationTemplate);
    const to = [{ email: email, type: "to" as const }];

    if (adminEmail) {
      to.push({ email: adminEmail, type: "to" as const });
    }

    const res = await mandrill.messages.sendTemplate({
      template_name: contactConfirmationTemplate,
      template_content: [], // required by Mandrill API (can be empty)
      message: {
        from_email: fromEmail,
        from_name: fromName,
        to,
        subject: "Thank you for contacting AIFFA!",
        merge: true,
        merge_language: "mailchimp", // enables *|VAR|* format in template
        global_merge_vars: [
          { name: "FULL_NAME", content: fullName },
          { name: "SUBJECT", content: subject },
          { name: "MESSAGE", content: message },
        ],
      },
    });

    return res;
  } catch (error) {
    console.error("Error sending contact form submission receipt:", error);
    throw error;
  }
}

export async function sendMembershipFormSubmissionReceipt(
  email: string,
  fullName: string,
  phone: string,
  country: string,
  membershipType: string,
  organization: string,
  message: string,
) {
  try {
    requireEnv("MAILCHIMP_TX_API_KEY", apiKey);
    requireEnv("MAIL_FROM_EMAIL", fromEmail);
    requireEnv("MAIL_FROM_NAME", fromName);
    requireEnv(
      "MC_TEMPLATE_SLUG_MEMBERSHIP_RECEIPT",
      membershipConfirmationTemplate,
    );
    const to = [{ email: email, type: "to" as const }];

    if (adminEmail) {
      to.push({ email: adminEmail, type: "to" as const });
    }

    const res = await mandrill.messages.sendTemplate({
      template_name: membershipConfirmationTemplate,
      template_content: [], // required by Mandrill API (can be empty)
      message: {
        from_email: fromEmail,
        from_name: fromName,
        to,
        subject: "Thank you for joining AIFFA!",
        merge: true,
        merge_language: "mailchimp", // enables *|VAR|* format in template
        global_merge_vars: [
          { name: "FULL_NAME", content: fullName },
          { name: "EMAIL", content: email },
          { name: "PHONE", content: phone },
          { name: "COUNTRY", content: country },
          { name: "MEMBERSHIP_TYPE", content: membershipType },
          { name: "ORGANIZATION", content: organization },
          { name: "MESSAGE", content: message },
        ],
      },
    });

    return res;
  } catch (error) {
    console.error("Error sending membership form submission receipt:", error);
    throw error;
  }
}
