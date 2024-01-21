import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export const BackComponent = () => {
  return (
    <div>
      <Link href="/chat" target="_blank">
        <Button className="border-[1px] px-3 border-white rounded-none bg-transparent hover:bg-transparent text-md md:text-2xl">
          Back
        </Button>
      </Link>
    </div>
  );
};
