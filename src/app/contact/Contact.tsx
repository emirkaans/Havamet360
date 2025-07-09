const Contact = () => {
  return (
    <section className="container mt-20 py-4 px-4 mx-auto text-center">
      {/* Başlık */}
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
        Contact
      </h2>

      {/* Email */}
      <p className="text-gray-700 mb-2">
        📧 <strong>Email:</strong>{" "}
        <a
          href="mailto:havamet360calistayi@itu.edu.tr"
          className="text-blue-700 underline hover:text-blue-900"
        >
          havamet360calistayi@itu.edu.tr
        </a>
      </p>

      {/* Adres */}
      <p className="text-gray-700 mb-6">
        📍 <strong>Address:</strong> Istanbul Technical University, Disaster
        Management Institute (EEDMI), Maslak Campus, 34469 Istanbul, Türkiye
      </p>

      {/* Harita */}
      <div className="mb-6 max-w-1/2 mx-auto">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=29.0150%2C41.1020%2C29.0200%2C41.1050&layer=mapnik&marker=41.10380609969357%2C29.0175043944663&zoom=17"
          className="w-full h-80 rounded-md border"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Ek bilgi */}
      <p className="text-red-600 font-semibold italic mb-4">
        📅 Submission dates are announced in main page!
      </p>
      <p className="text-blue-800 italic">
        We look forward to welcoming you to the workshop & the symposium!
      </p>
    </section>
  );
};

export default Contact;
