const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <a href="#" className="font-display text-xl font-bold text-foreground">
            Siddik<span className="text-gradient">.</span>
          </a>
          <p className="mt-1 text-sm text-muted-foreground">UI/UX Designer</p>
        </div>

        <div className="flex gap-6">
          {["About", "Projects", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Siddik Sarker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
