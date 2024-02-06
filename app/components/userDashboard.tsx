"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const UserDashboard = () => {
    const pathname = usePathname()
    return(
        <div className="flex flex-col justify-start border-r border-[hsl(217.2,32.6%,17.5%)] gap-6 py-5 px-6 h-screen">
            <Link href="/user/projects" className={clsx('text-start py-3 px-6 rounded-lg', {"bg-[hsl(217.2,91.2%,59.8%)]": pathname === "/user/projects"})}>Projects</Link>
            <Link href="/user/timer" className={clsx('text-start py-3 px-6 rounded-lg', {"bg-[hsl(217.2,91.2%,59.8%)]": pathname === "/user/timer"})}>Timer</Link>
            <Link href="/user/analytics" className={clsx('text-start py-3 px-6 rounded-lg', {"bg-[hsl(217.2,91.2%,59.8%)]": pathname === "/user/analytics"})}>Analytics</Link>
            <Link href="/user/detailed_table" className={clsx('text-start py-3 px-6 rounded-lg', {"bg-[hsl(217.2,91.2%,59.8%)]": pathname === "/user/detailed_table"})}>Detailed Table</Link>
            <Link href="/user/dashboard" className={clsx('text-start py-3 px-6 rounded-lg', {"bg-[hsl(217.2,91.2%,59.8%)]": pathname === "/user/dashboard"})}>Dashboard</Link>
            <Link href="/user/weekly_dashboard" className={clsx('text-start py-3 px-6 rounded-lg', {"bg-[hsl(217.2,91.2%,59.8%)]": pathname === "/user/weekly_dashboard"})}>Weekly Dashboard</Link>
        </div>
    )
} 