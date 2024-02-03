import { SignInButton, UserButton, auth } from "@clerk/nextjs"
export const Navbar = () => {
    const user = auth()
    return(
        <div className="flex px-6 py-3 justify-between items-center">
            <p className="text-3xl font-bold">tracker</p>
            {user.userId ?
                <UserButton />
                :
                <button title="Sign In" className="px-6 py-1 bg-white text-black font-semibold rounded"><SignInButton /></button>
            }
        </div>
    )
}