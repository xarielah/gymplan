// import { Plan } from "@/types/workout-plan.types";
// import { FieldErrors, UseFormRegister } from "react-hook-form";
// import Input from "../elements/input";

// export default function AreYouDone({ register, errors }: AreYouDoneTypes) {
//   return (
//     <>
//       <div className="p-4 border-[1px] space-y-4 mt-12">
//         <div className="text-4xl font-bold">סיימתם?</div>
//         <p>
//           שלחו לעצמכם העתק של הקישור לתכנית המקורית כדי שתמיד יהיה לכם קישור
//           לתכנית האימון שיצרתם.
//         </p>
//         <div className="flex flex-col gap-2">
//           <Input
//             {...register("email")}
//             placeholder="האימייל שלכם"
//             className="md:max-w-[260px] w-full mx-auto"
//             err={errors.email?.message}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// interface AreYouDoneTypes {
//   register: UseFormRegister<Plan>;
//   errors: FieldErrors<Plan>;
// }
