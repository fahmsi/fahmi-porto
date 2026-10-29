export default function HomeFooter() {
  return (
    <footer className="py-16">
      <div className="max-w-article mx-auto px-6 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-x-6 text-sm text-editorial-secondary">
          <a
            href="https://linkedin.com/in/fahmimuhammadalhafizh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-editorial-accent transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-editorial-border">·</span>
          <a
            href="mailto:work.fahmialhafizh@gmail.com"
            className="hover:text-editorial-accent transition-colors"
          >
            Email
          </a>
          <span className="text-editorial-border">·</span>
          <a
            href="/resume/fahmi-muhammad-al-hafizh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-editorial-accent transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
