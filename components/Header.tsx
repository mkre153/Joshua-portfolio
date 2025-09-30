'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Guestbook', href: '#guestbook' },
    { name: 'Contact', href: '#contact' },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Clear active if at top
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 backdrop-blur-sm"
      style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-text-secondary)',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link href="/">
            <motion.div
              className="font-bold cursor-pointer"
              style={{ fontSize: 'var(--font-size-lg)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Joshua Kwak
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link href={link.href}>
                    <motion.span
                      className="cursor-pointer relative"
                      style={{
                        fontSize: 'var(--font-size-base)',
                        color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                        fontWeight: isActive ? '600' : '400',
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5"
                          style={{ background: 'var(--color-primary)' }}
                          layoutId="activeSection"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-0.5"
              style={{ background: 'var(--color-text)' }}
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5"
              style={{ background: 'var(--color-text)' }}
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5"
              style={{ background: 'var(--color-text)' }}
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="pt-4 pb-2 space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.span
                      className="block cursor-pointer"
                      style={{
                        fontSize: 'var(--font-size-base)',
                        color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                        fontWeight: isActive ? '600' : '400',
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
}