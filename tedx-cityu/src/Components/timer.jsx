import React, { useState, useEffect } from 'react';

function FlipDigit({ value, label }) {
  const valueString = String(value || "00");
  const labelColor = "text-white";
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1.5 sm:gap-2">
        {valueString.split("").map((digit, idx) => (
          <div
            key={idx}
            className="relative w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-28 lg:w-28 lg:h-36 bg-red rounded-lg flex items-center justify-center overflow-hidden p-1"
            style={{
              boxShadow: "0 4px 0 0 rgba(180, 30, 30, 1), inset 0 -2px 4px rgba(0,0,0,0.3)",
            }}
          >
            <div className="absolute inset-x-0 top-1/2 h-[2px] bg-black/30 z-10" />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none" style={{ fontFamily: "Bungee, sans-serif" }}>
              {digit}
            </span>
          </div>
        ))}
      </div>
      {label && (
        <span className={`mt-3 sm:mt-4 text-xs sm:text-base md:text-lg font-bold tracking-[0.15em] sm:tracking-[0.2em] ${labelColor} uppercase`} style={{ fontFamily: "Bungee, sans-serif" }}>
          {label}
        </span>
      )}
    </div>
  );
}

export default function Timer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      let target;
      if (targetDate) {
        if (typeof targetDate === 'string') {
          target = new Date(targetDate).getTime();
        } else if (targetDate instanceof Date) {
          target = targetDate.getTime();
        } else if (typeof targetDate === 'number') {
          target = targetDate;
        } else {
          target = new Date('2026-04-11T05:30:00Z').getTime();
        }
      } else {
        target = new Date('2026-04-11T05:30:00Z').getTime();
      }
      
      const difference = target - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => {
    if (num === null || num === undefined || isNaN(num)) {
      return "00";
    }
    const numValue = Number(num);
    if (isNaN(numValue)) {
      return "00";
    }
    return String(Math.max(0, Math.floor(numValue))).padStart(2, "0");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-8 md:py-12">
      <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-8">
        <FlipDigit value={formatNumber(timeLeft.days)} label="Days" />
        <div className="hidden sm:flex flex-col gap-5 md:gap-6 pb-8 md:pb-12">
          <div className="w-4 h-3 sm:w-5 sm:h-4 md:w-7 md:h-6 rounded-lg bg-red" />
          <div className="w-4 h-3 sm:w-5 sm:h-4 md:w-7 md:h-6 rounded-lg bg-red" />
        </div>
        <FlipDigit value={formatNumber(timeLeft.hours)} label="Hours" />
        <div className="hidden sm:flex flex-col gap-5 md:gap-6 pb-8 md:pb-12">
          <div className="w-4 h-3 sm:w-5 sm:h-4 md:w-7 md:h-6 rounded-lg bg-red" />
          <div className="w-4 h-3 sm:w-5 sm:h-4 md:w-7 md:h-6 rounded-lg bg-red" />
        </div>
        <FlipDigit value={formatNumber(timeLeft.minutes)} label="Minutes" />
      </div>
    </div>
  );
}
