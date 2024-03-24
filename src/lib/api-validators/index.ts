import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export default async function validate(
  schema: z.AnyZodObject | z.ZodOptional<z.AnyZodObject>,
  req: NextRequest
) {
  try {
    let body = await req.json();
    await schema.parseAsync(body);
    NextResponse.next();
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const { fieldErrors } = error.flatten();
      return NextResponse.json(
        {
          status: 400,
          fieldErrors,
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { status: 500, message: error.message },
        { status: 500 }
      );
    }
  }
}
