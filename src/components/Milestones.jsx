const milestones = [
  "Test Pack Positif",
  "USG Pertama",
  "Detak Jantung Pertama",
  "Tendangan Pertama",
  "Baby Shower",
  "Hari Kelahiran",
];

export default function Milestones() {
  return (
    <section className="py-32 px-6">
      <h2
        data-aos="fade-up"
        className="text-center text-5xl font-bold text-pink-600 mb-20"
      >
        Special Milestones
      </h2>

      <div className="max-w-4xl mx-auto">
        {milestones.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="
            flex
            items-center
            gap-6
            mb-8
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-full
              bg-pink-500
              text-white
              flex
              items-center
              justify-center
              "
            >
              <i className="ri-check-line text-xl" />
            </div>

            <div
              className="
              bg-pink-500
              shadow
              rounded-2xl
              flex-1
              p-6
              "
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
