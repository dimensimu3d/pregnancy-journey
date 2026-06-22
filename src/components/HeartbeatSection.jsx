import { useRef, useState } from "react";
import { heartbeatAudio } from "../data/pregnancyData";

export default function HeartbeatSection() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <section id="heartbeat" className="py-40 px-6">
      <div
        data-aos="zoom-in"
        className="
        max-w-4xl
        mx-auto
        bg-white
        rounded-[40px]
        shadow-2xl
        overflow-hidden
        relative
        "
      >
        <div
          className="
          absolute
          inset-0
          bg-pink-300
          blur-[150px]
          opacity-20
          "
        />

        <div className="relative p-12 text-center">
          <div
            className={`
            text-pink-500
            text-8xl
            mb-10
            ${playing ? "heartbeat-animation" : ""}
            `}
          >
            <i className="ri-heart-fill" />
          </div>

          <h2 className="text-5xl font-bold text-pink-600">First Heartbeat</h2>

          <p className="mt-4 text-gray-600">
            Suara kecil yang mengubah hidup kami selamanya.
          </p>

          <div className="mt-12 heartbeat-line">
            <svg viewBox="0 0 1000 200" className="heartbeat-svg">
              <path
                className="heartbeat-path"
                d="
                M0 100
                L150 100
                L180 40
                L220 160
                L270 20
                L330 100
                L1000 100
                "
              />
            </svg>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {[...Array(30)].map((_, i) => (
              <span
                key={i}
                className={playing ? "wave-bar active" : "wave-bar"}
              />
            ))}
          </div>

          <button
            onClick={toggleAudio}
            className="
            mt-10
            bg-pink-500
            hover:bg-pink-600
            text-white
            px-10
            py-4
            rounded-full
            transition
            "
          >
            <i className={playing ? "ri-pause-fill" : "ri-play-fill"} />

            <span className="ml-2">{playing ? "Pause" : "Play"}</span>
          </button>

          <audio
            ref={audioRef}
            src={heartbeatAudio}
            onEnded={() => setPlaying(false)}
          />
        </div>
      </div>
    </section>
  );
}
