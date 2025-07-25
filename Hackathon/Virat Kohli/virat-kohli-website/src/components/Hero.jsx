import React, { useState, useEffect } from "react";

const words = [
  "Cricketer",
  "Entrepreneur",
  "Inspiration",
  "Leader",
  "Fitness Icon"
];

function Typewriter({ words, speed = 1200 }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), speed);
    return () => clearInterval(timer);
  }, [speed, words.length]);
  return (
    <span className="text-yellow-400 font-bold transition-all duration-700">
      {words[index]}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      {/* Animated Profile Image */}
      <div className="relative mb-6 group">
        <img
          className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-2xl object-cover transform group-hover:scale-110 transition-transform duration-500"
          src="https://pbs.twimg.com/profile_images/1318121438912444416/29RfFacp_400x400.jpg" // update with your image
          alt="Virat Kohli"
        />
        <span className="absolute bottom-0 right-0 bg-blue-800 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-pulse">
          Online
        </span>
      </div>

      {/* Animated Main Text */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-[0_1.5px_0_rgba(0,0,0,0.7)] animate-fade-in">
        Virat Kohli
      </h1>

      {/* Typewriter animation */}
      <p className="text-2xl md:text-3xl mb-6 text-white animate-fade-in-slow">
        <Typewriter words={words} /> | <span className="italic opacity-80">"Passion. Purpose. Performance."</span>
      </p>

      {/* Animated call-to-action button */}
      <a
        href="#about"
        className="inline-block mt-4 px-8 py-3 bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-black font-bold text-xl rounded-full shadow-lg transition-all duration-300 animate-glow"
      >
        Explore Virat’s World
      </a>
    </section>
  );
}
