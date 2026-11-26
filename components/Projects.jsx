const projects = [
  {
    number: "01",
    title: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "A modern and responsive developer portfolio website built to showcase skills, experience, and projects.",
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    status: "In Progress",
  },
  {
    number: "02",
    title: "Task Management App",
    category: "Fullstack Development",
    description:
      "A web application concept for managing daily tasks, tracking progress, and organizing productivity.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "Coming Soon",
  },
  {
    number: "03",
    title: "Data Management System",
    category: "Web Application",
    description:
      "A database-driven application concept for managing, organizing, and presenting structured information.",
    technologies: ["React.js", "Express.js", "Prisma"],
    status: "Coming Soon",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-[#11101f] via-[#19152d] to-[#11101f] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            My Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            A selection of projects that demonstrate my interest in building
            modern and practical web applications.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-br from-[#292344] to-[#171529] transition duration-300 hover:-translate-y-2 hover:border-purple-400/60"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#44346e] to-[#211b3d]">
                <span className="text-6xl font-bold text-white/20">
                  {project.number}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-purple-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-gray-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-sm font-medium text-purple-300">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
