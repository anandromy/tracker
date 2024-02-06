import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export const POST = async(req: NextRequest) => {

    const body = await req.json()
    const userId: string = body.userId 
    if(!userId){
        return new NextResponse("Please provide a valid user Id", { status: 404 })
    }
    const array = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            projects: true
        }
    })

    return NextResponse.json({ array })
}