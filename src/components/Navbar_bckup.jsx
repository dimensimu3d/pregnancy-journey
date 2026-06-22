import { useState, useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div className={`navbar py-7 flex justify-between items-center ${scrolled ? "md:sticky md:bg-white/30 md:backdrop-blur-md px-8 md:rounded-b-2xl" : "md:static"} w-full z-40 top-0 left-0 transition-all`}>
      <div className="logo text-3xl font-bold bg-white md:bg-transparent text-black md:text-white p1">
        Portofolio
      </div>
      <ul className={`${scrolled ? "top-0 opacity-100 md:bg-transparent bg-white/30 md:backdrop-blur-none backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl" : "-top-10 opacity-0"} transition-all md:transition-none menu flex items-center gap-4 sm:gap-10 font-medium md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 z-40`}>
        <li>
          <a className="text-base sm:text-lg font-medium" href="#beranda">
            Beranda
          </a>
        </li>
        <li>
          <a className="text-base sm:text-lg font-medium" href="#tentang">
            Tentang
          </a>
        </li>
        <li>
          <a className="text-base sm:text-lg font-medium" href="#proyek">
            Projek
          </a>
        </li>
        <li>
          <a className="text-base sm:text-lg font-medium" href="#kontak">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
