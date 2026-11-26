export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#171529] via-[#211a3a] to-[#11101f] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Building Digital Experiences with Purpose
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-300">
              <p>
                I enjoy designing and building digital products from the ground
                up. For me, good code is not only about functionality, but also
                about clarity, maintainability, and a seamless user experience.
              </p>

              <p>
                I work across the frontend and backend, combining modern
                JavaScript technologies to build responsive, reliable, and
                practical web applications.
              </p>

              <p>
                I believe every project is an opportunity to learn, solve
                problems, and create something meaningful.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="rounded-2xl border border-purple-400/20 bg-gradient-to-br from-[#30264d] to-[#171529] p-8">
            <h3 className="text-xl font-semibold text-white">
              What I Focus On
            </h3>

            <div className="mt-7 space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">💻</span>
                <div>
                  <h4 className="font-semibold text-white">
                    Frontend Development
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Creating responsive and intuitive user interfaces.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">⚙️</span>
                <div>
                  <h4 className="font-semibold text-white">
                    Backend Development
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Building application logic and RESTful APIs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🗄️</span>
                <div>
                  <h4 className="font-semibold text-white">
                    Database Management
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Designing structured and efficient databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
