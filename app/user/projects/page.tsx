"use client"

import { ProjectForm } from "@/app/components/ProjectForm"
import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"

const ProjectPage = () => {

    const { userId, isLoaded } = useAuth()
    const [ projects, setProjects ] = useState([])
    const [ hidden, setHidden ] = useState(true)   

    const fetchProjects = async () => {
        
        if(isLoaded){
            const res = await fetch("http://localhost:3000/api/project", {
                method: "POST",
                body: JSON.stringify({
                    userId: userId,
                })
            })
            const arr = await res.json()
            if(res.status === 200){
                setProjects(arr.array.projects)
            }
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])
   
    return(
        <div className="flex-grow flex items-center justify-center">
            {
                projects.length === 0 ?
                <div className="text-center">
                    <p className="text-xl font-bold mb-5">You have no Projects</p>
                    <button onClick={() => setHidden(false)} className="bg-[hsl(217.2,91.2%,59.8%)] rounded-lg py-3 px-6">Add Project</button>
                    {!hidden && <ProjectForm handleClick={() => setHidden(true)}/>}
                </div>
                :
                <div>

                </div>
            }
        </div>
    )
} 

export default ProjectPage