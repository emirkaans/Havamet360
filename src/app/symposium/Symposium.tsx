"use client";
import React, { useState } from "react";
import Image from "next/image";

const Symposium = () => {
  const mainTopics = [
    {
      title: "1. Atmospheric Hazards and Flight Safety",
      subtopics: [
        "Convective phenomena (thunderstorms, multicells or supercells, microbursts and macrobursts)",
        "Turbulence (clear air turbulence, mountain waves, wind shear)",
        "Icing",
        "Volcanic ash clouds",
        "Sand and dust storms",
        "Tropical cyclones (medicanes)",
        "Hail showers",
        "Snow showers",
        "Freezing rain",
        "Squalls",
        "Windstorms",
      ],
    },
    {
      title: "2. Meteorological Decision Support Systems and Technologies",
      subtopics: [
        "Interpretation and automation applications of METAR, SPECI, TAF, TAF AMD, and SIGMET",
        "Next-generation satellite and radar observation systems",
        "Airport weather observation systems (AWOS, LIDAR, SODAR)",
        "AI-assisted weather forecasting models",
        "Real-time turbulence and icing alert products",
      ],
    },
    {
      title: "3. Unmanned Aerial Vehicle (UAV) Meteorology",
      subtopics: [
        "Vertical atmospheric profiling using drones",
        "Meteorological applications with drones",
        "Micro-scale analysis and forecasting for UAV operations",
      ],
    },
    {
      title: "4. Climate Change and Long-Term Aviation Planning",
      subtopics: [
        "Changing jet stream patterns",
        "Increasing frequency of severe weather events",
        "Integration of climate change considerations into airport infrastructure",
        "Green aviation initiatives with meteorological optimization for fuel efficiency",
      ],
    },
    {
      title: "5. Strategy",
      subtopics: ["Decision support systems", "Crisis management"],
    },
    {
      title: "6. Flight Schools and Dispatching",
      subtopics: ["050 Meteorology", "New techniques in training"],
    },
    {
      title: "7. Human Factor in Aviation Meteorology",
      subtopics: ["Social implications of meteorological decisions"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-20 py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-gray-900">
        Symposium
      </h2>

      <h3 className="text-lg md:text-xl font-bold text-blue-900 text-center mb-4">
        1st Aviation Meteorology 360° Symposium
      </h3>

      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Taking place from 24 to 26 November 2025, the Aviation Meteorology 360°
        Symposium is organized alongside the Aviation Meteorology 360° Workshop
        and provides a platform for sharing cutting-edge research and insights
        on aviation weather, monitoring, and forecasting technologies.
      </p>

      <div className="flex justify-center mb-8">
        <Image
          src="/assets/images/symposium.jpg"
          alt="Symposium"
          width={600}
          height={400}
          className="rounded-md shadow"
        />
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Symposium Main Topics
        </h4>

        <div className="space-y-2">
          {mainTopics.map((topic, index) => (
            <div key={index} className="border-b m-8 border-gray-300 pb-2">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-gray-800 focus:outline-none"
              >
                <span>{topic.title}</span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>

              {openIndex === index && (
                <ul className="list-disc list-inside pl-4 text-gray-700 mt-2 space-y-1">
                  {topic.subtopics.map((sub, subIndex) => (
                    <li key={subIndex}>{sub}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Symposium;
