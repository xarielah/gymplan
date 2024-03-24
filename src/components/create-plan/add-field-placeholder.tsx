import { TiPlus } from "react-icons/ti";

interface AddFieldPlaceholderProps {
  add: () => void;
  hide: boolean;
}

export default function AddFieldPlaceholder({
  add,
  hide,
}: AddFieldPlaceholderProps) {
  if (hide) return "";
  return (
    <div
      onClick={add}
      role="button"
      className="border-3 flex min-h-[70px] flex-col items-center justify-center rounded-3xl border-4 border-dotted text-center hover:bg-gray-100 md:min-h-[225px]"
    >
      <TiPlus className="text-5xl text-gray-300 md:text-4xl" />
      <h1 className="text-gray-400">הוספת שדות</h1>
    </div>
  );
}
