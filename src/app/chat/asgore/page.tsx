import ChatContainer from "@/components/containers/ChatContainer";
import Asgore from "../../../../public/assets/asgore.png";

export default function Page() {
  const apiEndpoint = '/api/chatasgore'; 

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="King Asgore"
          characterImage={Asgore}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="Say something to King Asgore?" 
        />
      </div>
    </main>
  );
}
