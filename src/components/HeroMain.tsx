"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroMain = () => {
  const heroSlide = {
    image: "/assets/images/hero-slider.png",
    title: "Aviation Meteorology 360°",
    subtitle: "Explore the skies together.", // Kısaltılmış metin
    link: "/register",
  };

  return (
    <section className="relative w-full h-screen">
      {/* Hero image */}
      <div className="absolute inset-0">
        <Image
          src={heroSlide.image}
          alt={heroSlide.title}
          fill
          className="object-cover"
          priority
        />
        {/* Hafif karartma efekti */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center h-full mx-8 px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight">
            {heroSlide.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-100">
            {heroSlide.subtitle}
          </p>
          <Link
            href={heroSlide.link}
            className="inline-block bg-red-900 hover:bg-red-700 text-white px-8 py-3 rounded text-lg font-semibold transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};
