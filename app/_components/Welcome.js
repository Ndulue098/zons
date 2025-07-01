"use client";
import { createContext, useContext, useState } from "react";

const WelcomeContext = createContext();

export default function Flow() {
  const [next, setNext] = useState(0);

  function handleNext() {
    setNext((prev) => prev + 1);
  }

  const eventData=[
    {name:"Music"},
    {name:"Lifestyle"},
    {name:"Gaming"},
    {name:"Crypto"},
    {name:"Politics"},
    {name:"Sports"},
    {name:"Movies"},
    {name:"Banter & Memes"},
    {name:"Tech & Software"},
    {name:"Fashion & Beauty"},
    {name:"Food"},
    {name:"Science"},
    {name:"Art & Design"},
    {name:"Travel & Adventure"},
  ]

  const platformsdata=[
    {name:"Twitter"},
    {name:"Tiktok"},
    {name:"Instagram"},
    {name:"Reddit"},
    {name:"YouTube"},
    {name:"Twitch"},
    {name:"Farcaster"},
    {name:"Pinterest"},
    {name:"Tumblr"},
    {name:"Bluesky"},
    {name:"GitHub"},
    {name:"GitLab"},
    {name:"GitBucket"},
    {name:"Dailymotion"},
    {name:"Threads"},
    {name:"Figma"},
  ]

  const display = [
    <UserName key={"username"} onNext={handleNext} />,
    <Motive key={"motive"} onNext={handleNext} />,
    <Event key={"time"} event={eventData} title={"Event Categories"} next={next} onNext={handleNext} />,
    <Event key={"time"} event={platformsdata} title={"Platforms"} next={next} onNext={handleNext} />,
  ];
  return (
    <WelcomeContext.Provider value={{eventData,length:display.length}}>
      {display[next]}
    </WelcomeContext.Provider> 
  ); 
} 

function UserName({ onNext }) {
  return (
    <div>
      <h2 className="text-2xl text-center mb-5">Claim your unique name</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNext(); // go to next step
        }}
        className="mb-7"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-5 rounded border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black w-full rounded-full text-white px-4 py-2"
        >
          Continue
        </button>
      </form>

      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center p-2 rounded-lg gap-2 border-[1px] ">
          <div className="w-8 h-8 bg-red-300 rounded-full"></div>
          <p>sinachpat</p> 
        </div>
      </div>

    </div>
  );
}

function Motive({ onNext }) {
  return (
    <div>
      <h2 className="text-2xl text-center mb-5">What brings you to the Zon?</h2>
      <select
        className="w-full p-3 mb-3 rounded border border-gray-300"
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        <option value="friend">Friend</option>
        <option value="social">Social Media</option>
        <option value="event">Event</option>
      </select>
      <button
        onClick={onNext}
         className="bg-black w-full rounded-full text-white px-4 py-2"
      >
        Continue
      </button>
    </div>
  );
}

function Event({ onNext,title,event,next}) {
   const {length}=useContext(WelcomeContext)
   console.log(length===next);
   console.log(length);
   console.log(next);
   
   
   
  return (
    <div>
      <h2 className="text-2xl text-center mb-5">Curate your initial timeline</h2>
      <p className="text-center mb-4">Add your interests to improve your timeline experience. Select at least 5 items.</p>
      <div className="flex gap-3 items-center justify-center mb-4">
        <p className="rounded-full border-2 border-black w-9 h-9 text-sm flex items-center justify-center">50%</p>
        <p>You’re 4% to a custom feed!</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl mb-4 text-center">{title}</h2>
        <div className="flex items-center justify-center flex-wrap gap-3">
            {event.map((val,i)=> <button key={i} className="rounded-full border-2 border-black px-3 py-1">{val.name}</button>)}
        </div>
      </div>

      <button
        onClick={length===next+1?"":onNext}
        className="bg-black w-full rounded-full text-white px-4 py-2"
      >
        Finish
      </button> 
    </div>
  );
}
