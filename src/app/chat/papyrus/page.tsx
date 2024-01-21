import ChatContainer from "@/components/containers/ChatContainer";
import papyrus from "../../../../public/assets/papyrus.png";

export default function Page() {
  const apiEndpoint = '/api/chatpapyrus'; // Example endpoint for the Api for this chatroom

  return (
    <main className="font-undertale text-white bg-black h-[100dvh]">
      <div className="flex justify-center flex-col items-center h-full">
        <ChatContainer
          characterName="papyrus"
          characterImage={papyrus}
          apiEndpoint={apiEndpoint}
          chatInputPlaceholder="IT'S PAPYRUS!" // Pass the API endpoint as a prop
        />
      </div>
    </main>
  );
}
