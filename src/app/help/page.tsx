"use client";

import { Button } from "@/components/ui/button";
import Love from "../../../public/assets/love.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-undertale text-center text-white bg-black h-[100dvh]">
      <div className="flex justify-center items-center  flex-col h-full">
        <div className="overflow-y-scroll w-[90vw] md:w-[50vw]">
          <div className="flex justify-center items-center">
          <Image
          src={Love}
          alt="User"
          width={28}
          height={28}
          className="ml-2 shrink-0"
        />
          </div>
          <div className="text-2xl md:text-4xl">So You Need Help?</div>
          <div className="text-2xl md:text-4xl mt-10 mb-2">-------FAQ-------</div>
          <div className="text-lg leading-5 md:text-2xl text-center mb-6">
            * Uh well, you can chat with your monster friends in the main menu
          </div>
          <div className="text-lg leading-5  md:text-2xl text-center my-6">
            * Undernet Chat is still under development and chat history is still in the works, sorry
          </div>
          <div className="text-lg leading-5 md:text-2xl text-center my-6">
            * But we automatically open new tabs for you if you click a button in the chatroom so you won&apos;t accidentally close your ongoing chat
          </div>
          <div className="text-lg leading-5 md:text-2xl text-center my-6">
            * Have any feedbacks, suggestions, or bug report? Please <a href="https://www.reddit.com/user/fallen_up_" target="_blank">contact me on Reddit by <span className="underline">clicking here!</span></a>
          </div>
          <div className="text-lg leading-5 md:text-2xl text-center my-6">
            * Hope you enjoy chatting with your monster friends!
          </div>
          <Link href="/chat">
          <Button className="mt-1 bg-transparent hover:bg-transparent border-2 rounded-none text-lg md:text-2xl">
            Back to Contact
          </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
