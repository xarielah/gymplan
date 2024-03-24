import { Html } from "@react-email/components";

import {
  Body,
  Button,
  Container,
  Head,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface BugEmailProps {
  email: string;
  from: string;
  bugSubject: string;
  content: string;
}

export default function BugEmail({
  email,
  bugSubject,
  from,
  content,
}: BugEmailProps) {
  return (
    <Html dir="rtl" lang="he">
      <Head />
      <Preview>יש דיווח על באג באתר</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px] text-right">
            <Text className="text-[14px] leading-[24px] text-black">
              קיבלת דיווח על באג באתר.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              מאת: {from}
              <br />
              כתובת לחזרה: {email}
              <br />
              נושא: {bugSubject || "לא הוזן"}
              <br />
              תוכן: {content}
            </Text>
            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={`mailto:${email}?subject=בהמשך+לדיווח+שלך:+${bugSubject}&body=${content}`}
              >
                שליחת הודעה לשולח
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
