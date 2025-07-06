import React from "react";

const Perspect: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-black text-3xl md:text-4xl font-semibold mb-4">
        One Atmosphere, Many Perspectives
      </h2>
      <p className="text-black max-w-2xl mx-auto mb-12">
        This unique gathering will bring together academics, theoretical
        instructors, meteorological experts, weather forecasters, pilots,
        dispatchers, and all aviation enthusiasts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {/* Box 1 */}
        <div className="flex gap-4">
          <div>
            <h3 className="font-semibold text-black">
              Flight Planning Strategies
            </h3>
            <p className="text-black">
              Gain insights into route optimization and weather-based
              decision-making for safer flights.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex gap-4">
          <div>
            <h3 className="font-semibold text-black">
              Radar and Satellite Applications
            </h3>
            <p className="text-black">
              Explore how real-time data improves situational awareness and
              operational planning.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex gap-4">
          <div>
            <h3 className="font-semibold text-black">
              Weather Forecasting for Aviation
            </h3>
            <p className="text-black">
              Master the use of modern meteorological tools to enhance flight
              predictability and safety.
            </p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="flex gap-4">
          <div>
            <h3 className="font-semibold text-black">
              Dispatch and Operations
            </h3>
            <p className="text-black">
              Learn how dispatchers integrate meteorological data into daily
              flight operations.
            </p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="flex gap-4">
          <div>
            <h3 className="font-semibold text-black">
              Emergency Weather Scenarios
            </h3>
            <p className="text-black">
              Discuss real-world cases where aviation safety was tested by
              extreme weather.
            </p>
          </div>
        </div>

        {/* Box 6 */}
        <div className="flex gap-4">
          <div>
            <h3 className="font-semibold text-black">
              Pilot Briefing Techniques
            </h3>
            <p className="text-black">
              Improve briefing efficiency with accurate and concise
              meteorological reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perspect;
