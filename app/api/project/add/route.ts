import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient()

export const POST = async (req: NextRequest) => {
    const body: {
        name: string,
        description?: string,
        createdAt: Date,
        userId: string

    } = await req.json()

    const { name, description, createdAt, userId } = body
    const newProject = await prisma.project.create({
        data: {
            name: name,
            description: description,
            createdAt: createdAt,
            user: {
                connect: { id: userId }
            }
        },
    })

    return NextResponse.json({ newProject })
}
