import { useEffect, useRef, useState } from "react";
import { musicPlaylist } from "../data/musicPlaylist";

export default function FloatingMusicPlayer({ playing, setPlaying }) {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [minimized, setMinimized] = useState(true);
  const [progress, setProgress] = useState(0);

  const track = musicPlaylist[currentTrack];

  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const nextSong = () => {
    const next = (currentTrack + 1) % musicPlaylist.length;

    setCurrentTrack(next);
  };

  const prevSong = () => {
    const prev =
      currentTrack === 0 ? musicPlaylist.length - 1 : currentTrack - 1;

    setCurrentTrack(prev);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.load();

    if (playing) {
      audio.play().catch(console.error);
    }
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateProgress = () => {
      const value = (audio.currentTime / audio.duration) * 100;

      setProgress(value || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <>
      <audio ref={audioRef} src={track.audio} onEnded={nextSong} />

      <div
        className={`
        fixed
        bottom-6
        right-6
        z-50
        transition-all
        duration-300
        ${minimized ? "w-16 h-16 rounded-full" : "w-80"}
        `}
      >
        <div
          className="
          backdrop-blur-xl
          bg-white/80
          shadow-2xl
          border
          border-pink-100
          rounded-3xl
          overflow-hidden
          "
        >
          {minimized ? (
            <button
              onClick={() => setMinimized(false)}
              className="
              w-16
              h-16
              flex
              items-center
              justify-center
              text-pink-500
              text-2xl
              "
            >
              🎵
            </button>
          ) : (
            <>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-pink-600">Music Player</h3>

                  <button onClick={() => setMinimized(true)}>
                    <i className="ri-subtract-line text-pink-500" />
                  </button>
                </div>

                <div className="flex gap-4 mt-4">
                  <img
                    src={track.cover}
                    alt=""
                    className={`
                    w-20
                    h-20
                    rounded-full
                    object-cover
                    ${playing ? "animate-spin" : ""}
                    `}
                  />

                  <div className="flex-1">
                    <h4 className="font-bold text-gray-500">{track.title}</h4>

                    <p className="text-sm text-gray-500">{track.artist}</p>

                    <div
                      className="
                      mt-3
                      h-2
                      rounded-full
                      bg-pink-100
                      overflow-hidden
                      "
                    >
                      <div
                        className="
                        h-full
                        bg-pink-500
                        transition-all
                        "
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="
                  flex
                  justify-center
                  gap-4
                  mt-6
                  "
                >
                  <button onClick={prevSong} className="music-btn">
                    <i className="ri-skip-back-fill" />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="
                    music-btn
                    music-play-btn
                    "
                  >
                    <i className={playing ? "ri-pause-fill" : "ri-play-fill"} />
                  </button>

                  <button onClick={nextSong} className="music-btn">
                    <i className="ri-skip-forward-fill" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
