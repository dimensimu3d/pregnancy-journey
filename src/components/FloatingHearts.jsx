import Particles from "@tsparticles/react";

export default function FloatingHearts() {
  return (
    <Particles
      id="hearts"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 25,
          },

          shape: {
            type: "char",

            character: [
              {
                value: "❤",
                font: "Verdana",
                weight: "400",
              },
            ],
          },

          color: {
            value: "#ff8fbf",
          },

          opacity: {
            value: 0.25,
          },

          size: {
            value: {
              min: 10,
              max: 25,
            },
          },

          move: {
            enable: true,
            speed: 1,

            direction: "top",

            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
}
