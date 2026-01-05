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
    <nav className="z-50 bg-dark-bg border-y border-dark-border mt-12 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl tracking-wide gradient-text transition-all font-semibold">
            shark3y.io
          </Link>

          <div className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-md font-semibold text-gray transition-all nav-link-underline h-full flex items-center px-1 ${
                  location.pathname === link.path ? 'nav-link-underline-active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-text hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 border-t border-dark-border mt-0 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold text-gray-text transition-all nav-link-underline inline-block w-fit ${
                  location.pathname === link.path ? 'nav-link-underline-active' : ''
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
