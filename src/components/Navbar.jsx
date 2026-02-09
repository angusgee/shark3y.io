import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'CVEs', path: '/cves' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="z-50 border-b border-dark-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="font-mono-display text-sm font-semibold tracking-wider accent-text hover:opacity-80 transition-opacity">
            shark3y.io
          </Link>

          <div className="hidden md:flex items-center gap-6 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono-display text-xs tracking-wide lowercase nav-link-underline h-full flex items-center px-1 transition-colors ${
                  location.pathname === link.path
                    ? 'text-heading nav-link-underline-active'
                    : 'text-body-muted hover:text-body'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-body-muted hover:text-heading transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-dark-border pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono-display text-xs tracking-wide lowercase transition-colors ${
                  location.pathname === link.path ? 'text-accent' : 'text-body-muted hover:text-body'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
