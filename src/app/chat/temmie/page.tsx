// Page component
"use client";
import ChatContainer from "@/components/containers/ChatContainer";
import Temmie from "../../../../public/assets/temmie.png";

export default function Page() {
  // Determine the API endpoint based on the current page or some other logic
  const apiEndpoint = '/api/chattemmie'; // Example endpoint for Toriel's chat

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="TEMMIE"
          characterImage={Temmie}
          apiEndpoint={apiEndpoint} // Pass the API endpoint as a prop
          chatInputPlaceholder="hOI iT'S TeMMIE?" // Pass the API endpoint as a prop
        />
      </div>
    </main>
  );
}
