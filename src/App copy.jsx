import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import UsgGallery from "./components/UsgGallery";
import HeartbeatPlayer from "./components/HeartbeatPlayer";
import BirthGallery from "./components/BirthGallery";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    });
  }, []);

  return (
    <div className="bg-sky-400 text-pink-500 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Timeline />
      <UsgGallery />
      <HeartbeatPlayer />
      <BirthGallery />
    </div>
  );
}

export default App;