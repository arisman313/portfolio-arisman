export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#11101f] via-[#1c1735] to-[#11101f] py-24"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
          Get In Touch
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
          Have a project in mind or looking for a developer to collaborate with?
          Feel free to get in touch. I'd be happy to discuss your ideas.
        </p>

        {/* <a
          href="mailto:your-email@example.com"
          className="mt-9 inline-block rounded-lg bg-purple-600 px-8 py-3 font-medium text-white transition hover:bg-purple-500"
        >
          Send Me an Email
        </a> */}

        <a
          href="https://wa.me/6282112548104"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-lg bg-purple-600 px-8 py-3 font-medium text-white transition hover:bg-purple-500"
        >
          Hubungi via WhatsApp <span aria-hidden="true">↗</span>
        </a>

        <div className="mt-10 flex justify-center gap-8 text-sm text-gray-400">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-purple-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-purple-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
