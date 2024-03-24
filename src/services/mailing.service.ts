import { render } from "@react-email/components";
import nodeMailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import BugEmail from "~/components/email/bug-email";

class MailerService {
  private transporter = nodeMailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  constructor() {
    if (
      !process.env.MAIL_USER ||
      !process.env.MAIL_PASS ||
      !process.env.SYSTEM_MAIL ||
      !process.env.MAIL_HOST ||
      !process.env.MAIL_PORT
    ) {
      throw new Error(
        "Please provide the following environment variables: MAIL_USER, MAIL_PASS, SYSTEM_MAIL, MAIL_HOST, MAIL_PORT",
      );
    }
  }

  private async sendMail(
    to: string,
    subject: string,
    html: string,
  ): Promise<SMTPTransport.SentMessageInfo> {
    return this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject,
      html,
    });
  }

  async sendPlanMail(
    to: string,
    planId: string,
  ): Promise<SMTPTransport.SentMessageInfo> {
    const subject = ""; // Subject of the Email
    const html = render(
      BugEmail({ email: to, bugSubject: planId, from: "123", content: "asd" }),
    ); // Render Email Component

    return this.sendMail(to, subject, html);
  }

  async sendBugMail({
    email,
    bugSubject,
    from,
    content,
  }: {
    email: string;
    bugSubject: string;
    from: string;
    content: string;
  }): Promise<SMTPTransport.SentMessageInfo> {
    const subject = "GymPlan.co.il דיווח על באג - " + bugSubject || "ללא נושא"; // Subject of the Email
    const html = render(BugEmail({ email, bugSubject, from, content })); // Render Email Component

    return this.sendMail(process.env.SYSTEM_MAIL!, subject, html);
  }
}

export const mailerService = new MailerService();
