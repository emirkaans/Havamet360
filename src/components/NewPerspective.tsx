import React from "react";

const NewPerspective: React.FC = () => {
  const aviationTopics = [
    {
      title: "Flight Planning Strategies",
      text: "Gain insights into route optimization and weather-based decision-making for safer flights.",
    },
    {
      title: "Radar and Satellite Applications",
      text: "Explore how real-time data improves situational awareness and operational planning.",
    },
    {
      title: "Weather Forecasting for Aviation",
      text: "Master the use of modern meteorological tools to enhance flight predictability and safety.",
    },
    {
      title: "Dispatch and Operations",
      text: "Learn how dispatchers integrate meteorological data into daily flight operations.",
    },
    {
      title: "Emergency Weather Scenarios",
      text: "Discuss real-world cases where aviation safety was tested by extreme weather.",
    },
    {
      title: "Pilot Briefing Techniques",
      text: "Improve briefing efficiency with accurate and concise meteorological reporting.",
    },
  ];

  return (
    <section className="text-gray-400 body-font max-w-[1200px] mx-auto shadow-sm">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-2">
            One Atmosphere, Many Perspectives
          </h1>
          <p className="mt-2 lg:w-1/2 w-full leading-relaxed text-gray-600">
            This unique gathering will bring together academics, theoretical
            instructors, meteorological experts, weather forecasters, pilots,
            dispatchers, and all aviation enthusiasts.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {aviationTopics.map((item, index) => {
            return (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4 text-gray-800">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h2 className="text-lg font-medium title-font mb-2 text-center">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-base">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewPerspective;
