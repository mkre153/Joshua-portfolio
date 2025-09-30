'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DetailedProject } from '@/lib/projectsData';
import ProjectGallery from './ProjectGallery';
import ProjectProcess from './ProjectProcess';
import ProjectNavigation from './ProjectNavigation';

interface ProjectDetailProps {
  project: DetailedProject;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      {/* Back to Projects Link */}
      <motion.div
        className="max-w-6xl mx-auto px-6 pt-24 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity"
          style={{
            color: 'var(--color-primary)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.color}, oklch(from ${project.color} calc(l * 0.8) c calc(h + 30)))`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Image Placeholder - will show gradient until real images added */}
          <div className="relative aspect-[16/9] flex items-center justify-center">
            <span
              className="font-bold"
              style={{
                fontSize: 'var(--font-size-display)',
                color: 'white',
                opacity: 0.3,
              }}
            >
              {project.title.split(' ').map(word => word[0]).join('')}
            </span>
          </div>
        </motion.div>

        {/* Project Title & Meta */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span
              className="font-semibold"
              style={{
                color: 'var(--color-primary)',
                fontSize: 'var(--font-size-base)',
              }}
            >
              {project.category}
            </span>
            <span
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-sm)',
              }}
            >
              •
            </span>
            <span
              className="text-muted"
              style={{ fontSize: 'var(--font-size-base)' }}
            >
              {project.year}
            </span>
            {project.overview.duration && (
              <>
                <span
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--font-size-sm)',
                  }}
                >
                  •
                </span>
                <span
                  className="text-muted"
                  style={{ fontSize: 'var(--font-size-base)' }}
                >
                  {project.overview.duration}
                </span>
              </>
            )}
          </div>

          <h1
            className="font-bold mb-4"
            style={{ fontSize: 'var(--font-size-display)' }}
          >
            {project.title}
          </h1>

          <p
            className="text-muted max-w-3xl"
            style={{
              fontSize: 'var(--font-size-lg)',
              lineHeight: 'var(--line-height-relaxed)',
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full"
                style={{
                  background: 'var(--color-surface)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-text-secondary)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Overview Section */}
      <section className="py-16 px-6" style={{ background: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-bold mb-4"
              style={{ fontSize: 'var(--font-size-2xl)' }}
            >
              Project Overview
            </h2>
            <div
              style={{
                width: '60px',
                height: '4px',
                background: 'var(--color-primary)',
                borderRadius: '2px',
                marginBottom: 'var(--space-xl)',
              }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Problem & Solution */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-semibold mb-3"
                  style={{ fontSize: 'var(--font-size-xl)' }}
                >
                  The Challenge
                </h3>
                <p
                  className="text-foreground"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    lineHeight: 'var(--line-height-relaxed)',
                  }}
                >
                  {project.overview.problem}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-semibold mb-3"
                  style={{ fontSize: 'var(--font-size-xl)' }}
                >
                  The Solution
                </h3>
                <p
                  className="text-foreground"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    lineHeight: 'var(--line-height-relaxed)',
                  }}
                >
                  {project.overview.solution}
                </p>
              </motion.div>
            </div>

            {/* Role & Deliverables */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-semibold mb-3"
                  style={{ fontSize: 'var(--font-size-xl)' }}
                >
                  My Role
                </h3>
                <p
                  className="text-foreground"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    lineHeight: 'var(--line-height-relaxed)',
                  }}
                >
                  {project.overview.role}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-semibold mb-3"
                  style={{ fontSize: 'var(--font-size-xl)' }}
                >
                  Deliverables
                </h3>
                <ul className="space-y-2">
                  {project.overview.deliverables.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      style={{
                        fontSize: 'var(--font-size-base)',
                        lineHeight: 'var(--line-height-relaxed)',
                      }}
                    >
                      <span style={{ color: 'var(--color-primary)' }}>→</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <ProjectProcess process={project.process} />

      {/* Final Work Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-bold mb-4"
              style={{ fontSize: 'var(--font-size-2xl)' }}
            >
              Final Work
            </h2>
            <div
              style={{
                width: '60px',
                height: '4px',
                background: 'var(--color-primary)',
                borderRadius: '2px',
              }}
            />
          </motion.div>

          <ProjectGallery images={project.gallery} projectColor={project.color} />
        </div>
      </section>

      {/* Outcome Section */}
      {project.outcome && (
        <section className="py-16 px-6" style={{ background: 'var(--color-surface)' }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-bold mb-4"
                style={{ fontSize: 'var(--font-size-2xl)' }}
              >
                Outcome & Impact
              </h2>
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  background: 'var(--color-primary)',
                  borderRadius: '2px',
                  marginBottom: 'var(--space-xl)',
                }}
              />

              <p
                className="text-foreground mb-12 max-w-3xl"
                style={{
                  fontSize: 'var(--font-size-lg)',
                  lineHeight: 'var(--line-height-relaxed)',
                }}
              >
                {project.outcome.description}
              </p>

              {project.outcome.metrics && (
                <div className="grid md:grid-cols-3 gap-6">
                  {project.outcome.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="p-6 rounded-lg text-center"
                      style={{
                        background: 'var(--color-bg)',
                        border: '2px solid var(--color-primary)',
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="font-bold mb-2"
                        style={{
                          fontSize: 'var(--font-size-2xl)',
                          color: 'var(--color-primary)',
                        }}
                      >
                        {metric.value}
                      </div>
                      <div
                        className="text-muted"
                        style={{ fontSize: 'var(--font-size-base)' }}
                      >
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation to Other Projects */}
      <ProjectNavigation
        nextProjectSlug={project.nextProjectSlug}
        prevProjectSlug={project.prevProjectSlug}
      />
    </div>
  );
}