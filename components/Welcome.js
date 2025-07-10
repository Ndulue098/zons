"use client";
import { createContext, useContext, useState } from "react";

const WelcomeContext = createContext();

export default function Flow({ onOpen }) {
  const [next, setNext] = useState(0);
  const [prog, setProg] = useState(null);

  function handleNext() {
    setNext((prev) => prev + 1);
  }

  const eventData = [
    { name: "Music" },
    { name: "Lifestyle" },
    { name: "Gaming" },
    { name: "Crypto" },
    { name: "Politics" },
    { name: "Sports" },
    { name: "Movies" },
    { name: "Banter & Memes" },
    { name: "Tech & Software" },
    { name: "Fashion & Beauty" },
    { name: "Food" },
    { name: "Science" },
    { name: "Art & Design" },
    { name: "Travel & Adventure" },
  ];

  const platformsdata = [
    { name: "Twitter" },
    { name: "Tiktok" },
    { name: "Instagram" },
    { name: "Reddit" },
    { name: "YouTube" },
    { name: "Twitch" },
    { name: "Farcaster" },
    { name: "Pinterest" },
    { name: "Tumblr" },
    { name: "Bluesky" },
    { name: "GitHub" },
    { name: "GitLab" },
    { name: "GitBucket" },
    { name: "Dailymotion" },
    { name: "Threads" },
    { name: "Figma" },
  ];

  const display = [
    <UserName key={"username"} onNext={handleNext} />,
    <Motive key={"motive"} onNext={handleNext} />,
    <Event
      key={"time"}
      event={eventData}
      title={"Event Categories"}
      next={next}
      onNext={handleNext}
    />,
    <Event
      key={"time"}
      event={platformsdata}
      title={"Platforms"}
      next={next}
      onNext={handleNext}
    />,
  ];

  return (
    <WelcomeContext.Provider
      value={{ eventData, length: display.length, onOpen }}
    >
      <div className="absolute inset-0 z-30 overflow-auto bg-[#8D8D8D1A]/30 backdrop-blur-2xl rounded-xl  p-5 ">
        <div className="min-h-full flex items-center justify-center">
          <div className="bg-white relative rounded-xl p-8 px-10 w-full min-h-[22rem] max-w-xl mx-auto shadow-lg">
            <ul className="absolute right-5 top-4 flex items-center justify-center gap-1">
              {display.map((_, i) => (
                <Progress
                  compLength={display.length}
                  id={i}
                  next={next}
                  setProg={setProg}
                  prog={setProg}
                  key={i}
                />
              ))}
            </ul>
            {display[next]}
          </div>
        </div>
      </div>
    </WelcomeContext.Provider>
  );
}

function Progress({ next, id, compLength }) {
  let colortag;
  if (next === id) {
    colortag = "w-4.5 h-2.5  border-[1px] border-[#FF1A6C]";
  } else if (id < next) {
    colortag = "w-3.5 h-2.5  bg-[#FF1A6C]";
  } else {
    colortag = "w-3.5 h-2.5 bg-[#D9D9D9]";
  }

  // return <li className={`${next===id?"w-4.5 h-2.5  bg-[#FF1A6C]":"w-3.5 h-2.5 border-[1px] border-[#FF1A6C]"} rounded-full`}>
  return <li className={`${colortag} rounded-full`}></li>;
}

function UserName({ onNext }) {
  return (
    <div className="w-full max-w-md mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Claim Your Unique Name
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNext(); // go to next step
        }}
        className="space-y-5 mb-8"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="w-full bg-[#FF1A6C] text-white py-3 rounded-full font-medium  transition"
        >
          Continue
        </button>
      </form>

      {/* Example chosen username display */}
      <div className="flex justify-center">
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
          <div className="w-8 h-8 bg-red-300 rounded-full" />
          <p className="text-sm font-medium">sinachpat</p>
        </div>
      </div>
    </div>
  );
}

function Motive({ onNext }) {
  return (
    <div className="w-full max-w-md mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        What brings you to the Zon?
      </h2>

      <select
        className="w-full p-3 text-base rounded-md border border-gray-300 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-400"
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        <option value="friend">A Friend</option>
        <option value="social">Social Media</option>
        <option value="event">An Event</option>
      </select>

      <button
        onClick={onNext}
        className="w-full bg-[#FF1A6C] text-white py-3 rounded-full text-base font-medium  transition"
      >
        Continue
      </button>
    </div>
  );
}

function Event({ onNext, title, event, next }) {
  const { length, onOpen } = useContext(WelcomeContext);

  return (
    <div className="w-full max-w-xl mx-auto px-2 flex flex-col">
      <h2 className="text-2xl font-semibold text-center mb-3">
        Curate Your Initial Timeline
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Add your interests to improve your timeline experience. Select at least
        5 items.
      </p>

      {/* Progress */}
      <div className="flex gap-3 items-center justify-center mb-6">
        <span className="rounded-full border-2 border-black w-9 h-9 text-sm flex items-center justify-center font-medium">
          50%
        </span>
        <p className="text-sm text-gray-700">You’re 4% to a custom feed!</p>
      </div>

      {/* Event categories */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-center mb-4">{title}</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {event.map((val, i) => (
            <button
              key={i}
              className="px-4 py-2 text-sm rounded-full border border-black hover:bg-[#FF1A6C] hover:text-white transition"
            >
              {val.name}
            </button>
          ))}
        </div>
      </div>

      {/* Finish button */}
      <button
        onClick={length === next + 1 ? () => onOpen(false) : onNext}
        className="w-full bg-[#FF1A6C] text-white py-3 rounded-full text-base font-medium  transition"
      >
        Finish
      </button>
    </div>
  );
}
