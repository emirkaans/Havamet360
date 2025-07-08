const ImportantDates = () => {
  const dates = [
    "Deadline for online abstract submission: September 1, 2025",
    "Deadline for full-text submission: October 20, 2025",
    "Full-text submission is not mandatory; abstracts alone can also be published in the proceedings book.",
    "Proceedings will be published in an e-ISBN-certified abstract/full-text book after the Symposium/Workshop.",
    "The official languages of the Symposium/Workshop are Turkish and English.",
    "Our symposium/workshop will be held in a hybrid format.",
  ];

  return (
    <section className="py-16 px-4 flex justify-center">
      <div className="p-8 max-w-3xl w-full rounded-md">
        {/* Başlık */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-200">
          📅 Important Dates & Information
        </h2>

        {/* Liste */}
        <ul className="space-y-4 text-gray-300">
          {dates.map((item, index) => {
            // Eğer metnin içinde ':' varsa ilk kısmı bold yapalım
            const [prefix, suffix] = item.split(":");

            return (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-200 mt-1">•</span>
                <span>
                  {suffix ? (
                    <>
                      <strong>{prefix}:</strong> {suffix.trim()}
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ImportantDates;
