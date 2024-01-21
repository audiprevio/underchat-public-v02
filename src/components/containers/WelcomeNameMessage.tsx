import React from "react";
import { Input } from "../ui/input";
import Love from "../../../public/assets/love.svg";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeNameMessage() {
  return (
    <div className="text-center mx-4 flex flex-col items-center">
      <Link href="/chat">
        <Image src={Love} alt="Love" width={32} height={32} className="pt-8" />
      </Link>    
      <div className="text-4xl my-2">Undernet Chat (UnderChat)</div>
      <div className="text-lg  md:text-2xl font-undertale">
      You have 10 contacts. Scroll down to see all contacts. Who do you wanna talk to today?
      </div>
    </div>
  );
}
