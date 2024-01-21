// Page component
"use client";
import ChatContainer from "@/components/containers/ChatContainer";
import Asriel from "../../../../public/assets/asriel.png";

export default function Page() {
  // Determine the API endpoint based on the current page or some other logic
  const apiEndpoint = '/api/chatasriel'; // Example endpoint for Toriel's chat

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="Asriel"
          characterImage={Asriel}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="It's Asriel Dreemurr!" // Pass the API endpoint as a prop
          // Pass the API endpoint as a prop
        />
      </div>
    </main>
  );
}
