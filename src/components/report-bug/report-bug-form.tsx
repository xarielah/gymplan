"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BugEmailSchema,
  BugTypes,
} from "~/lib/api-validators/bug-email.validator";
import Button from "../elements/button";
import Input from "../elements/input";
import Select from "../elements/select";
import Textarea from "../elements/textarea";
import ThankYou from "./thank-you";

export type ReportBugFields = {
  replyTo: string;
  from: string;
  bugSubject: BugTypes;
  content: string;
};

export default function ReportBugForm() {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const { data } = useSession();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful: doneSubmitting },
  } = useForm<ReportBugFields>({
    defaultValues: {
      replyTo: "",
      from: "",
      bugSubject: BugTypes.OTHER,
      content: "",
    },
    resolver: zodResolver(BugEmailSchema),
  });

  // Show error message if there was an issue submitting the form
  useEffect(() => {
    if (!isSubmitting && doneSubmitting && !isSubmitSuccessful) {
      alert("הייתה בעיה בשליחת הדיווח, אנא נסו שוב מאוחר יותר");
    }
  }, [doneSubmitting, isSubmitting]);

  // Set default values for replyTo and from fields if user is logged in
  useEffect(() => {
    if (data?.user.email) {
      setValue("replyTo", data.user.email);
    }

    if (data?.user.name) {
      setValue("from", data.user.name);
    }
  }, [data]);

  // Submit form data to the server
  const onSubmit = async (data: ReportBugFields) => {
    try {
      const response = await fetch("/api/bug", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset();
        setIsSubmitSuccessful(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closeThankYou = () => {
    setIsSubmitSuccessful(false);
    reset();
  };

  return (
    <section className="space-y-6 bg-zinc-900 p-8 text-white">
      <div className="mx-auto max-w-4xl">
        {isSubmitSuccessful ? <ThankYou close={closeThankYou} /> : ""}
        <div className="mb-6 space-y-2">
          <h1 className="text-3xl font-bold md:text-4xl">יש בעיה?</h1>
          <p className="text-xl">
            נשמח אם תדווחו לנו על בעיות, הצעות לייעול, וכל נושא אחר רלוונטי
            שתמצאו צורך ליצור איתנו קשר לגביו.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-xl text-black"
        >
          <Input
            err={errors.from?.message}
            {...register("from")}
            placeholder="שם הגורם המדווח"
          />
          <Input
            err={errors.replyTo?.message}
            {...register("replyTo")}
            placeholder="אימייל לחזרה"
          />
          <Select
            err={errors.bugSubject?.message}
            {...register("bugSubject")}
            className="w-full"
          >
            {Object.values(BugTypes).map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
          <Textarea
            err={errors.content?.message}
            {...register("content")}
            className="w-full"
            maxLength={500}
            placeholder="האתר איטי, יש הצעה, משהו לא עובד? ספרו לנו כאן..."
          />
          <div className="flex justify-center">
            <Button type="submit" loading={isSubmitting}>
              שליחת דיווח
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
