'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Email', href: 'mailto:joshua@joshuakwak.me' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Behance', href: 'https://behance.net' },
  ];

  return (
    <motion.footer
      className="w-full py-8 mt-16"
      style={{
        borderTop: '1px solid var(--color-text-secondary)',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Copyright */}
          <motion.p
            className="text-muted text-center md:text-left"
            style={{ fontSize: 'var(--font-size-sm)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            © {currentYear} Joshua Kwak. All rights reserved.
          </motion.p>

          {/* Right: Social Links */}
          <motion.ul
            className="flex gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <motion.span
                    className="text-muted cursor-pointer"
                    style={{ fontSize: 'var(--font-size-sm)' }}
                    whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Built with credit */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p
            className="text-muted"
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}