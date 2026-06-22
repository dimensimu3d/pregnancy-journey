import { usgPhotos } from "../data/pregnancyData";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function UsgGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section id="usg" className="py-32 px-6">
      <h2
        data-aos="fade-up"
        className="text-center text-5xl font-bold text-pink-600 mb-20"
      >
        Precious Moments
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {usgPhotos.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="
            usg-card
            bg-white
            p-4
            rounded-3xl
            shadow-xl
            "
            style={{
              transform: index % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)",
            }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={item.image}
                onClick={() => {
                  console.log(item.image);
                  setSelectedImage(item.image);
                }}
                alt={item.caption}
                className="
                w-full
                h-87.5
                object-cover
                hover:scale-110
                transition
                duration-700
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-black/40
                opacity-0
                hover:opacity-100
                transition
                flex
                items-center
                justify-center
                text-white
                text-lg
                pointer-events-none
                "
              >
                ❤️ {item.caption}
              </div>
            </div>

            <p className="text-center mt-4 text-gray-600">{item.caption}</p>
          </div>
        ))}
      </div>
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
