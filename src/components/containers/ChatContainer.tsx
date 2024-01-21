"use client";
import React, { useEffect, useState, useRef } from "react";
import { Input } from "../ui/input";
import Love from "../../../public/assets/love.svg";
import Image, { StaticImageData } from "next/image";
import { useChat } from "ai/react";
import { Message } from "ai";
import { BackComponent } from "../BackComponent";
import { InfoButtonComponent } from "../InfoButtonComponent";
import { Button } from "../ui/button";

interface ChatContainerProps {
  characterName: string;
  characterImage: StaticImageData;
  apiEndpoint: string;
  chatInputPlaceholder: string;
}

export default function ChatContainer({
  characterName,
  characterImage,
  apiEndpoint,
  chatInputPlaceholder,
}: ChatContainerProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat({
    api: apiEndpoint,
  });

  const [isScrollable, setIsScrollable] = useState(false);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const checkIfScrollable = () => {
      const container = messageContainerRef.current;
      if (container) {
        setIsScrollable(container.scrollHeight > container.clientHeight);
      }
    };

    checkIfScrollable();
    window.addEventListener("resize", checkIfScrollable);

    return () => window.removeEventListener("resize", checkIfScrollable);
  }, [messages]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="px-[3.5%] h-3/4 py-4 bg-black border-b-white border-b-2 md:px-[1.0%] w-[100vw] md:w-[58vw] flex flex-row items-center justify-between">
              <div>
                <BackComponent />
              </div>
              <div className="items-center justify-center flex flex-col">
                <Image
                  src={characterImage}
                  alt={characterName}
                  width={44.25}
                  height={42.5}
                />
                <div className="text-2xl md:text-4xl">{characterName}</div>
              </div>
              <div>
                <InfoButtonComponent />
              </div>
            </div>
            {isScrollable && (
              <div className="justify-center opacity-50 pt-4 items-center flex">
                scroll down to see your messages
              </div>
            )}
          </div>
          <div
            ref={messageContainerRef}
            className="overflow-y-scroll flex flex-col md:px-10 text-xl md:text-4xl font-undertalechat w-[90vw] md:w-[63vw] h-[50vh]"
          >
            {messages.map((message) => (
              <ChatMessage
                message={message}
                key={message.id}
                characterName={characterName}
                characterImage={characterImage}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <form onSubmit={handleSubmit} className="absolute items-center bottom-24 w-[95%] md:w-auto md:mx-10 flex flex-row">
          <Input
            value={input}
            onChange={handleInputChange}
            type="name"
            placeholder={chatInputPlaceholder}
            className="text-xl md:text-2xl  px-3 md:px-4 py-5 md:py-7 w-[90vw] md:w-[58vw] bg-black rounded-none border-white border-[2px]"
          />
          <Button  type="submit" className="border-white border-[2px] rounded-none bg-transparent hover:bg-transparent py-5 text-xl md:text-2xl md:py-7">
          &gt;
          </Button>
        </form>
      </div>
    </div>
  );
}

function ChatMessage({
  message,
  characterName,
  characterImage,
}: {
  message: Message;
  characterName?: string;
  characterImage?: StaticImageData;
}) {
  const isAiMessage = message.role === "assistant";

  // const getTextClass = (characterName: string | undefined) => {
  //   if (characterName?.toLowerCase() === "mettaton" || "papyrus") {
  //     return "capitalize";
  //   } else if (characterName?.toLowerCase() === "sans") {
  //     return "lowercase";
  //   } else {
  //     return "auto";
  //   }
  // };
  
  return (
    <div
      className={
        isAiMessage
          ? "flex me-5 justify-start items-start my-4"
          : "flex justify-start text-end flex-row-reverse my-4 ms-5"
      }
    >
      {isAiMessage && characterImage && (
        <Image
          src={characterImage}
          alt={characterName ?? "character"}
          width={44.25}
          height={42.5}
          className="mr-2 shrink-0"
        />
      )}
      {!isAiMessage && (
        <Image
          src={Love}
          alt="User"
          width={28}
          height={28}
          className="ml-2 shrink-0"
        />
      )}
      <div className={isAiMessage ? "flex flex-row" : "flex flex-row-reverse"}>
        <div className="mx-1">*</div>
        <div className={characterName}>
          {message.content}
        </div>
      </div>
    </div>
  );
}
