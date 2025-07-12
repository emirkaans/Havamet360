const Panel = () => {
  const panels = [
    {
      title: "Panel 1 – Aviation: Past, Present, and Future",
      description:
        "The historical development of flight, current operational challenges, and future technological trends will be discussed in this interactive session.",
      moderator: "Journalist, Meteorological Engineer İrfan Bozan",
      panelists: [
        "General Directorate of State Airports Authority (DHMI) Expert",
        "Turkish State Meteorological Service (TSMS) Expert",
        "Directorate General of Civil Aviation (DGCA) Expert",
      ],
    },
    {
      title:
        "Panel 2 – New Horizons in Aviation Meteorology through Artificial Intelligence and Big Data",
      description:
        "This panel will cover AI-supported forecasting models, real-time data streams, and the integration of digital twins for flight safety, along with proactive strategies against extreme weather events.",
      moderator:
        "Assoc. Prof. Dr. Ömer Ekmekçioğlu, Istanbul Technical University (ITU)",
      panelists: [
        "Assistant Professor Dr. Nur Banu Albayrak, Kocaeli University",
      ],
    },
  ];

  return (
    <section className="mt-20 py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-12 text-gray-900">
        Panels
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {panels.map((panel, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {panel.title}
            </h3>
            <p className="text-gray-700 mb-4">{panel.description}</p>
            <p className="font-medium text-gray-800 mb-2">
              Moderator: <span className="font-normal">{panel.moderator}</span>
            </p>
            <h4 className="font-medium text-gray-800 mb-1">Panelists:</h4>
            <ul className="list-disc list-inside text-gray-700">
              {panel.panelists.map((panelist, idx) => (
                <li key={idx}>{panelist}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Panel;
