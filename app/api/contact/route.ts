import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // Check API key
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error(
        "RESEND_API_KEY is not configured."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Parse request body
    const body = await request.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Name, email, and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate email
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // Limit input length
    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Name is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Email address is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Message is too long. Maximum 5000 characters.",
        },
        {
          status: 400,
        }
      );
    }

    // Escape content before inserting into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br />"
    );

    // Environment variables
    const recipient =
      process.env.CONTACT_EMAIL ||
      "rillygulma@gmail.com";

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";

    // Send email
    const { data, error } =
      await resend.emails.send({
        from: fromEmail,

        to: [recipient],

        replyTo: email,

        subject: `New Portfolio Message from ${name}`,

        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>New Portfolio Contact</title>
            </head>

            <body
              style="
                margin: 0;
                padding: 0;
                background-color: #f8fafc;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              <div
                style="
                  max-width: 600px;
                  margin: 40px auto;
                  padding: 30px;
                  background-color: #ffffff;
                  border-radius: 12px;
                  border: 1px solid #e2e8f0;
                "
              >
                <h2
                  style="
                    margin-top: 0;
                    color: #0f172a;
                  "
                >
                  New Portfolio Contact
                </h2>

                <p
                  style="
                    color: #475569;
                    line-height: 1.6;
                  "
                >
                  You have received a new message
                  through your portfolio website.
                </p>

                <hr
                  style="
                    border: none;
                    border-top: 1px solid #e2e8f0;
                    margin: 24px 0;
                  "
                />

                <p>
                  <strong>Name:</strong>
                  ${safeName}
                </p>

                <p>
                  <strong>Email:</strong>
                  ${safeEmail}
                </p>

                <p>
                  <strong>Message:</strong>
                </p>

                <div
                  style="
                    padding: 16px;
                    background-color: #f1f5f9;
                    border-radius: 8px;
                    color: #334155;
                    line-height: 1.7;
                  "
                >
                  ${safeMessage}
                </div>

                <p
                  style="
                    margin-top: 30px;
                    font-size: 13px;
                    color: #94a3b8;
                  "
                >
                  This message was sent through
                  your portfolio contact form.
                </p>
              </div>
            </body>
          </html>
        `,
      });

    // Handle Resend API error
    if (error) {
      console.error(
        "Resend API Error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to send your message. Please try again later.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully.",
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Contact API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}