
import { Project } from "../user/projects/page"
export const ProjectTable = (props: {
    projects: Project[]
}) => {

    const currentDate = new Date().getFullYear()
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return(
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-[hsl(217.2,32.6%,17.5%)]">
            <div className="border-b p-3 border-[hsl(217.2,32.6%,17.5%)]">
                <label className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" className="bg-[hsl(222.2,84%,4.9%)] ps-10 border border-[hsl(217.2,32.6%,17.5%)] block py-3 text-sm rounded-lg w-80 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Search for projects" />
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-[hsl(215,20.2%,65.1%)]">
                <thead className="border-b border-[hsl(217.2,32.6%,17.5%)]">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="checkbox" className="relative appearance-none w-4 h-4 rounded border bg-[hsl(222.2,84%,4.9%)] border-[hsl(224.3,76.3%,48%)] cursor-pointer checked:bg-[hsl(217.2,91.2%,59.8%)] checked:border-0 peer"/>
                                <svg className="absolute w-4 h-4 hidden peer-checked:block pointer-events-none text-[hsl(222.2,47.4%,11.2%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <label className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Project
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Timeframe
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Time Spent
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.projects.map((p) => {
                        return(
                            <tr className="border-b border-[hsl(217.2,32.6%,17.5%)] hover:bg-[hsl(217.2,32.6%,17.5%)]">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                    <input type="checkbox" id="checkbox" className="relative appearance-none w-4 h-4 rounded border bg-[hsl(222.2,84%,4.9%)] border-[hsl(224.3,76.3%,48%)] cursor-pointer checked:bg-[hsl(217.2,91.2%,59.8%)] checked:border-0 peer"/>
                                        <svg className="absolute w-4 h-4 hidden peer-checked:block pointer-events-none text-[hsl(222.2,47.4%,11.2%)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <label className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                                    {p.name}
                                </th>
                                <td className="px-6 py-4 text-white">
                                    {p.createdAt}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {'working'}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {'very much'}
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}