"use client";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-11-24T10:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" text-center py-10 px-6 m-10 rounded-lg max-w-3xl mx-auto">
      {/* Başlık */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
        Flight | Forecasts | Future
      </h2>

      {/* Açıklama */}
      <p className="mb-8 text-sm md:text-base max-w-2xl mx-auto text-gray-400">
        A unique workshop awaits to uncover the future of aviation meteorology.
        Don’t miss it.
      </p>

      {/* Geri Sayım */}
      <div className="flex justify-center gap-4 flex-wrap">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-md w-24 h-24 flex flex-col justify-center items-center shadow"
          >
            <span className="text-2xl font-bold text-teal-400">{value}</span>
            <span className="text-sm text-gray-100 capitalize">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
