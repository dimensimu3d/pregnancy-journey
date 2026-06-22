import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/golang.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/arduino.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/php.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Golang",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Arduino",
    ket: "Microcontroller",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "PHP",
    ket: "Language",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Layanan LRT Sumsel",
    desk: "Projek mandiri mengembangkan program sistem informasi dan pemesanan layanan lrt di balai pengelola kereta api ringan sumsel berbasis web. Memiliki kegunaan dalam mengelola informasi layanan tersedia dan pemesanan layanan. Dibangun menggunakan php prosedural dan beberapa library front-end.",
    tools: ["HTML", "CSS", "Bootstrap", "Swiper", "Javascript", "PHP", "MySQL", "Datatables"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Agenda Rapat",
    desk: "Projek mandiri mengembangkan sistem manajemen terkait data agenda dan rapat di PT PLN (Persero) UID S2JB berbasis web. Didalmnya terdapat berbagai fitur seperti kelola agenda dan peserta, statistik data, rekap data, kalender interaktif, generate dokumen, notif whatsapp, absensi, pemberkasan dll. Dibangun dengan node.js,express.js,mysql,rect.js dan beberapa framework front-end.",
    tools: [
      "HTML",
      "CSS",
      "MUI",
      "Bootstrap",
      "Javascript",
      "NodeJS",
      "ReactJS",
      "MySQL",
    ],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Rumah Makan",
    desk: "Projek mandiri mengembangkan program internal manajemen pemesanan pada rumah makan Pondok Barokah. Memiliki kegunaan dalam mengelola informasi menu tersedia, kelola antrian dapur dan manajemen pembayaran tunai. Dibangun menggunakan php prosedural dan beberapa framework.",
    tools: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "Javascript", "Datatables"],
    dad: "400",
  },
];
