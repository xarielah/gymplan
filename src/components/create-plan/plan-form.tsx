"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { daysArray } from "~/lib/api-validators/plan.validator";
import type { Plan, Workout } from "~/types/workout-plan.types";
import Accordion from "../elements/accordion";
import AccordionItem from "../elements/accordion-item";
import Banner from "../elements/banner";
import Button from "../elements/button";
import Form from "../elements/form";
import FormError from "../elements/form-error";
import Input from "../elements/input";
import Textarea from "../elements/textarea";
import AllGood from "./all-good";
import DaysButtonGroup from "./days-button-group";
import WorkoutFields from "./workout-fields";

export const PlanSchema = z.object({
  name: z.string().min(2, "מינימום 2 תווים, מקסימום 255").max(255),
  description: z.string().max(500).optional(),
  days: z.array(z.enum(daysArray)).min(1, "חובה לבחור לפחות יום אחד"),
  workouts: z.array(
    z.object({
      workoutType: z.string().min(2, "מינימום 2 תווים, מקסימום 255").max(255),
      description: z.string().max(500).optional(),
      sets: z.array(
        z.object({
          setName: z.string().min(2, "מינימום 2 תווים, מקסימום 255").max(255),
          notes: z.string().max(500).optional(),
          fields: z.array(
            z.object({
              label: z.string().min(1, "מינימום 1 תווים, מקסימום 40").max(40),
              value: z.string().min(1, "מינימום 1 תווים, מקסימום 100").max(100),
            }),
          ),
        }),
      ),
    }),
  ),
});

const defaultWorkoutAppend: Workout = {
  workoutType: "",
  description: "",
  sets: [{ notes: "", setName: "", fields: [{ label: "", value: "" }] }],
};

const defaultWorkout: Workout = {
  workoutType: "",
  description: "",
  sets: [
    {
      fields: [{ label: "", value: "" }],
      notes: "",
      setName: "",
    },
  ],
};

const defaultPlan: Plan = {
  name: "",
  description: "",
  workouts: [defaultWorkout],
  days: [],
};

export default function PlanForm() {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<Plan>({
    defaultValues: defaultPlan,
    resolver: zodResolver(PlanSchema),
  });

  // Used to display the "Workout" fields
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "workouts",
  });

  // If the form is dirty, show a warning before leaving the page
  useEffect(() => {
    if (isDirty) window.onbeforeunload = () => true;
  }, [isDirty]);

  const submitForm = async (data: Plan): Promise<void> => {
    try {
      const response = await fetch("/api/plan", {
        body: JSON.stringify(data),
        method: "POST",
      });

      if (response.status === 201) {
        setIsSubmitSuccessful(true);
        reset();
        const json = (await response.json()) as Awaited<{
          data: { id: string };
        }>;
        if (json?.data?.id) {
          router.push(json.data.id ?? "/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addActivity = (): void => append(defaultWorkoutAppend);

  if (isSubmitSuccessful) return <AllGood />;
  return (
    <Form onSubmit={handleSubmit(submitForm)} className="text-xl">
      <Banner>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <h1 className="text-4xl font-bold">פרטי התכנית</h1>
          <Button
            type="button"
            className="w-max text-sm"
            disabled={fields.length >= 10}
            onClick={addActivity}
          >
            הוספת פעילות
          </Button>
        </div>
      </Banner>
      <label htmlFor="location">ימים לביצוע:</label>
      <DaysButtonGroup setValue={setValue} />
      <FormError err={errors.days?.message} />
      <label htmlFor="name">שם התוכנית:</label>
      <Input
        type="text"
        id="name"
        {...register("name")}
        err={errors.name?.message}
      />
      <label htmlFor="description">תיאור התכנית:</label>
      <Textarea
        id="description"
        className="w-full"
        {...register("description")}
        err={errors.description?.message}
      />

      <hr className="my-6" />
      <section className="mb-12 space-y-12">
        <Banner className="bg-transparent text-black">
          <h1 className="text-2xl font-bold md:text-3xl">
            קבוצות שריר / פעילויות ({fields.length}/10)
          </h1>
          <p className="mt-2 text-lg">
            כאן תוכלו להוסיף פעילויות לתכנית האימון שלכם, ולהגדיר סטים ושדות לכל
            פעילות. ניתן להוסיף עד 10 פעילויות לתכנית.
            <br />
            <b>לכל תכנית נדרש מינימום פעילות אחת ומינימום תרגיל אחד</b>. כל
            פעילות תכלול סטים ושדות שתוכלו להגדיר בהתאמה אישית שלכם.
          </p>
        </Banner>
        <section className="flex flex-col">
          <Accordion>
            {fields.map((item, index) => (
              <AccordionItem
                heading={`#${index + 1} - 
            ${watch(`workouts.${index}.workoutType`) ?? `מקטע אימון`}`}
                key={item.id}
                id={item.id}
              >
                <WorkoutFields
                  index={index}
                  workouts={fields.length}
                  remove={remove}
                  register={register}
                  control={control}
                  errors={errors}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <div className="mx-auto flex w-max items-center gap-4">
          <Button
            type="submit"
            className="mx-auto w-max text-sm"
            loading={isSubmitting}
          >
            יצירת תוכנית
          </Button>
        </div>
      </section>
    </Form>
  );
}
