export const Footer = () => {
  return (
    <div className="mt-32 py-4 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-7 text-base/loose">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex gap-3 items-center">
        <a href="https://github.com/yasif883"><i className="ri-github-fill ri-2x"></i></a>
        <a href="https://www.instagram.com/yasif883?igsh=MmRxZzRxNncwZXUw"><i className="ri-instagram-fill ri-2x"></i></a>
        <a href="https://www.linkedin.com/in/muhammad-yasif-abdulkhoiri-44b97b2a1"><i className="ri-linkedin-box-fill ri-2x"></i></a>
        <a href="https://www.youtube.com/channel/UCGol6LjKwZrx1P-LtnbmmMA"><i className="ri-youtube-fill ri-2x"></i></a>
      </div>
    </div>
  );
};
