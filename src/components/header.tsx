import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { HeaderActions } from "./header-actions";

export function Header() {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center h-16">
        <Link to="/" className="font-medium tracking-wide text-2xl">
          BIGBRAIN
        </Link>

        <div className="flex gap-4 items-center">
          <ModeToggle />

          <HeaderActions />
        </div>
      </div>
    </div>
  );
}
