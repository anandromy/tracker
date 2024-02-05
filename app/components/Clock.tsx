"use client"

import { useEffect, useState } from "react"

export const Clock = () => {
    const [ time, setTime ] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    })
    return(
        <div className="font-bold text-3xl">
            <p suppressHydrationWarning>{time.toLocaleTimeString()}</p>
        </div>
    )
}