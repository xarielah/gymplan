// import { dbService } from "@/db/db.service";
// import { NextApiResponse } from "next";
// import { NextResponse } from "next/server";

// async function createNewPlan(req: Request, res: NextApiResponse) {
//   try {
//     const body = await req.json();
//     const newPlan = new dbService.plan(body);
//     const result = await newPlan.save({ new: true });
//     return NextResponse.json(
//       {
//         message: "created!",
//         data: {
//           id: result._id,
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     return NextResponse.json(
//       { status: 500, error: error.errors },
//       { status: 500 }
//     );
//   }
// }

// export { createNewPlan as POST };
