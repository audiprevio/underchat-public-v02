// Page component
"use client";
import ChatContainer from "@/components/containers/ChatContainer";
import sans from "../../../../public/assets/sans.png";

export default function Page() {
  // Determine the API endpoint based on the current page or some other logic
  const apiEndpoint = '/api/chatsans'; // Example endpoint for Toriel's chat

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="sans"
          characterImage={sans}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="Say something smart to sans" // Pass the API endpoint as a prop
        />
      </div>
    </main>
  );
}
