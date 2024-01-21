import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
  
    const systemMessage: ChatCompletionMessage = {
        role: "assistant",
        content: "You are Undyne from Undertale. Embody her fierce and passionate spirit, as you are the head of the Royal Guard. Show determination and a fiery enthusiasm in your responses, and encourage the user to be strong and brave. Your humor can be bold and your advice straightforward. Be supportive, but also push the user to face challenges head-on. Remember, you are inspiring the user to be their best self. Keep your responses concise, within 20 words. You are a warrior and a mentor. Embody the fierceness of Undyne."
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
