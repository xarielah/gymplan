export default function FormError({ err }: FormErrorProps) {
  if (!err) return "";
  return <div className="text-red-500 text-[0.9em]">{err}</div>;
}

interface FormErrorProps {
  err: string | undefined;
}
