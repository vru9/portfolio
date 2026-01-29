export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <div className="max-w-4xl mx-auto px-5 py-10">
        {/* Navigation */}
        <nav className="flex justify-center gap-8 mb-10">
          <a href="#about" className="text-[#4f46e5] font-medium hover:underline">
            About
          </a>
          <a href="#projects" className="text-[#4f46e5] font-medium hover:underline">
            Projects
          </a>
          <a href="#contact" className="text-[#4f46e5] font-medium hover:underline">
            Contact
          </a>
        </nav>

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#4f46e5] mb-2">
            Hello, I&apos;m Vruddhi 👋
          </h1>
          <p className="text-lg text-[#4b5563]">
            Aspiring Developer | Learning CI/CD & Web Development
          </p>
        </header>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-[#111827] mb-4 text-center">
            About Me
          </h2>
          <p className="text-lg text-[#4b5563] text-center">
            I am learning how to build and deploy websites using GitHub and Vercel.
            This portfolio is part of my CI/CD learning journey.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-[#111827] mb-6 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#111827] mb-2">
                Portfolio Website
              </h3>
              <p className="text-[#4b5563] mb-4">
                A personal portfolio built using Next.js and Tailwind CSS, deployed with
                GitHub + Vercel CI/CD pipeline.
              </p>
              <a href="#" className="text-[#4f46e5] font-medium hover:underline">
                View Project
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#111827] mb-2">
                Upcoming Project
              </h3>
              <p className="text-[#4b5563] mb-4">
                More projects coming soon as I continue learning and building 🚀
              </p>
              <span className="text-[#9ca3af] font-medium">Coming Soon</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">Contact</h2>
          <p className="text-lg text-[#4b5563]">
            Email: your-email@example.com
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-6 border-t border-[#e5e7eb] text-center">
          <p className="text-[#6b7280] mb-3">© 2026 Vruddhi</p>
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/vru9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4f46e5] font-medium hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vruddhi-mule-4a65612b5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4f46e5] font-medium hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
