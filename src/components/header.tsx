import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Unauthenticated, Authenticated } from "convex/react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center h-16">
        <Link to="/" className="font-medium tracking-wide text-2xl">
          BIGBRAIN
        </Link>

        <div>
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <div className="flex gap-4">
              <ModeToggle />

              <UserButton />
            </div>
          </Authenticated>
        </div>
      </div>
    </div>
  );
}
