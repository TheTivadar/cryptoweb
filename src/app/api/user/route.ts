/* // app/api/user/route.ts
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await auth();
  console.log(session)
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (existingUser) {
    return NextResponse.json({ message: "User already exists" });
  }

  console.log("user hozzáadása")
  const newUser = await prisma.user.create({
    data: {
      name: session.user.name || "",
      email: session.user.email,
    },
  });

  return NextResponse.json({newUser});
}
 */