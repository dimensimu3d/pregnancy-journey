import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function FinalSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          confetti({
            particleCount: 200,
            spread: 120,
            origin: {
              y: 0.6,
            },
          });
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 px-6 text-center">
      <div data-aos="zoom-in">
        <div className="text-pink-500 text-8xl">
          <i className="ri-heart-fill" />
        </div>

        <h2 className="text-6xl font-bold text-pink-600 mt-8">Welcome Ruby</h2>

        <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
          Dan akhirnya kami bertemu denganmu.
        </p>
      </div>
    </section>
  );
}
