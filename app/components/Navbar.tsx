import { SignInButton, SignUpButton, UserButton, auth } from "@clerk/nextjs"
export const Navbar = () => {
    const user = auth()

    return(
        <div className="flex justify-between items-center border-b border-[hsl(217.2,32.6%,17.5%)] py-3 px-6">
            <p className="text-3xl font-bold">tracker</p>
            {user.userId?
                <div className="">
                    <button className="bg-[hsl(217.2,91.2%,59.8%)] rounded-lg py-3 px-6">Account</button>
                </div>
                :
                <button title="Sign In" className="px-6 py-1 bg-white text-black font-semibold rounded"><SignUpButton afterSignUpUrl="http://localhost:3000/user"/></button>
            }
        </div>
    )
}