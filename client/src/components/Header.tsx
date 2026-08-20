import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Sobre Nós", href: "/quem-somos" },
    { label: "CEPIs e Creches", href: "/unidades" },
    { label: "Projetos", href: "/projetos" },
    { label: "Notícias", href: "/blog" },
    { label: "Transparência", href: "/transparencia" },
    { label: "Compliance", href: "/compliance" },
    { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex min-h-20 items-center gap-x-5 gap-y-2 py-3 xl:flex-nowrap xl:gap-x-6">
        {/* Logo - Official COCRIS */}
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-3 font-bold text-lg hover:opacity-90 transition-opacity cursor-pointer">
            <img
              src="/images/logo-cocris.png"
              alt="Logo COCRIS - Associação Beneficente Coração de Cristo"
              className="h-14 w-auto max-w-[150px] object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-primary font-bold text-sm">COCRIS</span>
              <span className="text-xs text-secondary font-semibold">
                Educação Infantil
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-x-4 2xl:gap-x-6 xl:flex">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="shrink-0">
              <span className="text-foreground hover:text-primary font-semibold transition-colors duration-300 relative group whitespace-nowrap text-xs 2xl:text-sm cursor-pointer">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href="https://democonexa.casadf.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg border-2 border-primary px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground 2xl:px-4 2xl:text-sm"
          >
            Área do Colaborador
          </a>
          <Link
            href="/doacoes"
            className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 2xl:text-sm"
          >
            Fazer Doação
          </Link>
        </div>

        {/* Mobile/tablet Menu Button */}
        <button
          onClick={toggleMenu}
          className="ml-auto rounded-lg p-2 transition-colors hover:bg-muted xl:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="xl:hidden bg-muted border-t border-border">
          <div className="container py-4 space-y-3">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}>
                <span
                  className="block px-4 py-2 text-foreground hover:bg-white hover:text-primary rounded-lg transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <a
                href="https://democonexa.casadf.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-outline text-center text-sm"
              >
                Área do Colaborador
              </a>
              <Link href="/doacoes">
                <button className="w-full btn-primary text-sm">
                  Fazer Doação
                </button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
