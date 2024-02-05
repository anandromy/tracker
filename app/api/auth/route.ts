import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export const POST = async (req: NextRequest) => {
    const { clerkUserId, name } = await req.json()
    if(!clerkUserId){
        return NextResponse.json({ message: "No userId", statusbar: 401 })
    }
    const res = await prisma.user.upsert({
       where: {
        id: clerkUserId
       },
       update:{
        id: clerkUserId,
        name: name
       },
       create: {
        id: clerkUserId,
        name: name
       } 
    })

    return NextResponse.json({ response: res })
}