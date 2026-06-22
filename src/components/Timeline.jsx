import { pregnancyTimeline } from "../data/pregnancyData";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="min-h-screen py-24 container mx-auto px-6"
    >
      <h2 className="text-4xl font-bold mb-16 text-center">
        Timeline Kehamilan
      </h2>

      <div className="space-y-10">
        {pregnancyTimeline.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-slate-900 rounded-xl p-6 border border-slate-800"
          >
            <span className="text-pink-400 font-bold">{item.week}</span>

            <h3 className="text-2xl mt-2">{item.title}</h3>

            <p className="text-slate-300 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
