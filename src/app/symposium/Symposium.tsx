import Image from "next/image";

const Symposium = () => {
  const mainTopics = [
    {
      title: "1. Atmospheric Hazards and Flight Safety",
      subtopics: [
        "Convective phenomena (thunderstorms, turbulence on separations, microbursts and windshear)",
        "Turbulence (clear air turbulence, mountain waves, wind shear)",
        "Icing",
        "Volcanic ash clouds",
        "Sand and dust storms",
        "Space weather phenomena",
        "Fog and low clouds",
        "Snow showers",
        "Freezing rain",
        "Hail",
        "Windstorms",
      ],
    },
    {
      title: "2. Meteorological Decision Support Systems and Technologies",
      subtopics: [
        "Integrated and automation applications of METAR, SPECI, TAF, and AMDAR",
        "AI applications",
        "Airport meteorological observation systems",
        "Remote weather observation technologies (LIDAR, SODAR)",
        "Aviation weather forecast models",
        "Visualization functions of existing and new products",
      ],
    },
    {
      title: "3. Unmanned Aerial Vehicle (UAV) Meteorology",
      subtopics: [
        "General atmospheric planning and decision-making",
        "Meteorological applications for UAV operations",
        "Measurement and sensor technology for UAV operations",
      ],
    },
    {
      title: "4. Climate Change and Long-Term Aviation Planning",
      subtopics: [
        "Climate impact by aviation",
        "Impact of climate change on meteorological operations and airport infrastructure",
        "Integration of climate change considerations into flight efficiency",
        "Green initiatives through meteorological optimization for fuel efficiency",
      ],
    },
    {
      title: "5. Strategy",
      subtopics: [
        "Decision support systems",
        "Data management systems",
        "Crisis management",
      ],
    },
    {
      title: "6. Flight Schools and Dispatching",
      subtopics: ["Good meteorology training", "New innovations in training"],
    },
    {
      title: "7. Human Factor in Aviation Meteorology",
      subtopics: ["Social implications of meteorological decisions"],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* Üst Başlık */}
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-gray-900">
        Symposium
      </h2>

      {/* Alt Başlık */}
      <h3 className="text-lg md:text-xl font-bold text-blue-900 text-center mb-4">
        1st Aviation Meteorology 360° Symposium
      </h3>

      {/* Açıklama */}
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Taking place from 24 to 26 November 2025, the Aviation Meteorology 360°
        Symposium is organized alongside the Aviation Meteorology 360° Workshop
        and provides a platform for sharing cutting-edge research and insights
        on aviation weather, monitoring, and forecasting technologies.
      </p>

      {/* Görsel */}
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/symposium.jpg"
          alt="Symposium"
          width={600}
          height={400}
          className="rounded-md shadow"
        />
      </div>

      {/* Konular */}
      <div className="mt-6">
        <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Symposium Main Topics
        </h4>
        <ol className="space-y-6 list-decimal list-inside">
          {mainTopics.map((topic, index) => (
            <li key={index}>
              <p className="font-semibold text-gray-800">{topic.title}</p>
              <ul className="list-disc list-inside pl-4 text-gray-700 mt-2 space-y-1">
                {topic.subtopics.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Symposium;
