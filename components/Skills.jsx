const skillGroups = [
  {
    title: "Frontend",
    skills: ["JavaScript", "React.js", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database & ORM",
    skills: ["PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-[#11101f] via-[#1c1735] to-[#11101f] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-sm text-center font-medium tracking-[0.25em] text-purple-400 uppercase">
            My Expertise
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold text-white md:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-4 text-center max-w-2xl leading-7 text-gray-300">
            Technologies I use to design, develop, and build modern web
            applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-purple-400/20 bg-gradient-to-br from-[#292344] to-[#171529] p-6 transition hover:border-purple-400/60"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-purple-400/40 bg-purple-500/20 px-4 py-2 text-sm font-medium text-purple-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
