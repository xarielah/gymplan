import {
  useFieldArray,
  type Control,
  type FieldErrors,
  type UseFormRegister,
} from "react-hook-form";
import type { Plan } from "~/types/workout-plan.types";
import Alert from "../elements/alert";
import Button from "../elements/button";
import Input from "../elements/input";
import Textarea from "../elements/textarea";
import AddExercisePlaceholder from "./add-exercise-placeholder";
import SetFields from "./set-fields";

interface WorkoutFieldsProps {
  index: number;
  remove: (index: number) => void;
  register: UseFormRegister<Plan>;
  control: Control<Plan, any>;
  errors: FieldErrors<Plan>;
  workouts: number;
}

export default function WorkoutFields({
  index,
  remove,
  register,
  workouts,
  errors,
  control,
}: WorkoutFieldsProps) {
  const {
    fields,
    append,
    remove: removeSet,
  } = useFieldArray({
    control: control,
    name: `workouts.${index}.sets`,
  });

  return (
    <div className="flex flex-col gap-3">
      {/* <Banner>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col items-center gap-4 md:flex-row"></div>
        </div>
      </Banner> */}
      <div className="flex justify-end">
        {workouts > 1 ? (
          <Button
            className="w-max text-sm"
            type="button"
            disabled={workouts === 1}
            onClick={() => remove(index)}
          >
            מחק פעילות
          </Button>
        ) : (
          ""
        )}
      </div>
      <label htmlFor={`workouts.${index}.type`}>סוג הפעילות:</label>
      <Input
        type="text"
        placeholder="לדוגמה אימון חזה / אימון רגליים וכו..."
        id={`workouts.${index}.type`}
        {...register(`workouts.${index}.workoutType` as const)}
        err={errors?.workouts?.[index]?.workoutType?.message}
      />
      <label htmlFor={`workouts.${index}.description`}>תיאור הפעילות:</label>
      <Textarea
        className="w-full"
        placeholder="לדוגמה תיאור האימון, טיפים, דיוקים וכו'..."
        id={`workouts.${index}.description`}
        {...register(`workouts.${index}.description` as const)}
        err={errors?.workouts?.[index]?.description?.message}
      />
      <div className="flex flex-col items-center gap-4">
        {index === 0 ? (
          <Alert type="info" canClose cookieName="hide-set-note">
            בכל תרגיל ניתן ונדרש להוסיף שדות מאפיינים אשר ישוקפו במסמך הסופי כשם
            וערך. לדוגמה - משקל: 25 ק&quot;ג, או, חזרות: 4...
          </Alert>
        ) : (
          ""
        )}
        {fields.map((item, setIndex) => (
          <SetFields
            control={control}
            key={item.id}
            sets={fields.length}
            setIndex={setIndex}
            workoutIndex={index}
            register={register}
            remove={removeSet}
            errors={errors}
          />
        ))}
        <AddExercisePlaceholder
          add={() => append({ notes: "", setName: "", fields: [] })}
          hide={fields.length >= 10}
        />
      </div>
    </div>
  );
}
