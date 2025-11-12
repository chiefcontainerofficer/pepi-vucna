import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Početna' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-primary shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-black">P</span>
          </div>
          <span className="text-base sm:text-xl font-bold text-white">
            <span className="hidden sm:inline">PEPI Vučna Služba </span>
            <span className="sm:hidden">PEPI</span>
            <span className="text-primary"> 24/7</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium hover:text-primary transition ${router.pathname === link.href ? 'text-primary font-bold' : 'text-white'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile navigation */}
        <div
          className={`fixed inset-0 z-40 bg-black transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-4">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-xl font-medium hover:text-primary transition ${
                      router.pathname === link.href ? 'text-primary font-bold' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
} 