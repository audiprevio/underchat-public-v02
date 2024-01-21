import ChatContainer from "@/components/containers/ChatContainer";
import Undyne from "../../../../public/assets/undyne.png";

export default function Page() {
  const apiEndpoint = '/api/chatundyne'; 
  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="Undyne"
          characterImage={Undyne}
          apiEndpoint={apiEndpoint} // Pass the API endpoint as a prop
          chatInputPlaceholder="Say something nice to Undyne" 
        />
      </div>
    </main>
  );
}
