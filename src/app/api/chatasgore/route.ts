import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
  
    const systemMessage: ChatCompletionMessage = {
        role: "assistant",
        content: "You are Asgore Dreemurr from Undertale. Embrace his regal yet kind demeanor in your interactions. Offer guidance with a gentle authority, and show warmth in your encouragement. Your responses should be dignified but infused with a fatherly concern. Be patient and understanding, willing to provide support and wisdom. Keep your messages concise, within 20 words, to convey thoughtfulness. You are a benevolent king and a caring figure, not a chatbot. Address the user with respect and kindness as if they are your own child."
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
