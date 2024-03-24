import { type FieldErrors, type UseFormRegister } from "react-hook-form";
import { type Plan } from "~/types/workout-plan.types";
import Button from "../elements/button";
import Input from "../elements/input";
import type { WorkoutSetFieldsName } from "./set-fields";

export default function CustomFields({
  register,
  errors,
  index,
  name,
  workoutIndex,
  setIndex,
  item,
  setFields,
  removeField,
}: CustomFieldsProps) {
  return (
    <div className="flex flex-col gap-4 px-1 py-4 hover:bg-gray-100">
      <div className="flex items-center justify-between">
        <label htmlFor={`${name}.${index}.label`}>שם השדה:</label>
        {setFields > 1 ? (
          <Button
            disabled={setFields === 1}
            type="button"
            className="md:text-md min-w-0 bg-transparent text-red-500 hover:bg-transparent"
            onClick={() => removeField(index)}
          >
            &#10005;
          </Button>
        ) : (
          ""
        )}
      </div>

      <Input
        type="text"
        id={`${name}.${index}.label`}
        placeholder="משקל, מנוחה בין סטים, מטרה..."
        {...register(`${name}.${index}.label`)}
        defaultValue={item.label}
        err={
          errors?.workouts?.[workoutIndex]?.sets?.[setIndex]?.fields?.[index]
            ?.label?.message
        }
      />
      <label htmlFor={`${name}.${index}.value`}>ערך:</label>
      <Input
        id={`${name}.${index}.value`}
        type="text"
        placeholder="45 קילו, 60 שניות מנוחה, טווח תנועה..."
        {...register(`${name}.${index}.value`)}
        defaultValue={item.value}
        err={
          errors?.workouts?.[workoutIndex]?.sets?.[setIndex]?.fields?.[index]
            ?.label?.message
        }
      />
    </div>
  );
}

interface CustomFieldsProps {
  register: UseFormRegister<Plan>;
  errors: FieldErrors<Plan> | undefined;
  name: WorkoutSetFieldsName;
  index: number;
  item: {
    label: string;
    value: string;
  };
  workoutIndex: number;
  setIndex: number;
  setFields: number;
  removeField: (index: number) => void;
}
