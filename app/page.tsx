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
      <header className="sticky top-0 z-10 border-b border-[#e9e8ef] bg-[#fbfaff]/90 backdrop-blur-md">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-12"
        >
          <a
            href="#home"
            className="text-xl font-bold tracking-[-0.08em] text-[#22213b]"
            aria-label="Arisman Ismail, home"
          >
            Home<span className="text-[#8b7ae8]">.</span>
          </a>
          <div className="hidden items-center gap-9 text-[13px] font-medium text-[#68677c] sm:flex">
            <a className="transition-colors hover:text-[#27263f]" href="#about">
              Tentang
            </a>
            <a
              className="transition-colors hover:text-[#27263f]"
              href="#skills"
            >
              Keahlian
            </a>
            <a
              className="transition-colors hover:text-[#27263f]"
              href="#projects"
            >
              Proyek
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-[#dcd8f7] px-4 py-2 text-[13px] font-semibold text-[#51469b] transition-colors hover:bg-[#f0edff]"
          >
            Hubungi saya <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden border-b border-[#eeedf3]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 -top-32 h-[440px] w-[440px] rounded-full bg-[#eeeaff] blur-3xl sm:right-[-5%] sm:top-[-20%]"
          />
          <div className="relative mx-auto grid min-h-[650px] max-w-6xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
            <div className="max-w-[600px]">
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e7e3fb] bg-white/80 px-3.5 py-2 text-[12px] font-medium text-[#5b5582]">
                <span className="h-2 w-2 rounded-full bg-[#8b7ae8]" />
                Terbuka untuk peluang baru
              </p>
              <p className="mb-4 text-sm font-semibold tracking-[0.16em] text-[#77748d] uppercase">
                Halo, saya Arisman Ismail
              </p>
              <h1 className="text-[clamp(3.2rem,7vw,5.75rem)] leading-[0.99] font-semibold tracking-[-0.075em] text-[#23223d]">
                Membangun web
                <br />
                yang <span className="text-[#8b7ae8]">berarti.</span>
              </h1>
              <p className="mt-7 max-w-[500px] text-base leading-7 text-[#6d6c80] sm:text-[17px] sm:leading-8">
                Fullstack JavaScript Developer yang mengubah ide menjadi
                pengalaman digital yang intuitif, bermanfaat, dan siap
                berkembang.
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

            <div className="relative mx-auto flex h-[390px] w-full max-w-[450px] items-center justify-center sm:h-[440px]">
              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#e5e0f8] sm:h-[380px] sm:w-[380px]" />
              <div className="absolute h-[270px] w-[270px] rounded-full bg-gradient-to-br from-[#ece8ff] via-[#e5e0ff] to-[#d8d1ff] sm:h-[320px] sm:w-[320px]" />
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

        <section id="about" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 lg:py-28">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#8b7ae8] uppercase">
                Sedikit tentang saya
              </p>
              <h2 className="mt-4 max-w-xs text-4xl leading-tight font-semibold tracking-[-0.06em] text-[#27263f]">
                Teknologi dengan sentuhan manusia.
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-[#666579]">
                Saya menikmati proses merancang dan membangun produk digital
                dari awal hingga siap digunakan. Bagi saya, kode yang baik bukan
                hanya soal bekerja dengan benar, tetapi juga mudah dipahami dan
                memberi pengalaman yang terasa sederhana.
              </p>
              <p className="mt-5 text-base leading-7 text-[#858397]">
                Saya bekerja di seluruh lapisan aplikasi—mulai dari antarmuka
                yang rapi hingga API dan database yang andal. Selalu terbuka
                untuk belajar, berkolaborasi, dan memecahkan masalah yang
                bermakna.
              </p>
              <div className="mt-9 flex flex-wrap gap-8 border-t border-[#eeedf3] pt-6">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-[#302e4b]">
                    Dari awal hingga akhir
                  </p>
                  <p className="mt-1 text-xs text-[#858397]">
                    Dari ide hingga produk
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-[#302e4b]">
                    Teliti hingga detail
                  </p>
                  <p className="mt-1 text-xs text-[#858397]">
                    Kualitas di setiap lapisan
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-[#302e4b]">
                    Kolaboratif
                  </p>
                  <p className="mt-1 text-xs text-[#858397]">
                    Kolaborasi yang terbuka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 bg-[#f5f4fa]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20 lg:px-12 lg:py-24">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#8b7ae8] uppercase">
                Teknologi
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#27263f]">
                Alat untuk ide besar.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[#77758a]">
                Teknologi pilihan untuk membangun produk web yang cepat,
                terstruktur, dan mudah dikembangkan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-[#e4e1ef] bg-white px-4 py-3 text-sm font-medium text-[#4c4a65] shadow-[0_2px_8px_rgba(43,39,76,0.025)] transition-all hover:-translate-y-0.5 hover:border-[#cfc8f5] hover:text-[#7060ca]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#8b7ae8] uppercase">
                  Karya pilihan
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#27263f] sm:text-5xl">
                  Beberapa proyek saya.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#858397]">
                Ide yang diubah menjadi produk digital dengan tujuan dan
                perhatian pada detail.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group overflow-hidden rounded-[22px] border border-[#eeedf3] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(38,35,70,0.08)]"
                >
                  <div
                    className={`relative mx-3 mt-3 flex h-[205px] items-center justify-center overflow-hidden rounded-[15px] bg-gradient-to-br ${project.visual}`}
                  >
                    <div className="absolute h-36 w-36 rounded-full border border-white/80" />
                    <div className="absolute h-28 w-28 rounded-full border border-white/70" />
                    <div className="relative w-[72%] rotate-[-3deg] rounded-xl border border-white/80 bg-white/90 p-3.5 shadow-[0_18px_38px_rgba(39,35,75,0.12)] transition-transform duration-300 group-hover:rotate-0">
                      <div className="flex items-center justify-between border-b border-[#efedf4] pb-2.5">
                        <span className="text-[11px] font-bold tracking-tight text-[#36344f]">
                          {project.monogram}
                        </span>
                        <span className="flex gap-1">
                          <span className="h-1 w-1 rounded-full bg-[#d9d5e8]" />
                          <span className="h-1 w-1 rounded-full bg-[#d9d5e8]" />
                          <span className="h-1 w-1 rounded-full bg-[#d9d5e8]" />
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <div
                          className={`h-[62px] w-[42%] rounded-lg ${project.accent} opacity-90`}
                        />
                        <div className="flex flex-1 flex-col justify-between py-1">
                          <span className="h-2 w-[82%] rounded-full bg-[#e6e4ed]" />
                          <span className="h-2 w-[58%] rounded-full bg-[#eeedf3]" />
                          <span className="h-2 w-[72%] rounded-full bg-[#eeedf3]" />
                        </div>
                      </div>
                      <div className="mt-2.5 flex justify-between">
                        <span className="h-1.5 w-[45%] rounded-full bg-[#eeedf3]" />
                        <span
                          className={`h-1.5 w-[22%] rounded-full ${project.accent} opacity-60`}
                        />
                      </div>
                    </div>
                    <span className="absolute right-4 bottom-4 text-[10px] font-medium tracking-[0.13em] text-[#77748d]/80">
                      PROJECT {project.number}
                    </span>
                  </div>
                  <div className="p-5 pt-4">
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-[#8b7ae8]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#302e49]">
                      {project.name}
                    </h3>
                    <p className="mt-2 min-h-[72px] text-[13px] leading-[1.65] text-[#77758a]">
                      {project.description}
                    </p>
                    <ul
                      aria-label={`Teknologi ${project.name}`}
                      className="mt-4 flex flex-wrap gap-2"
                    >
                      {project.stack.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-md bg-[#f5f4fa] px-2 py-1 text-[10px] font-medium text-[#68667d]"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#292741] text-white">
          <div className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-48 h-[380px] w-[380px] rounded-full border border-white/[0.08]"
            />
            <div
              aria-hidden="true"
              className="absolute right-[-35px] -bottom-32 h-[280px] w-[280px] rounded-full border border-white/[0.08]"
            />
            <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#b8adff] uppercase">
                  Mari berkolaborasi
                </p>
                <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.06em] sm:text-5xl">
                  Punya ide menarik?
                  <br />
                  <span className="text-[#b8adff]">Mari wujudkan.</span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
                  Sedang mencari partner untuk proyek berikutnya? Saya senang
                  mendengar tentang ide dan tantangan Anda.
                </p>
              </div>
              {/* <a
                href="mailto:arisman.ajaib@gmail.com"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#302e49] transition-all hover:-translate-y-0.5 hover:bg-[#f0edff]"
              >
                arisman.ajaib@gmail.com <span aria-hidden="true">↗</span>
              </a> */}

              <a
                href="https://wa.me/6282112548104"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#302e49] transition-all hover:-translate-y-0.5 hover:bg-[#f0edff]"
              >
                Hubungi via WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#292741]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 px-6 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <p>© 2026 Arisman Ismail. Dibuat dengan sepenuh hati.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
