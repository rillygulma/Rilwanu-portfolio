import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from:
        "Portfolio Contact <onboarding@resend.dev>",
      to: [
        "rillygulma@gmail.com",
      ],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message}
        </p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}