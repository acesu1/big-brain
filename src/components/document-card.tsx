import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doc } from "convex/_generated/dataModel";
import { Button } from "./ui/button";

export function DocumentCard({ document }: { document: Doc<"documents"> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p></p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Abrir</Button>
      </CardFooter>
    </Card>
  );
}
