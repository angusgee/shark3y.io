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
    <nav className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-transparent bg-clip-padding" style={{borderImage: 'linear-gradient(90deg, #06b6d4, #a855f7) 1'}}>
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-wide text-white hover-gradient-text transition-all">
            shark3y.io
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-md transition-all ${
                  location.pathname === link.path
                    ? 'text-white font-bold'
                    : 'text-gray-text font-medium hover:text-white hover:font-bold focus:text-white focus:font-bold focus-visible:font-bold active:font-bold'
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
          <div className="md:hidden mt-4 pb-2 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm transition-all ${
                  location.pathname === link.path
                    ? 'text-white font-bold'
                    : 'text-gray-text font-medium hover:text-white hover:font-bold focus:text-white focus:font-bold focus-visible:font-bold active:font-bold'
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
