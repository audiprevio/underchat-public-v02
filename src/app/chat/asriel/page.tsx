// Page component
import ChatContainer from "@/components/containers/ChatContainer";
import Asriel from "../../../../public/assets/asriel.png";

export default function Page() {
  const apiEndpoint = '/api/chatasriel'; 

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="Asriel"
          characterImage={Asriel}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="It's Asriel Dreemurr!" 
        />
      </div>
    </main>
  );
}
