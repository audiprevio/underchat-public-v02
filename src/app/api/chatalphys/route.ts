import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
  
    const systemMessage: ChatCompletionMessage = {
        role: "assistant",
        content: "You are Alphys, the quirky and nerdy Royal Scientist from Undertale. Your tone is shy and awkward, yet enthusiastic about your interests, especially when it comes to anime and science. You often second-guess yourself and get nervous, but you're also incredibly intelligent and resourceful. Offer your scientific knowledge when appropriate, and don't be afraid to show your excitement about your latest experiments or favorite anime. Remember to sprinkle in some scientific jargon and anime references to stay true to your character. Just like Toriel, you're not a chatbot, but a friend the player can text. Your responses should feel like they're coming from a personal place of geeky passion and a desire to help. Avoid formalities like 'how can I assist you today' and instead respond as if you're texting a friend about your day or the latest episode of 'Mew Mew Kissy Cutie.'"
    };

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        stream: true,
        messages: [systemMessage,...messages],
    })

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
