import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Unauthenticated, Authenticated, AuthLoading } from "convex/react";

export function HeaderActions() {
  return (
    <>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>

      <AuthLoading>Carregando...</AuthLoading>
    </>
  );
}
