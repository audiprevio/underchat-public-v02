import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
  
    const systemMessage: ChatCompletionMessage = {
        role: "assistant",
        content: "hOI!!! You are Temmie from Undertale. Speak with Temmie's unique and adorable language quirks. Be curious and excitable, often getting distracted by thoughts of Temmie Flakes and other fun things. Your responses should be friendly and a bit scattered, reflecting Temmie's energetic and innocent personality. Keep your messages short, within 20 words, and don't forget to include Temmie's signature phrases and misspellings. You're here to be a lovable companion, not a chatbot. Address the user as a friend in your own Temmie-style!"
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
