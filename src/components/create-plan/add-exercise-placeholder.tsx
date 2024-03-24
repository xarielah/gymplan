import { TiPlus } from "react-icons/ti";

interface AddExercisePlaceholderProps {
  add: () => void;
  hide: boolean;
}

export default function AddExercisePlaceholder({
  add,
  hide,
}: AddExercisePlaceholderProps) {
  if (hide) return "";
  return (
    <div
      onClick={add}
      role="button"
      className="border-3 border-dorr mt-5 flex min-h-[70px] w-full max-w-[95%] flex-col items-center justify-center rounded-3xl border-4 border-dotted hover:bg-gray-100 md:mt-10"
    >
      <TiPlus className="text-5xl text-gray-300" />
      <h1 className="text-gray-400">הוספת תרגיל</h1>
    </div>
  );
}
