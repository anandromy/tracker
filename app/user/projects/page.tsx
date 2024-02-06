"use client"

import { ProjectForm } from "@/app/components/ProjectForm"
import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { ProjectTable } from "@/app/components/ProjectsTable"
import { DateTime } from "next-auth/providers/kakao"

export type Project = {
    name: string,
    description: string,
    id: string,
    userId: string,
    createdAt: DateTime,
    updatedAt: DateTime
}

const ProjectPage = () => {

    const { userId, isLoaded } = useAuth()
    const [ projects, setProjects ] = useState<Project[]>([])
    const [ hidden, setHidden ] = useState(true)   

    const [ isLoading, setIsLoading ] = useState(true)

    const fetchProjects = async () => {
        
        if(isLoaded){
            const res = await fetch("http://localhost:3000/api/project", {
                method: "POST",
                body: JSON.stringify({
                    userId: userId,
                })
            })
            const arr = await res.json()
            setIsLoading(false)
            if(res.status === 200){
                setProjects(arr.array.projects)
            }
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])
    console.log(projects)
   
    return(
        <div className="flex-grow flex items-center justify-center">
            {
                isLoading ? <p>Loading Your Projects...</p>
                :
                projects.length === 0?
                <div className="text-center">
                    <p className="text-xl font-bold mb-5">You have no Projects</p>
                    <button onClick={() => setHidden(false)} className="bg-[hsl(217.2,91.2%,59.8%)] rounded-lg py-3 px-6">Add Project</button>
                    {!hidden && <ProjectForm handleClick={() => setHidden(true)} />}
                </div>
                :
                <div className="flex-grow h-screen p-6">
                    <div className="flex justify-between mb-3">
                        <div>
                            <p className="font-semibold text-xl mb-1">Projects</p>
                            <p className="text-sm text-[hsl(215,20.2%,65.1%)]">These are the projects you've been working on</p>
                        </div>
                        <button onClick={() => setHidden(false)} className="rounded-lg px-6 py-3">Add project</button>
                        {!hidden && <ProjectForm handleClick={() => setHidden(true)} />}
                    </div>
                    <ProjectTable projects={projects}/>
                </div>
            }
        </div>
    )
} 

export default ProjectPage