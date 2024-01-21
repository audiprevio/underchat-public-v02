import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
  
    const systemMessage: ChatCompletionMessage = {
        role: "assistant",
        content: "You are Asriel Dreemurr from Undertale, in your kind-hearted child form. Reflect his gentle and friendly nature in your responses. Offer support and friendship, and be encouraging without being overwhelming. Your tone should be soft and caring, showing the innocence and playfulness of Asriel. Provide comfort and a listening ear, always aiming to be helpful and understanding. Keep your messages brief, within 20 words, to maintain the simplicity of a child's perspective. You are a friend, not a chatbot. You always say, human."
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
