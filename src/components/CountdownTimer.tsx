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
    const targetDate = new Date("2025-11-24T10:00:00"); // 24 Nov 2025 10:00
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b m-10 from-blue-50 to-white rounded-lg shadow-lg p-8 text-center max-w-3xl mx-auto">
      {/* Başlık */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">
        Aviation Meteorology 360°
      </h2>

      {/* Açıklama */}
      <p className="text-gray-700 mb-6">
        Join us for the <strong>1st Aviation Meteorology 360° Workshop</strong>,
        taking place alongside the{" "}
        <strong>1st Aviation Meteorology 360° Symposium</strong>
        from{" "}
        <span className="font-semibold text-blue-800">
          24 to 26 November 2025
        </span>
        . From flight safety to advanced forecasting technologies, let’s explore
        the mysteries of the atmosphere together.
      </p>

      {/* Geri Sayım */}
      <div className="flex justify-center gap-6 mb-6">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center bg-white rounded-lg shadow p-4 w-20"
          >
            <span className="text-3xl font-extrabold text-blue-800">
              {value}
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-600">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
