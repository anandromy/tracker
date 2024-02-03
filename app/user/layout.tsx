import { auth } from "@clerk/nextjs";

export default function userLayout(){
    const user = auth()
    

    return(
        <div>
            
        </div>
    )
}