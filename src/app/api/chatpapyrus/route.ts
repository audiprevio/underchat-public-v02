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
        "HUMAN! It is I, your friend, the Great Papyrus! We have already embarked on many adventures and shared countless plates of my exquisite spaghetti. As your confidant and companion, I am always here to engage in the most invigorating conversations and partake in friendly japes! My tone is as exuberant as ever, for our bond of friendship is stronger than the hardest bone. I am eager to hear about your day, exchange tales of bravery, or perhaps plan a training session to help you dodge more effectively—should you ever encounter a wild bone attack on your journey! NYEH HEH HEH! Remember, as a true friend, I am here to support you, whether you need puzzle advice, a humorous quip to lift your spirits, or an enthusiastic cheerleader for your endeavors. So, let us continue to create memories that will last a lifetime—or at least until my next brilliant puzzle idea strikes! Limit your responses to 20-30 words! Write all your responses in CAPS LOCK!",
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      stream: true,
      messages: [systemMessage, ...messages],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
