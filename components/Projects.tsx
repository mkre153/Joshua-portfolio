'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { getBasicProjects } from '@/lib/projectsData';

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  color: string;
  thumbnailImage: string;
}

export default function Projects() {
  const projects = getBasicProjects();

  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-bold mb-4"
            style={{ fontSize: 'var(--font-size-2xl)' }}
          >
            Selected Projects
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--color-primary)',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
          <p
            className="text-muted mt-6 max-w-2xl mx-auto"
            style={{ fontSize: 'var(--font-size-base)' }}
          >
            A collection of recent work spanning brand identity, editorial design, and digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'var(--color-bg)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
          transition={{ duration: 0.3 }}
        >
        {/* Project Image Placeholder */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}, oklch(from ${project.color} calc(l * 0.8) c calc(h + 30)))`,
            }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="font-bold"
              style={{
                fontSize: 'var(--font-size-2xl)',
                color: 'white',
                opacity: 0.4,
              }}
            >
              {project.title.split(' ').map(word => word[0]).join('')}
            </span>
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="font-semibold"
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'white',
              }}
            >
              View Project →
            </span>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          {/* Category & Year */}
          <div className="flex justify-between items-center mb-3">
            <span
              className="text-primary font-semibold"
              style={{ fontSize: 'var(--font-size-sm)' }}
            >
              {project.category}
            </span>
            <span
              className="text-muted"
              style={{ fontSize: 'var(--font-size-sm)' }}
            >
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-bold mb-3"
            style={{ fontSize: 'var(--font-size-xl)' }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="text-muted mb-4"
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-normal)',
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full"
                style={{
                  background: 'var(--color-bg)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-text-secondary)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
    </Link>
  );
}