import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UploadDocumentForm } from "./upload-document-form";
import { useState } from "react";

export function CreateDocumentButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        <Button>Novo Documento</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Novo Documento</SheetTitle>
          <SheetDescription>
            Crie um documento para armazenar suas informações e volte a ver
            quando quiser.
          </SheetDescription>

          <UploadDocumentForm onUpload={() => setIsOpen(false)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
