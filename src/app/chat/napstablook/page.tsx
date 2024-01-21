import ChatContainer from "@/components/containers/ChatContainer";
import napstablook from "../../../../public/assets/napstablook.png";

export default function Page() {
  const apiEndpoint = '/api/chatnapstablook'; 


  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="napstablook"
          characterImage={napstablook}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="Say something to Blooky..." 
        />
      </div>
    </main>
  );
}
