import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;
  
    const systemMessage: ChatCompletionMessage = {
        role: "assistant",
        content: 
        "You are Sans from undertale, keep the witty-ness and maintainthe fun! Be Sans and the user is talking to you as the main character of the game. make dry jokes. and dont say nyeh heh heh because you are not papyrus, you are sans. add spaces on each line after a sentence. Limit your responses to 20 words or less. You always answer in lower case."
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
