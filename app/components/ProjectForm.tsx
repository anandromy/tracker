import { useAuth } from "@clerk/nextjs"
import { useState } from "react"

export const ProjectForm = (props: {
    handleClick: () => void,
}) => {

    const [ projectName, setProjectName ] = useState("")
    const [ projectDescription, setProjectDescription ] = useState("")

    const user = useAuth()

    const addProjectToDb = async(name: string, description: string, id: string) => {
        const res = await fetch("http://localhost:3000/api/project/add", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                description: description,
                createdAt: new Date(),
                userId: id
            })
        })

        const data = await res.json()
    }

    return(
        <div aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="bg-[hsl(222.2,84%,4.9%)] relative p-4 w-full max-w-md max-h-full border border-[hsl(217.2,32.6%,17.5%)] rounded-xl">
                {/* <!-- Modal content --> */}
                <div className="relative rounded-lg shadow text-start">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                        <div>
                            <h3 className="text-2xl font-semibold text-start">
                                Create Project
                            </h3>
                            <p className="text-start text-sm pt-2 pr-3 text-[hsl(215,20.2%,65.1%)]">Enter the details to create a new project</p>
                        </div>
                        
                        <button onClick={props.handleClick} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5">
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium">Project Name</label>
                                <input onChange={(e) => setProjectName(e.target.value)} className="bg-[hsl(222.2,84%,4.9%)] border border-[hsl(217.2,32.6%,17.5%)] text-sm rounded-lg focus:outline-none focus:border-[hsl(224.3,76.3%,48%)] focus:ring-0 focus:ring-[hsl(224.3,76.3%,48%)] block w-full p-2.5" placeholder="urban-train"required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Description</label>
                                <textarea onChange={(e) => setProjectDescription(e.target.value)} className="bg-[hsl(222.2,84%,4.9%)] border border-[hsl(217.2,32.6%,17.5%)] text-sm rounded-lg focus:outline-none focus:border-[hsl(224.3,76.3%,48%)] focus:ring-0 focus:ring-[hsl(224.3,76.3%,48%)] block w-full p-2.5" />
                            </div>
                            <button onClick={(e) => {
                                e.preventDefault()
                                if(user.userId){
                                    addProjectToDb(projectName, projectDescription, user.userId)
                                }
                            }} className="w-full bg-[hsl(217.2,91.2%,59.8%)] text-[hsl(222.2,47.4%,11.2%)] hover:bg-[hsl(217.2,76.3%,48%)] rounded-lg text-sm font-medium px-5 py-2.5 text-center">Create Project</button>
                        </form>
                    </div> 
               </div>
            </div>
        </div>
    )
}