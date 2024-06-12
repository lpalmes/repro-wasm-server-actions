import { headers } from "next/headers";
import { ClientComponent } from "@/components/ClientComponent";
import { Codeblock } from "@/components/Codeblock";

export default function Home() {
  headers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* @ts-ignore */}
      <Codeblock />
      <ClientComponent />
    </main>
  );
}
