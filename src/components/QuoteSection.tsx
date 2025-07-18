import Image from "next/image";

const QuoteSection = () => {
  return (
    <section className="bg-neutral-900 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <blockquote className="italic text-xl md:text-2xl leading-relaxed mb-8">
          “There was always a place for us in the skies — if only we believed.”
        </blockquote>

        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/sabihagokcen.png"
            alt="Sabiha Gökçen"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          <p className="font-semibold mt-4">Sabiha Gökçen</p>
          <p className="text-sm text-gray-300">
            The world&apos;s first female fighter pilot
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
