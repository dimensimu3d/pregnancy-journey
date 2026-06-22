import { heartbeatAudio } from "../data/pregnancyData";

export default function HeartbeatPlayer() {
  return (
    <section
      id="heartbeat"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div data-aos="zoom-in" className="bg-slate-900 p-10 rounded-3xl">
        <i className="ri-heart-pulse-fill text-7xl text-pink-500 animate-pulse" />

        <h2 className="text-3xl font-bold mt-4 text-center">
          Detak Jantung Bayi
        </h2>

        <audio controls className="mt-8">
          <source src={heartbeatAudio} type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
}
