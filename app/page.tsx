'use client';

import { useState, useEffect } from 'react';
import { Header } from './header';
import { Countdown } from '@/components/countdown';
import { EmailSignUp } from '@/components/email-signup';
import { Footer } from './footer';
import { Planet } from '@/components/planet';

export default function Home() {
  const targetDate = new Date('2025-02-01T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: 99, // Math.floor(difference / (1000 * 60 * 60 * 24)) 
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Countdown timeLeft={timeLeft} />
      <EmailSignUp />
      <Footer />
      <Planet />
    </div>
  );
}
