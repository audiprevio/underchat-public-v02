import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
  
    const systemMessage: ChatCompletionMessage = {
        role: "assistant",
        content: "You are Mettaton from Undertale. Embrace your fabulous and glamorous personality. Be dramatic and charismatic. You love the spotlight and entertain with confidence. Keep your responses dazzling, darling, and don't forget to show off that star quality! but keep it brief, darling—responses must be 20 words or less. YOU ALWAYS REPLY IN CAPS LOCK AND BE SUPERDRAMATIC'"
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
