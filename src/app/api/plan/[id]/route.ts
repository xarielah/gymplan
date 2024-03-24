// import { dbService } from "@/db/db.service";
// import { NextResponse as res } from "next/server";

// interface PlanByIdParams {
//   params: {
//     id: string;
//   };
// }

// async function getPlanById(_: Request, { params }: PlanByIdParams) {
//   try {
//     const plan = await dbService.plan.findOne({ _id: params.id });
//     return res.json({ message: "success", plan }, { status: 200 });
//   } catch (_) {
//     return res.json(
//       { message: `Could not get a plan with id \"${params.id}\".` },
//       { status: 500 }
//     );
//   }
// }

// export { getPlanById as GET };
