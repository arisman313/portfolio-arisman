export default function Footer() {
  return (
    <footer className="border-t border-purple-400/10 bg-[#0d0c18] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div>
          <h3 className="text-lg font-bold text-white">
            Arisman Ismail<span className="text-purple-400">.</span>
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Fullstack JavaScript Developer
          </p>
        </div>

        <p className="text-center text-sm text-gray-500">
          © 2026 Arisman Ismail. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm text-gray-400 transition hover:text-purple-400"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
