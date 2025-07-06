import Image from "next/image";

const InteractiveSessions = () => {
  return (
    <section className="py-16 px-10 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-gray-800">
          Interactive Sessions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Engage directly with speakers through hands-on analysis, case studies,
          and dynamic discussions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Text / Right: Image */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-800">
            Participant Guide
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Full event schedule at a glance.</li>
            <li>Speaker bios and session abstracts all in one place.</li>
            <li>How to register for workshops, find rooms, and more.</li>
          </ul>
        </div>
        <div>
          <Image
            src="/assets/interactivesession1.jpg"
            alt="Participant Guide"
            width={800}
            height={600}
            className="w-full object-cover rounded-md"
          />
        </div>

        {/* Left: Image / Right: Text */}
        <div>
          <Image
            src="/assets/interactivesession2.jpg"
            alt="Applied Training Modules"
            width={800}
            height={600}
            className="w-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-800">
            Applied Training Modules
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Scenario-based weather assessments.</li>
            <li>Real-time simulations for better decision-making.</li>
            <li>
              Practical experience for pilots, meteorologists, and students.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSessions;
