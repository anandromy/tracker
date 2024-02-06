import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient
export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const userId: string = body.userId
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    return NextResponse.json({ user })
}