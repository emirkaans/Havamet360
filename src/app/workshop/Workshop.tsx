import Image from "next/image";

const Workshop = () => {
  return (
    <section className="mt-20 py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">
        Workshop
      </h2>

      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
        1st Aviation Meteorology 360° Workshop
      </h3>

      <p className="max-w-2xl text-gray-700 mb-8">
        A recently launched workshop entitled Aviation Meteorology 360°
        integrates academic insight with practical expertise to facilitate a
        comprehensive exploration of atmospheric phenomena, with its inaugural
        edition taking place from 24 to 26 November 2025.
      </p>

      <div className="bg-gray-50 p-4 rounded-2xl shadow-sm mb-8">
        <Image
          src="/assets/images/workshop.jpeg"
          alt="Aviation Meteorology 360° Workshop Poster"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>

      <p className="max-w-2xl text-gray-600">
        The event will convene researchers, weather forecasters, meteorologists,
        pilots, flight dispatchers, and other aviation professionals to exchange
        knowledge and engage with emerging developments in the field.
      </p>
    </section>
  );
};

export default Workshop;
