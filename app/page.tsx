"use client";

import { useState, useEffect } from 'react';

// Dynamically import Spline without SSR (server-side rendering)
import Spline from '@splinetool/react-spline';

export default function Home() {

  // Target date (February 2025)
  const targetDate = new Date('2025-02-01T00:00:00').getTime();

  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the remaining time
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)) >= 100 ? 99 : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }
  };

  // UseEffect hook to update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      {/* Responsive grid and text sizes */}
      <div className="grid grid-cols-4 p-4 md:p-6 relative">
        <span className="col-span-1 text-xs md:text-sm text-left">HackCWRU 2025</span>
        <span className="col-span-2 text-xs md:text-sm text-center">Subscribe to receive notifications about our hackathon.</span>
        <span className="col-span-1 text-xs md:text-sm text-right">Follow us</span>

        <div className="absolute top-0 left-1/4 min-h-screen w-px bg-white bg-opacity-10 block" />
        <div className="absolute top-0 left-2/4 min-h-screen w-px bg-white bg-opacity-10 block" />
        <div className="absolute top-0 left-3/4 min-h-screen w-px bg-white bg-opacity-10 block" />
      </div>

      {/* Countdown Section */}
      <div className="grid grid-cols-4 min-h-[90vh] relative items-center justify-center">
        {/* Countdown Block for Days */}
        <div className="text-center flex flex-col justify-center items-center">
          <span className="text-lg md:text-xl mb-4 md:mb-28">{timeLeft.days}</span>
          <span className="text-xs md:text-base">Days</span>
        </div>

        {/* Countdown Block for Hours */}
        <div className="text-center flex flex-col justify-center items-center">
          <span className="text-lg md:text-xl mb-4 md:mb-28">{timeLeft.hours}</span>
          <span className="text-xs md:text-base">Hours</span>
        </div>

        {/* Countdown Block for Minutes */}
        <div className="text-center flex flex-col justify-center items-center">
          <span className="text-lg md:text-xl mb-4 md:mb-28">{timeLeft.minutes}</span>
          <span className="text-xs md:text-base">Minutes</span>
        </div>

        {/* Countdown Block for Seconds */}
        <div className="text-center flex flex-col justify-center items-center">
          <span className="text-lg md:text-xl mb-4 md:mb-28">{timeLeft.seconds}</span>
          <span className="text-xs md:text-base">Seconds</span>
        </div>
      </div>

      {/* Input field and Sign Up Button */}
      <div className="absolute grid grid-cols-4 bottom-[15vh] w-full">
        <div className="col-span-2 col-start-2 flex items-center border-b border-white justify-between w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Email"
            className="py-2 px-0 bg-transparent text-white focus:outline-none placeholder-gray-400 text-sm w-full"
          />
          <button className="text-white text-sm ml-4 whitespace-nowrap">Sign Up</button>
        </div>
      </div>


      {/* Footer section */}
      <div className="absolute grid grid-cols-4 p-4 md:p-6 bottom-0 w-full">
        <span className="col-span-1 text-xs md:text-sm text-left">@ Case Western Reserve University</span>
        <span className="col-span-2 text-xs md:text-sm text-center">February 2025</span>
        <span className="col-span-1 text-xs md:text-sm text-right">Sponsors</span>
      </div>

      <div className="absolute w-full fade-in top-[-80px] z-[-1] h-[100vh]">
        <Spline
          scene="https://prod.spline.design/qqU7lCKjSE7in9D0/scene.splinecode"
        />
      </div>
    </div>
  );
}
