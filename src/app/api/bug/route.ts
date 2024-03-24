import { NextRequest, NextResponse } from "next/server";
import { mailerService } from "~/services/mailing.service";

export async function POST(request: NextRequest) {
  try {
    const { from, replyTo, bugSubject, content } = await request.json();

    // send email
    const result = await mailerService.sendBugMail({
      bugSubject,
      content,
      from,
      email: replyTo,
    });

    if (!result) {
      return NextResponse.json({ message: "failed" }, { status: 500 });
    }

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
}
