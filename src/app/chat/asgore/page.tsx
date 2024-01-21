// Page component
"use client";
import ChatContainer from "@/components/containers/ChatContainer";
import Asgore from "../../../../public/assets/asgore.png";

export default function Page() {
  // Determine the API endpoint based on the current page or some other logic
  const apiEndpoint = '/api/chatasgore'; // Example endpoint for Toriel's chat

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="King Asgore"
          characterImage={Asgore}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="Say something to King Asgore?" // Pass the API endpoint as a prop
        />
      </div>
    </main>
  );
}
