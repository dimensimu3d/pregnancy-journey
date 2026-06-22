import { pregnancyTimeline } from "../data/pregnancyData";

export default function JourneyTimeline() {
  return (
    <section id="journey" className="max-w-6xl mx-auto px-6 py-32">
      <h2
        data-aos="fade-up"
        className="text-center text-5xl font-bold text-pink-600 mb-24"
      >
        Pregnancy Journey
      </h2>

      <div className="relative">
        <div
          className="
          absolute
          left-1/2
          top-0
          bottom-0
          w-1
          bg-pink-200
          hidden
          md:block
          "
        />

        {pregnancyTimeline.map((item, index) => (
          <div
            key={index}
            className={`
              relative mb-20 flex
              ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
            `}
          >
            <div
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-xl
              max-w-md
              hover:-translate-y-2
              transition
              duration-300
              "
            >
              <span className="text-pink-500 font-bold">{item.week}</span>

              <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

              <p className="text-gray-600 mt-4">{item.description}</p>
            </div>

            <div
              className="
              hidden md:flex
              absolute
              left-1/2
              -translate-x-1/2
              top-10
              w-6
              h-6
              rounded-full
              bg-pink-500
              border-4
              border-white
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
