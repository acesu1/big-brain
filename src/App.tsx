import { api } from "../convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import {
  Unauthenticated,
  Authenticated,
  useMutation,
  useQuery,
} from "convex/react";

export function App() {
  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.createDocuments);

  return (
    <>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />

        <button
          onClick={() => {
            createDocument({
              title: "hello world",
            });
          }}
        >
          Click me
        </button>

        {documents?.map((doc) => <div key={doc._id}>{doc.title}</div>)}
      </Authenticated>
    </>
  );
}
