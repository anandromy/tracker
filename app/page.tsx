import { SignedOut } from "@clerk/nextjs";
import { UserDashboard } from "./components/userDashboard";
import { Clock } from "./components/Clock";

export default function Home() {

  return (
    <main>
      <SignedOut>
        <div className="flex justify-center items-center h-screen">
          <p className="font-bold text-3xl">Hello</p>
        </div>
      </SignedOut>
      <div className="flex h-screen">
        <UserDashboard />
        <div className="flex-grow flex justify-center items-center">
          <Clock />
        </div>
      </div>
    </main>
  );
}
