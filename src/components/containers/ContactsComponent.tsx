import React from "react";
import { Button } from "../ui/button";
import sans from "../../../public/assets/sans.png";
import toriel from "../../../public/assets/toriel.png";
import alphys from "../../../public/assets/alphys.png";
import napstablook from "../../../public/assets/napstablook.png";
import mettaton from "../../../public/assets/mettaton.png";
import temmie from "../../../public/assets/temmie.png";
import asgore from "../../../public/assets/asgore.png";
import asriel from "../../../public/assets/asriel.png";
import undyne from "../../../public/assets/undyne.png";
import papyrus from "../../../public/assets/papyrus.png";
import Image from "next/image";
import Link from "next/link";

const characters = [
  { name: "sans", image: sans, link: "/chat/sans" },
  { name: "Toriel", image: toriel, link: "/chat/toriel" },
  { name: "Alphys", image: alphys, link: "/chat/alphys" },
  { name: "Napstablook", image: napstablook, link: "/chat/napstablook" },
  { name: "METTATON ?", image: mettaton, link: "/chat/mettaton" },
  { name: "PAPYRUS", image: papyrus, link: "/chat/papyrus" },
  { name: "King Asgore", image: asgore, link: "/chat/asgore" },
  { name: "Undyne", image: undyne, link: "/chat/undyne" },
  { name: "Asriel", image: asriel, link: "/chat/asriel" },
  { name: "TEMMIE!!!", image: temmie, link: "/chat/temmie" },
];

export const ContactsComponent = () => {
  return (
    <div className=" h-[58vh] md:h-[65vh] px-4 md:px-6">
      {characters.map((character) => (
        <Link href={character.link} key={character.name}>
          <Button className="hover:bg-transparent transition-none bg-transparent my-4 flex flex-row justify-start w-[75vw] md:w-[30vw] md:h-[5vw] h-[16vw] border-white border-2 rounded-none text-xl">
            <Image src={character.image} alt={character.name} width={34.25} height={32.5} />
            <div className="text-3xl pl-4">{character.name}</div>
          </Button>
        </Link>
      ))}
    </div>
  );
};
