export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      w-full
      z-50
      backdrop-blur-md
      bg-white/60
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-4
        flex
        justify-center
        gap-8
        text-pink-600
        "
      >
        <a href="#journey">Journey</a>
        <a href="#usg">USG</a>
        <a href="#heartbeat">Heartbeat</a>
        <a href="#birth">Birth</a>
      </div>
    </nav>
  );
}
