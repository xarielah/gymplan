import {
  Control,
  FieldErrors,
  useFieldArray,
  type UseFormRegister,
} from "react-hook-form";
import type { Plan } from "~/types/workout-plan.types";
import Banner from "../elements/banner";
import BannerHeader from "../elements/banner-header";
import Button from "../elements/button";
import Input from "../elements/input";
import Textarea from "../elements/textarea";
import AddFieldPlaceholder from "./add-field-placeholder";
import CustomFields from "./custom-fields";

interface SetFieldsProps {
  setIndex: number;
  register: UseFormRegister<Plan>;
  workoutIndex: number;
  remove: (index: number) => void;
  errors: FieldErrors<Plan> | undefined;
  control: Control<Plan, any>;
  sets: number;
}

export type WorkoutSetName = `workouts.${number}.sets.${number}`;
export type WorkoutSetFieldsName = `workouts.${number}.sets.${number}.fields`;

export default function SetFields({
  setIndex,
  workoutIndex,
  register,
  remove: removeSet,
  control,
  errors,
  sets,
}: SetFieldsProps) {
  const name: WorkoutSetName = `workouts.${workoutIndex}.sets.${setIndex}`;
  const fieldName: WorkoutSetFieldsName = `workouts.${workoutIndex}.sets.${setIndex}.fields`;

  const {
    append,
    remove: removeField,
    fields,
  } = useFieldArray({
    control: control,
    name: `${name}.fields`,
  });

  return (
    <div className="flex w-full flex-col space-y-2 bg-gray-50 px-2 py-4">
      <div className="flex items-center gap-3">
        <Banner className="flex items-center justify-between bg-transparent p-0 text-gray-800">
          <BannerHeader title={`תרגיל #${setIndex + 1}:`} />
          <div className="flex flex-col items-center gap-2">
            {sets > 1 ? (
              <Button
                className="w-full whitespace-nowrap text-sm"
                type="button"
                disabled={sets === 1}
                onClick={() => removeSet(setIndex)}
              >
                מחק תרגיל
              </Button>
            ) : (
              ""
            )}
          </div>
        </Banner>
      </div>
      <label htmlFor={`${name}.setName`}>שם תרגיל:</label>
      <Input
        {...register(`${name}.setName`)}
        id={`${name}.setName`}
        placeholder="דחיקת חזה עליון עם מוט, פשיטת מרפק בכייבל קרוס עם חבל..."
        err={
          errors?.workouts?.[workoutIndex]?.sets?.[setIndex]?.setName?.message
        }
      />
      <label htmlFor={`${name}.notes`}>תיאור תרגיל:</label>
      <Textarea
        {...register(`${name}.notes`)}
        className="w-full"
        id={`${name}.notes`}
        placeholder="הערות נוספות רלוונטיות לסט..."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
        {fields.map((item, index) => (
          <CustomFields
            removeField={removeField}
            setFields={fields.length}
            key={item.id}
            register={register}
            setIndex={setIndex}
            workoutIndex={workoutIndex}
            index={index}
            name={fieldName}
            item={item}
            errors={errors!}
          />
        ))}
        <AddFieldPlaceholder
          hide={fields.length >= 10}
          add={() => append({ label: "", value: "" })}
        />
      </div>
    </div>
  );
}
