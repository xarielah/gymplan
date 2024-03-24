import { z } from "zod";

export enum BugTypes {
  NOTWORKING = "משהו לא עובד",
  SUGGESTION = "הצעה",
  SLOWLY = "איטיות",
  OTHER = "אחר",
}

export const bugTypesValues = Object.values(BugTypes);

export const BugEmailSchema = z
  .object({
    replyTo: z
      .string()
      .email("כתובת אימייל אינה תקינה")
      .max(50, "מקסימום 50 אותיות בכתובת האימייל"),
    from: z
      .string()
      .min(2, "מינימום 2 אותיות בשם השולח")
      .max(25, "מקסימום 25 אותיות בשם השולח"),
    bugSubject: z.enum(bugTypesValues as [string, ...string[]]),
    content: z
      .string()
      .min(3, "מינימום שלוש אותיות בתוכן ההודעה")
      .max(500, "מקסימום 500 אותיות בתוכן ההודעה"),
  })
  .required();
