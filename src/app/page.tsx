import { Terminal } from "lucide-react";
import Header from "@/components/header";
import Hug from "@/components/hug";

export default function Home() {
  return (
    <main>
      <Hug Icon={Terminal} name="Node.js"></Hug>
    </main>
  );
}
