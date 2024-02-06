import React from "react"
import { UserDashboard } from "../components/userDashboard"
export default function UserLayout({ children }: Readonly<{children: React.ReactNode}>){
    return(
        <div className="flex">
            <UserDashboard />
            {children}
        </div>
    )
}