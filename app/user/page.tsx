"use client"

import { useAuth, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function User(){

    const [ userName, setUserName ] = useState("")
    const [ userNameFromDb, setUserNameFromDb ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)

    const { userId, isLoaded } = useAuth()

    const setUserInDb = async(userName: string) => {
        const res = await fetch("http://localhost:3000/api/auth", {
            method: "POST",
            body: JSON.stringify({
                clerkUserId: userId,
                name: userName
            })
        })
    }

    const getUserFromDb = async() => {
        const id = userId
        if(isLoaded){
            const res = await fetch("http://localhost:3000/api/auth/getUser", {
                method: "POST",
                body: JSON.stringify({
                    userId: id
                })
            })
            const data = await res.json()
            setUserNameFromDb(data?.user?.name)
        }
    }

    useEffect(() => {
        getUserFromDb()
    }, [])

    if(!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    if(userNameFromDb){
        return(
            <div className="flex flex-grow justify-center items-center">
                {`Hello, ${userNameFromDb}`}
            </div>
        )
    }


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
            </form>
        </div>
    )
}