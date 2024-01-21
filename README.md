![LUVA1 (1)](https://github.com/audiprevio/underchat-public-v02/assets/126348614/5a502d54-a15b-427e-bcc9-7b0439db84df)

# Undernet Chat (UnderChat) - Version 0.2. "Nice Cream"

Welcome friends to Undernet Chat's repository!

Undernet Chat is GPT-powered a web application that enables you to talk with your Underground monster friends from Undertale. This repository encompasses both the front and back-end of the app. In less than 24 hours, this AI chatbot received >1,200 API Hits! And a couple of days ago it reached >1,000,000 token processed!

So I decided to make this app public and hope the awesum Undertale community can expand upon this love letter of mine to Undertale

Try it yourself here: [https://underchat.vercel.app/](https://underchat.vercel.app/)


# Table of Contents
1. [Tech Stack](#tech-stack)
2. [Getting Started](#getting-started)
3. [Project Structure Breakdown](#project-structure-breakdown)
   - [The (NextJS) API Routes](#the-nextjs-api-routes)
   - [The Pages](#the-pages)
   - [Chatroom Component](#chatroom-component)
   - [Other Components](#other-components)
   - [Utils Variables](#utils-variables)
5. [Help the Undernet Chat Grow!!](#help-the-undernet-chat-grow)
6. [Credits](#credits)
7. [About Me & My Contact](#about-me--my-contact)


# Tech Stack

- NextJS 14.0.4 (App Router)
- NodeJS v20.10.0
- OpenAI API v4.24.2
- Vercel AI SDK v2.2.31
- Vercel Analytics v1.1.1
- Vercel Speed Insights v1.0.3
- Tailwind CSS v3.3.0
- TypeScript
- ShadCN/UI

# Getting Started

To launch this project all you need to do is just
1. Clone this repository
```
https://github.com/audiprevio/underchat-public-v02.git
```
<br/>
2. Install all the dependencies

```
npm install
```

or 

```
yarn install
```

<br/>

3. Create a .env file and Add your own ChatGPT API key in the following format
```
OPENAI_API_KEY=your api key 
```
3. Launch it on your local (it will run on :3000 by default)
```
npm run dev
```
4. Chat with your monster frens!


# Project Structure Breakdown
This project relies a lot on NextJS (13 and up), Open AI API, as well as the truly life saver Vercel AI SDK

If you want to know more about all those techs I suggest you watch this really helpful tutorial below, which I use to make Undernet Chat


[Next.js 14 Custom Chatbot (OpenAI ChatGPT, Vercel AI SDK, Pinecone, Shadcn UI, TypeScript, Tailwind) by Coding in Flow](https://www.youtube.com/watch?v=mkJbEP5GeRA&t=639s)


Anyway on to the project structure:

## The (NextJS) API Routes
```
src/app/api/
```
Hosts the APIs that powers all each of the characters' AI chat bot, part of the NextJS.
<br/>
For instance in
```tsx
/api/chatsans
```
you can find:

```tsx
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
```

The `systemMessage` essentially serves as the personality prompt for the character and the `response` is basically the way to call the GPT model we want to use in processing the messages from user. You can change it to GPT-4 if you like to, but since I haven't got the access yet (despite already passing the $1 API limit), I still uses GPT 3.5. Also `stream: true` enables the text streaming effect.


### So there's 10 APIs for 10 Characters?

Yes, well, this is a `problem` that I haven't been able to solve, yet. Since we're using a mixture of OpenAI API & Vercel AI SDK, I haven't been able to make a `systemMessage` that's powered by a dynamic array of prompts that corresponds to each characters' personality. 

Ideally there should be 1 single API with different prompts that can be switched on and off depending on the page you are in, but that would mean we need to modify the systemMessage using POST right? That's kinda tricky when I tried it, because the POST request is done in <ChatContainer /> (read the section below), and it is handled by the `useChat` hook created by Vercel in a manner that I haven't been able to figure out how to customize


## The Pages

### The Entry/Onboarding (src/app/)
```
src/app/
```

The `page.tsx` in `/` serves as the primary entry page for the app. In this page, basic information about the app and some disclaimers are given before the users enter

### The Contact List Page (src/app/chat/)
```
src/app/chat
```
Since UnderChat's UX needs to feel like you are using a CELLphone, I made this main contact list so users can browse the monster they want to talk to. The component that manages contact `<ContactsComponent />` is also rendered here 

```tsx
const characters = [
  { name: "sans", image: sans, link: "/chat/sans" },
  { name: "Toriel", image: toriel, link: "/chat/toriel" },
  { name: "Alphys", image: alphys, link: "/chat/alphys" },
  { name: "Napstablook", image: napstablook, link: "/chat/napstablook" },
  { name: "METTATON ?", image: mettaton, link: "/chat/mettaton" },
  { name: "PAPYRUS", image: papyrus, link: "/chat/papyrus" },
  { name: "King Asgore", image: asgore, link: "/chat/asgore" },
  { name: "Undyne", image: undyne, link: "/chat/undyne" },
  { name: "Asriel", image: asriel, link: "/chat/asriel" },
  { name: "TEMMIE!!!", image: temmie, link: "/chat/temmie" },
];

export const ContactsComponent = () => {
  return (
    <div className=" h-[58vh] md:h-[65vh] px-4 md:px-6">
      {characters.map((character) => (
        <Link href={character.link} key={character.name}>
          <Button className="hover:bg-transparent transition-none bg-transparent my-4 flex flex-row justify-start w-[75vw] md:w-[30vw] md:h-[5vw] h-[16vw] border-white border-2 rounded-none text-xl">
            <Image src={character.image} alt={character.name} width={34.25} height={32.5} />
            <div className="text-3xl pl-4">{character.name}</div>
          </Button>
        </Link>
      ))}
    </div>
  );
};
```
I've made the ContactsComponent easily expandable, to add more characters into the contact list you can just add the characters array.

### Chatroom Pages (src/app/chat/)
```
src/app/chat/
```
The chatroom pages lies under that folder, each of the pages are named after the corresponding character `/toriel`, `/sans`

The Chatroom page serves as the place that we use to inject the `<ChatContainer />` with the following props:

```tsx
characterName
characterImage
apiEndpoint
chatInputPlaceholder
```

so in `/chat/undyne`
the `page.tsx` will pass

```tsx
characterName="Undyne"
characterImage={Undyne}
apiEndpoint={apiEndpoint}
chatInputPlaceholder="Say something nice to Undyne?"
```

This is related to the structure of the Chat Room, read it below

### Chatroom Pages (src/app/help/)

This is basically just a short help and credits page

## Chatroom Component

As you might read above each of the chatroom is filled with props from the page level. The main purpose of this is to create a dynamic chat room with different characters without having to create different `<ChatContainer />` for each characters.

```
page.tsx
   |
passes props to
   |
<ChatContainer />
```

The `ChatContainer` then generates the chatroom based on the corresponding character.

The component uses `UseChat` hook by Vercel to POST user message and generate the AI message

```
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat({
    api: apiEndpoint,
  });
```

This is FAR easier when it comes to Front-end UI development. You can easily map out messages that's from the user and from the AI characters. 

I follow Coding in Flow's UI styling, I highly recommend you watch the YouTube video to find out more:

[Next.js 14 Custom Chatbot (OpenAI ChatGPT, Vercel AI SDK, Pinecone, Shadcn UI, TypeScript, Tailwind) by Coding in Flow](https://www.youtube.com/watch?v=mkJbEP5GeRA&t=639s)


## Other components

Other components are stored in the 
`src/app/components/`

since this project is using ShadCN the folder `/components/ui` is generated by shadcn

## Utils variables
in `src/app/utils` I created some variables that can be reused throughout the project, namely the openai API key & tailwind class tweaking merge

## Help the Undernet Chat grow!!
Help more humans enjoy the awesome experience that is talking with monsters from the underground by expanding this project!

Create forks and features and everything you can to build on top of this app!

## Credits
- BIG THANKS to Toby Fox for, well, creating Undertale
- Coding in Flow a.k.a Florian Walther for the awesome NextJS 14, Vercel AI SDK, and ChatGPT tutorial

## About Me & My Contact
I love undertale, I worked in the field of UX Research & Design for >2 years and now currently diving deeper into tech by exploring Front-end 

Get to know more about me and my works here:
(audiprevio.dev)[https://audiprevio.dev]


Thanks for reading and happy hacking! Nyeh heh heh heh!

