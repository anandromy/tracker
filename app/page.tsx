import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UserDashboard } from "./components/userDashboard";
import { Clock } from "./components/Clock";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <SignedOut>
        <div className="flex justify-center items-center h-screen">
          <p className="font-bold text-3xl">Hello</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Link href="/user">User</Link>
      </SignedIn>
    </main>
  );
}
