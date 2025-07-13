import Image from "next/image";

const InteractiveSessions = () => {
  return (
    <section className="py-16 px-10 mx-auto bg-gradient-to-b from-neutral-200 to-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Interactive Sessions to Engage, Learn, and Explore
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Join hands-on analysis, case studies, and dynamic discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center p-6 mx-auto">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">
              Participant Guide
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>Full event schedule at a glance.</li>
              <li>Speaker bios and session abstracts all in one place.</li>
              <li>How to register for workshops, find rooms, and more.</li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/interactivesession1.jpg"
              alt="Participant Guide"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="relative">
            <Image
              src="/assets/images/interactivesession2.jpg"
              alt="Applied Training Modules"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 mx-auto">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">
              Applied Training Modules
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>Scenario-based weather assessments.</li>
              <li>Real-time simulations for better decision-making.</li>
              <li>
                Practical experience for pilots, meteorologists, and students.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSessions;
