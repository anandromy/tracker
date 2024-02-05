"use client"
import { useState } from "react"

export const UserDashboard = () => {
    const [ active, setActive ] = useState("")
    return(
        <div className="flex flex-col justify-start border-r border-[hsl(217.2,32.6%,17.5%)] gap-6 py-5 px-6 border">
            <button onClick={() => setActive("project")} className={`text-start py-3 px-6 rounded-lg ${(active === "project") && "bg-[hsl(217.2,91.2%,59.8%)]" }`}>Projects</button>
            <button onClick={() => setActive("timer")} className={`text-start py-3 px-6 rounded-lg ${(active === "timer") && "bg-[hsl(217.2,91.2%,59.8%)]" }`}>Timer</button>
            <button onClick={() => setActive("analytics")} className={`text-start py-3 px-6 rounded-lg ${(active === "analytics") && "bg-[hsl(217.2,91.2%,59.8%)]" }`}>Analytics</button>
            <button onClick={() => setActive("detailed_table")} className={`text-start py-3 px-6 rounded-lg ${(active === "detailed_table") && "bg-[hsl(217.2,91.2%,59.8%)]" }`}>Detailed table</button>
            <button onClick={() => setActive("summary")} className={`text-start py-3 px-6 rounded-lg ${(active === "summary") && "bg-[hsl(217.2,91.2%,59.8%)]" }`}>Summary Dashboard</button>
            <button onClick={() => setActive("weekly_dashboard")} className={`text-start py-3 px-6 rounded-lg ${(active === "weekly_dashboard") && "bg-[hsl(217.2,91.2%,59.8%)]" }`}>Weekly Dashboard</button>
        </div>
    )
} 