"use client";

import { useEffect, useState } from "react";
import { type UseFormSetValue } from "react-hook-form";
import { type Plan } from "~/types/workout-plan.types";
import cn from "~/utils/cn";
import Button from "../elements/button";

const days = [
  { name: "ראשון", value: "sunday" },
  { name: "שני", value: "monday" },
  { name: "שלישי", value: "tuesday" },
  { name: "רביעי", value: "wednesday" },
  { name: "חמישי", value: "thursday" },
  { name: "שישי", value: "friday" },
  { name: "שבת", value: "saturday" },
];

export default function DaysButtonGroup({ setValue }: DaysButtonGroupProps) {
  const [daysArray, setDaysArray] = useState<string[]>([]);

  useEffect(() => {
    setValue("days", daysArray);
  }, [daysArray]);

  const handleDay = (day: string) => {
    if (daysArray.includes(day)) {
      setDaysArray(daysArray.filter((d) => d !== day));
    } else {
      setDaysArray([...daysArray, day]);
    }
  };

  return (
    <section className="flex flex-wrap justify-center gap-2 text-[1rem] md:justify-normal md:gap-0">
      {days.map((day) => (
        <Button
          type="button"
          key={day.value}
          onClick={() => handleDay(day.value)}
          className={cn(
            "text-gray w-max min-w-0 border-[1px] border-b-4 bg-transparent last:border-l-[1px] hover:bg-green-50 md:border-l-0",
            daysArray.includes(day.value) ? "border-b-purple-400" : "",
          )}
        >
          {day.name}
        </Button>
      ))}
    </section>
  );
}

interface DaysButtonGroupProps {
  setValue: UseFormSetValue<Plan>;
}
