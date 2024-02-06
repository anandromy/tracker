"use client"

import { useAuth, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { useState } from "react"

export default function User(){

    const [ userName, setUserName ] = useState("")


    const { user, isLoaded } = useUser()

    const setUserInDb = async(userName: string) => {
        const res = await fetch("http://localhost:3000/api/auth", {
            method: "POST",
            body: JSON.stringify({
                clerkUserId: user?.id,
                name: userName
            })
        })
        await user?.update({
            username: userName
        })
    }

    if(!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    
    if(!user?.username){
        return(
            <div className="h-screen flex flex-grow">
                <form className="text-center flex flex-col gap-2 mt-36 mx-auto">
                    <label>What should we call you?</label>
                    <input onChange={(e) => setUserName(e.target.value)} placeholder="John Doe" className="p-3 focus:outline-none rounded text-black"/>
                    <button onClick={(e) => {
                        e.preventDefault()
                        if(userName.length === 0){
                            return alert("Please provide a valid username")
                        }
                        setUserInDb(userName)
                    }} className="bg-white text-black p-2 rounded mt-3">Submit</button>
                    <Link href={"/user/projects"} className="text-white">Skip</Link>
                </form>
            </div>
        )
    }

    return(
        <div>
            This user's name is set
        </div>
    )
}