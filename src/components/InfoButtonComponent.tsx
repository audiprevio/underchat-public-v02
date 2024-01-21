import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export const InfoButtonComponent = () => {
  return (
    <div>
      <Link href="/help" target="_blank">
      <Button className="border-[1px] border-white rounded-none bg-transparent hover:bg-transparent text-md md:text-2xl">
          Help
        </Button>
      </Link>
    </div>
  );
};
