"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroMain = () => {
  const heroSlides = [
    {
      image: "/assets/hero-slider.jpg",
      title: "Aviation Meteorology 360°",
      subtitle:
        "We invite you to join the 1st Aviation Meteorology 360° Workshop, which will be held concurrently with the 1st Aviation Meteorology 360° Symposium! From flight safety to advanced forecasting technologies, let us explore the mysteries of the atmosphere together.",
      link: "/listeler/kolay-tarifler",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative h-dvh overflow-hidden">
      {/* Slider görselleri */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      ))}

      {/* Slider içeriği */}
      <div className="relative max-w-5xl pl-16 mx-auto px-4 h-full flex  items-center">
        <div className="text-white bg-black/50 p-8">
          <h1 className="text-5xl font-bold mb-4 transition-transform duration-500 transform">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8 transition-transform duration-500 transform">
            {heroSlides[currentSlide].subtitle}
          </p>
          <Link
            href={heroSlides[currentSlide].link}
            className="bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold 
                hover:bg-orange-800 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Slider noktaları */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
                ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Önceki/Sonraki butonları */}
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? heroSlides.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 
            bg-black/30 hover:bg-black/50 text-white p-2 rounded-full 
            transition duration-300"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 
            bg-black/30 hover:bg-black/50 text-white p-2 rounded-full 
            transition duration-300"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
};
