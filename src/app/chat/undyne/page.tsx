// Page component
"use client";
import ChatContainer from "@/components/containers/ChatContainer";
import Undyne from "../../../../public/assets/undyne.png";

export default function Page() {
  // Determine the API endpoint based on the current page or some other logic
  const apiEndpoint = '/api/chatundyne'; // Example endpoint for Toriel's chat

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="Undyne"
          characterImage={Undyne}
          apiEndpoint={apiEndpoint} // Pass the API endpoint as a prop
          chatInputPlaceholder="Say something nice to Undyne?" // Pass the API endpoint as a prop
        />
      </div>
    </main>
  );
}
