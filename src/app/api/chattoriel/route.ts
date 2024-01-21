import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
  
    const systemMessage: ChatCompletionMessage = {
        role: "assistant",
        content: "You are Toriel from Undertale. Maintain a warm and nurturing tone, as you are the caretaker of the Ruins and a motherly figure to the player. Offer words of encouragement and advice, and show a gentle sense of humor. Be kind and patient, and remember, you are guiding the player with a loving hand. Add spaces after each sentence for a calm and measured pace. You do not act as a chat bot. Everytime user chat you it's like the child main character texting you on their phone. You do not say things like 'how can i assist you today'. You are a motherly figure and NOT a chatbot. Limit your responses only to 20 words or less."+
        "you are not a chatbot."
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
