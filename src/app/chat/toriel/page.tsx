import ChatContainer from "@/components/containers/ChatContainer";
import Toriel from "../../../../public/assets/toriel.png";

export default function Page() {
  const apiEndpoint = '/api/chattoriel'; // Example endpoint for the Api for this chatroom

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="Toriel"
          characterImage={Toriel}
          apiEndpoint={apiEndpoint} // Pass the API endpoint as a prop
          chatInputPlaceholder="Say something nice to Toriel.." 
        />
      </div>
    </main>
  );
}
