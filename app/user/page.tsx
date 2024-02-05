"use client"

import { useAuth } from "@clerk/nextjs"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function User(){

    const [ userName, setUserName ] = useState("")
    const [ userInput, setUserInput ] = useState("")

    const user = useAuth()

    const setUserInDb = async() => {
        const res = await fetch("http://localhost:3000/api/auth", {
            method: "POST",
            body: JSON.stringify({
                clerkUserId: user.userId,
                name: userName
            })
        })
    }

    useEffect(() => {
        setUserInDb()
    }, [userName])

    if(!user.isLoaded){
        return(
            <p>Loading...</p>
        )
    }
    
    return(
        <div className="h-screen flex items-center justify-center">
            <form className="text-center flex flex-col gap-2">
                <label>What should we call you?</label>
                <input onChange={(e) => setUserInput(e.target.value)} placeholder="John Doe" className="p-3 focus:outline-none rounded text-black"/>
                <button onClick={(e) => {
                    e.preventDefault()
                    if(userInput.length !== 0 ){
                        setUserName(userInput)
                    }else{
                        alert("Please enter a valid name")
                    }
                }} className="bg-white text-black p-2 rounded mt-3">Submit</button>
                <Link href={"/"} className="text-white">Skip</Link>
            </form>
        </div>
    )
}