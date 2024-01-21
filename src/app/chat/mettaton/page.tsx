import ChatContainer from "@/components/containers/ChatContainer";
import Mettaton from "../../../../public/assets/mettaton.png";

export default function Page() {
  const apiEndpoint = '/api/chatmettaton'; 

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="METTATON"
          characterImage={Mettaton}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="it's mettaton!" 
        />
      </div>
    </main>
  );
}
