import { createFileRoute } from "@tanstack/react-router";
import Presentation from "@/components/presentation/Presentation";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <Presentation />;
}
