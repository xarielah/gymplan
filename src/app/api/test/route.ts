import { NextResponse } from "next/server";
import { mailerService } from "~/services/mailing.service";

export async function GET() {
  const response = await mailerService.sendPlanMail(
    "arielahr45@gmail.com",
    "test subject",
  );

  console.log("🚀 ~ file: route.ts ~ line 24 ~ GET ~ response", response);

  return NextResponse.json("test");
}
