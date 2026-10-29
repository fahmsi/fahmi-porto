export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAF8] border-t border-editorial-border/60 py-10 sm:py-14 mt-16">
      <div className="max-w-layout mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-editorial-secondary">
        <div className="flex items-center gap-4 font-medium">
          <a
            href="mailto:work.fahmialhafizh@gmail.com"
            className="hover:text-editorial-text transition-colors"
          >
            Email
          </a>
          <span className="text-editorial-border">•</span>
          <a
            href="https://linkedin.com/in/fahmimuhammadalhafizh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-editorial-text transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-editorial-border">•</span>
          <a
            href="/resume/fahmi-muhammad-al-hafizh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-editorial-text transition-colors"
          >
            Resume
          </a>
          <span className="text-editorial-border">•</span>
          <a
            href="https://instagram.com/fahmi.alhafizh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-editorial-text transition-colors"
          >
            Instagram
          </a>
        </div>

        <p className="text-editorial-muted font-mono text-xs">
          © {new Date().getFullYear()} Fahmi Muhammad Al Hafizh
        </p>
      </div>
    </footer>
  );
}
