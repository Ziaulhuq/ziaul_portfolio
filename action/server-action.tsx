"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function handleFormData(prevState: string, formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ziaulhuqbe@gmail.com",
    subject: "Message from contact form",
    replyTo: email as string,
    text: "hello",
  });

  if (!email && !message) {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return {
      success: false,
      message: "Email & password cannot be empty",
    };
  } else {
    return {
      success: true,
      message: "Email and message send successfully",
    };
  }
}
