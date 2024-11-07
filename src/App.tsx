// import { api } from "../convex/_generated/api";
// import { SignInButton, UserButton } from "@clerk/clerk-react";
// import {
//   Unauthenticated,
//   Authenticated,
//   useMutation,
//   useQuery,
// } from "convex/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {
  // const documents = useQuery(api.documents.getDocuments);
  // const createDocument = useMutation(api.documents.createDocuments);

  return <RouterProvider router={router} />;
}
