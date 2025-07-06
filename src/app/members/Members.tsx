import Image from "next/image";

const members = [
  { name: "Emrah Tuncay Özdemir", role: "Chair" },
  { name: "Ali Osman Mut", role: "Research Assistant" },
  { name: "Busenur Keskin", role: "Research Assistant" },
  { name: "Cansu Aktaş", role: "Research Assistant" },
  { name: "Cemre Sonuç", role: "Research Assistant" },
  { name: "Enes Birinci", role: "Research Assistant" },
  { name: "İbrahim Akbayır", role: "Research Assistant" },
  { name: "Mehmet Barış Kelebek", role: "Research Assistant" },
  { name: "Sena Ecem Yakut Şevik", role: "Research Assistant" },
  { name: "Kübra Günel", role: "Dean Secretary" },
  { name: "Dilek Tunç", role: "Department Secretary" },
  { name: "Hatice Baltacı", role: "Department Secretary" },
  { name: "Zeki Çelikbaş", role: "Technical Manager" },
  { name: "Ahsen Cemile Dönergöz", role: "Student" },
  { name: "Aykhan Musazade", role: "Student" },
];

const Members = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-center">
      {/* Başlık */}
      <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
        ITU Committee Members
      </h2>

      {/* Ana Görsel */}
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/members-main.jpg"
          alt="ITU Committee Members Main"
          width={800}
          height={500}
          className="rounded-md shadow"
        />
      </div>

      {/* Üyeler */}
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 w-40"
          >
            <Image
              src={`/assets/members-${index + 1}.jpg`}
              alt={member.name}
              width={180}
              height={180}
              className="rounded-full mb-3 object-cover"
            />
            <p className="font-medium text-gray-900">{member.name}</p>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
