import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tables = await prisma.$queryRawUnsafe<
      { name: string }[]
    >("SELECT name FROM sqlite_master WHERE type='table'");

    return NextResponse.json(tables);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}