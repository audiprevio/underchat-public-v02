import ChatContainer from "@/components/containers/ChatContainer";
import Alphys from "../../../../public/assets/alphys.png";

export default function Page() {
  const apiEndpoint = '/api/chatalphys'; 
  
  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="Alphys"
          characterImage={Alphys}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="Say something nice to Alphys?" 
        />
      </div>
    </main>
  );
}
