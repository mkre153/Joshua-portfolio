'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getProjectBySlug } from '@/lib/projectsData';

interface ProjectNavigationProps {
  nextProjectSlug?: string;
  prevProjectSlug?: string;
}

export default function ProjectNavigation({
  nextProjectSlug,
  prevProjectSlug,
}: ProjectNavigationProps) {
  const nextProject = nextProjectSlug ? getProjectBySlug(nextProjectSlug) : null;
  const prevProject = prevProjectSlug ? getProjectBySlug(prevProjectSlug) : null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Previous Project */}
          {prevProject && (
            <Link href={`/projects/${prevProject.slug}`}>
              <motion.div
                className="relative p-8 rounded-2xl cursor-pointer group"
                style={{
                  background: 'var(--color-surface)',
                  border: '2px solid var(--color-text-secondary)',
                }}
                whileHover={{
                  borderColor: 'var(--color-primary)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  y: -4,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ x: -4 }}
                    transition={{ duration: 0.2 }}
                  >
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
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </motion.div>
                  <span
                    className="font-semibold"
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Previous Project
                  </span>
                </div>

                <h3
                  className="font-bold mb-2 group-hover:text-primary transition-colors"
                  style={{ fontSize: 'var(--font-size-xl)' }}
                >
                  {prevProject.title}
                </h3>

                <p
                  className="text-muted"
                  style={{ fontSize: 'var(--font-size-sm)' }}
                >
                  {prevProject.category} • {prevProject.year}
                </p>
              </motion.div>
            </Link>
          )}

          {/* Next Project */}
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`}>
              <motion.div
                className="relative p-8 rounded-2xl cursor-pointer group text-right"
                style={{
                  background: 'var(--color-surface)',
                  border: '2px solid var(--color-text-secondary)',
                }}
                whileHover={{
                  borderColor: 'var(--color-primary)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  y: -4,
                }}
                transition={{ duration: 0.3 }}
                className={!prevProject ? 'md:col-start-2' : ''}
              >
                <div className="flex items-center justify-end gap-3 mb-4">
                  <span
                    className="font-semibold"
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Next Project
                  </span>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>

                <h3
                  className="font-bold mb-2 group-hover:text-primary transition-colors"
                  style={{ fontSize: 'var(--font-size-xl)' }}
                >
                  {nextProject.title}
                </h3>

                <p
                  className="text-muted"
                  style={{ fontSize: 'var(--font-size-sm)' }}
                >
                  {nextProject.category} • {nextProject.year}
                </p>
              </motion.div>
            </Link>
          )}
        </motion.div>

        {/* Back to All Projects Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/#projects">
            <motion.button
              className="px-8 py-4 rounded-lg font-semibold"
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
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}