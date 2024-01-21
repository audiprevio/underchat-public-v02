"use client";

import { Button } from "@/components/ui/button";
import Love from "../../public/assets/love.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-undertale text-center text-white bg-black h-[100dvh]">
      <div className="flex justify-center items-center  flex-col h-full">
        <div className="w-[90vw] md:w-[50vw]">
          <div className="flex justify-center items-center">
          <Image
          src={Love}
          alt="User"
          width={28}
          height={28}
          className="ml-2 shrink-0"
        />
          </div>
          <div className="text-2xl md:text-4xl">Welcome to Undernet Chat!</div>
          <div className="text-lg md:text-xl">Version 0.2 - &apos;Nice Cream&apos;</div>
          <div className="text-2xl md:text-4xl mt-10 mb-2">-------Instruction-------</div>
          <div className="text-lg leading-5 md:text-2xl text-center mb-6">
            * Chat with your monster friends in the Undernet!
          </div>
          <div className="text-lg leading-5  md:text-2xl text-center my-6">
            * Your chat is not recorded, so this app won&apos;t be able to read your chat
          </div>
          <div className="text-lg leading-5 md:text-2xl text-center my-6">
            * Chat history is still in the works. So if you close your tab, the chat will be deleted, sorry! But we will open new tabs for you for navigation buttons.
          </div>
          <Link href="/chat">
          <Button className="mt-10 bg-transparent hover:bg-transparent border-2 rounded-none text-2xl">
            START
          </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
