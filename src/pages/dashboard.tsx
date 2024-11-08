import { DocumentCard } from "@/components/document-card";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import { CreateDocumentButton } from "@/components/create-document-button";

export function Dashboard() {
  const documents = useQuery(api.documents.getDocuments);

  return (
    <main className="p-24 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Meus Documentos</h1>
        <CreateDocumentButton />
      </div>

      <div className="grid grid-cols-4 gap-8">
        {documents?.map((doc) => <DocumentCard key={doc._id} document={doc} />)}
      </div>
    </main>
  );
}
