'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Graphic Designer';

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // 100ms per character

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `linear-gradient(135deg,
          var(--color-bg) 0%,
          oklch(from var(--color-primary) l c h / 0.05) 100%)`,
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Name - Large animated entrance */}
        <motion.h1
          className="font-bold mb-4"
          style={{
            fontSize: 'var(--font-size-display)',
            lineHeight: 'var(--line-height-tight)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          Joshua Kwak
        </motion.h1>

        {/* Title with typewriter effect */}
        <motion.div
          className="mb-6"
          style={{ fontSize: 'var(--font-size-2xl)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span style={{ color: 'var(--color-primary)' }}>
            {displayedText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          >
            |
          </motion.span>
        </motion.div>

        {/* Tagline/Bio */}
        <motion.p
          className="text-muted max-w-2xl mx-auto mb-12"
          style={{
            fontSize: 'var(--font-size-lg)',
            lineHeight: 'var(--line-height-relaxed)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          Creating visual experiences that blend aesthetics with purposeful design.
          Specializing in brand identity, editorial design, and digital storytelling.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-lg font-semibold cursor-pointer"
            style={{
              background: 'var(--color-primary)',
              color: 'white',
              fontSize: 'var(--font-size-base)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold cursor-pointer"
            style={{
              background: 'var(--color-surface)',
              border: '2px solid var(--color-primary)',
              color: 'var(--color-primary)',
              fontSize: 'var(--font-size-base)',
            }}
            whileHover={{
              scale: 1.05,
              background: 'var(--color-primary)',
              color: 'white',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator - Infinite bounce animation */}
      <motion.div
        className="absolute bottom-8 left-1/2"
        style={{ transform: 'translateX(-50%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 3.0 },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-muted text-sm"
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            Scroll to explore
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--color-primary)' }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}