export default function Hero({ setPlaying }) {
  const handleStartJourney = () => {
    setPlaying(true);

    document.getElementById("journey")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-linear-to-br
        from-pink-100
        via-pink-50
        to-white
        "
      />

      <div className="relative text-center px-6">
        <div className="text-pink-500 text-8xl mb-6">
          <i className="ri-heart-fill animate-pulse" />
        </div>

        <h1
          className="
          text-6xl
          md:text-8xl
          font-bold
          text-pink-600
          "
        >
          RUBY
        </h1>

        <p
          className="
          mt-6
          max-w-xl
          text-gray-600
          "
        >
          Perjalanan cinta dari dua garis kecil hingga pelukan pertama.
        </p>

        <button
          onClick={handleStartJourney}
          className="
        bg-pink-500
        text-white
          px-8
          py-4
          mt-5
          rounded-full
          "
        >
          Mulai Perjalanan
        </button>
      </div>
    </section>
  );
}
