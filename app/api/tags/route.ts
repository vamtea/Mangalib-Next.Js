import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const tags = await prisma.tags.findMany();

    return NextResponse.json(tags)
}