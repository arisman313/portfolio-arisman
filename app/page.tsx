import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "Git",
  "GitHub",
];

const projects = [
  {
    number: "01",
    category: "TOKO ONLINE · FULLSTACK",
    name: "Ruang Belanja",
    description:
      "Toko online dengan proses pembayaran yang praktis, autentikasi aman, dan dashboard sederhana untuk mengelola produk.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    visual: "from-[#e9e5ff] via-[#f2efff] to-[#f8f7ff]",
    accent: "bg-[#8776e8]",
    monogram: "rb.",
  },
  {
    number: "02",
    category: "PRODUKTIVITAS · APLIKASI WEB",
    name: "    Fokus Proyek",
    description:
      "Ruang kerja kolaboratif yang membantu tim kecil mengatur tugas, memantau progres, dan bekerja lebih fokus.",
    stack: ["React", "Node.js", "Express.js"],
    visual: "from-[#e5eefa] via-[#f0f5fc] to-[#f8faff]",
    accent: "bg-[#708ebf]",
    monogram: "fp.",
  },
  {
    number: "03",
    category: "KEUANGAN PRIBADI · DASHBOARD",
    name: "Saku Harian",
    description:
      "Dashboard keuangan pribadi yang mengubah transaksi harian menjadi informasi jelas untuk mengambil keputusan.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    visual: "from-[#e8f1ed] via-[#f1f7f3] to-[#f9fbf9]",
    accent: "bg-[#719487]",
    monogram: "sh.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="home"
          className="relative overflow-hidden border-b border-[#eeedf3]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 -top-32 h-[440px] w-[440px] rounded-full bg-[#eeeaff] blur-3xl sm:right-[-5%] sm:top-[-20%]"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-10 sm:py-20 lg:min-h-[650px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:py-24">
            <div className="max-w-[600px]">
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e7e3fb] bg-white/80 px-3.5 py-2 text-[12px] font-medium text-[#5b5582]">
                <span className="h-2 w-2 rounded-full bg-[#8b7ae8]" />
                Terbuka untuk peluang baru
              </p>
              <p className="mb-4 text-sm font-semibold tracking-[0.16em] text-[#77748d] uppercase">
                Halo, saya Arisman Ismail
              </p>
              <h1 className="text-[clamp(2.5rem,7.5vw,5.75rem)] leading-[1.02] font-semibold tracking-[-0.075em] text-[#23223d]">
                Website Modern{" "}
                <span className="text-[#8b7ae8]">untuk Bisnis Anda.</span>
              </h1>
              <p className="mt-7 max-w-[500px] text-base leading-7 text-[#6d6c80] sm:text-[17px] sm:leading-8">
                Saya membantu bisnis dan individu membangun website modern,
                responsif, dan fungsional menggunakan JavaScript, React, dan
                Next.js.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#292741] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(41,39,65,0.14)] transition-all hover:-translate-y-0.5 hover:bg-[#3b385a]"
                >
                  Hubungi saya <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="#projects"
                  className="px-3 py-3 text-sm font-semibold text-[#66647c] transition-colors hover:text-[#292741]"
                >
                  Lihat proyek <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="mt-12 flex items-center gap-3 text-[12px] font-medium text-[#77758a]">
                <span className="h-px w-9 bg-[#cbc7dd]" />
                Berbasis di Indonesia · Bekerja secara remote
              </div>
            </div>

            <div className="relative mx-auto flex h-[340px] w-full max-w-[340px] items-center justify-center sm:h-[440px] sm:max-w-[450px]">
              <div className="absolute h-[280px] w-[280px] rounded-full border border-[#e5e0f8] sm:h-[380px] sm:w-[380px]" />
              <div className="absolute h-[230px] w-[230px] rounded-full bg-gradient-to-br from-[#ece8ff] via-[#e5e0ff] to-[#d8d1ff] sm:h-[320px] sm:w-[320px]" />
              <div className="relative flex h-[245px] w-[200px] flex-col items-center justify-end overflow-hidden rounded-t-[100px] rounded-b-[34px] border border-white/80 bg-gradient-to-b from-[#faf9ff] to-[#d9d3f7] shadow-[0_28px_70px_rgba(73,61,133,0.17)] sm:h-[290px] sm:w-[235px]">
                <div className="absolute top-0 h-[155px] w-[155px] rounded-full bg-[#f0d7c6] sm:h-[185px] sm:w-[185px]" />
                <div className="absolute top-[48px] h-[140px] w-[154px] rounded-t-[75px] bg-[#28263e] sm:top-[56px] sm:h-[165px] sm:w-[180px]" />
                <div className="absolute top-[88px] h-[130px] w-[116px] rounded-t-[58px] rounded-b-[32px] bg-[#d9a98e] sm:top-[103px] sm:h-[150px] sm:w-[136px]" />
                <div className="absolute top-[149px] h-10 w-[190px] rounded-t-[50%] bg-[#4d4777] sm:top-[177px] sm:w-[220px]" />
                <span className="relative z-[1] mb-5 rounded-full border border-white/50 bg-white/75 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#49445f] uppercase backdrop-blur">
                  Arisman Ismail
                </span>
              </div>
              <div className="absolute top-[54px] right-0 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(42,38,77,0.09)] sm:right-[-6px]">
                <p className="text-[10px] font-medium tracking-wide text-[#9290a3] uppercase">
                  Stack favorit
                </p>
                <p className="mt-1 text-sm font-semibold text-[#34324e]">
                  JS <span className="text-[#8b7ae8]">+</span> React
                </p>
              </div>
              <div className="absolute bottom-[48px] left-0 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(42,38,77,0.09)] sm:left-[-10px]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0edff] text-sm font-bold text-[#7665d1]">
                  {"</>"}
                </span>
                <div>
                  <p className="text-[10px] font-medium text-[#9290a3]">
                    Fokus saat ini
                  </p>
                  <p className="text-[12px] font-semibold text-[#34324e]">
                    Fullstack development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
