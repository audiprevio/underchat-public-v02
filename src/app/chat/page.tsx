"use client";
import Image from "next/image";
import "../../app/globals.css";
import WelcomeNameMessage from "@/components/containers/WelcomeNameMessage";
import CreditsFooter from "@/components/CreditsFooter";
import { ContactsComponent } from "@/components/containers/ContactsComponent";
export default function Home() {
  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-starts flex-col items-center h-full">
        <div className="h-[2/5] md:h-[1/5]">
        <WelcomeNameMessage />
        </div>
        <br/>
        <div className="h-[55vh] md:h-[65vh] flex overflow-y-scroll items-start justify-start">
        <ContactsComponent />
        </div>
      </div>
    </main>
  );
}
