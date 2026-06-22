import { useEffect, useState } from "react";
import AOS from "aos";

import FloatingHearts from "./components/FloatingHearts";
import ScrollProgress from "./components/ScrollProgress";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JourneyTimeline from "./components/JourneyTimeline";
import UsgGallery from "./components/UsgGallery";
import HeartbeatSection from "./components/HeartbeatSection";
import BabyName from "./components/BabyName";
import Milestones from "./components/Milestones";
import BirthGallery from "./components/BirthGallery";
import FinalSection from "./components/FinalSection";
import FloatingMusicPlayer from "./components/FloatingMusicPlayer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-pink-50 overflow-x-hidden">
      <ScrollProgress />
      <FloatingHearts />

      <Navbar />

      <Hero setPlaying={setPlaying} />

      <JourneyTimeline />

      <UsgGallery />

      <HeartbeatSection />

      <BabyName />

      <Milestones />

      <BirthGallery />

      <FinalSection />

      <FloatingMusicPlayer playing={playing} setPlaying={setPlaying} />
    </div>
  );
}
