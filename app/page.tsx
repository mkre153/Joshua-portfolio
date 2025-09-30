'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Guestbook from '@/components/Guestbook';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Guestbook Section */}
      <Guestbook />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}