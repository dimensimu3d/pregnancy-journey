import { birthPhotos } from "../data/pregnancyData";

export default function BirthGallery() {
  return (
    <section id="birth" className="py-32 px-6">
      <h2
        data-aos="fade-up"
        className="text-center text-5xl font-bold text-pink-600 mb-20"
      >
        The Day We Met You
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {birthPhotos.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="
            bg-white
            p-4
            rounded-3xl
            shadow-xl
            "
          >
            <img
              src={item.image}
              alt={item.caption}
              className="
              w-full
              h-112.5
              object-cover
              rounded-2xl
              "
            />

            <p className="text-center mt-4 text-gray-600">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
