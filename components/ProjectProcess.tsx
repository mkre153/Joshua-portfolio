'use client';

import { motion } from 'framer-motion';
import { ProjectProcessStep } from '@/lib/projectsData';

interface ProjectProcessProps {
  process: ProjectProcessStep[];
}

export default function ProjectProcess({ process }: ProjectProcessProps) {
  return (
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
            Design Process
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

        <div className="space-y-16">
          {process.map((step, stepIndex) => (
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stepIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                    style={{
                      background: 'var(--color-primary)',
                      color: 'white',
                      fontSize: 'var(--font-size-lg)',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stepIndex + 1}
                  </motion.div>
                  <h3
                    className="font-bold"
                    style={{ fontSize: 'var(--font-size-xl)' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-foreground max-w-3xl"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginLeft: '4rem',
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Step Images */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {step.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    className="relative rounded-lg overflow-hidden"
                    style={{
                      background: 'var(--color-surface)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      aspectRatio: '4/3',
                      border: '1px solid var(--color-text-secondary)',
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: imageIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -4,
                      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    }}
                  >
                    {/* Image Placeholder - will show until real images added */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <span
                          className="font-bold block mb-1"
                          style={{
                            fontSize: 'var(--font-size-xl)',
                            color: 'var(--color-text-secondary)',
                            opacity: 0.3,
                          }}
                        >
                          {stepIndex + 1}.{imageIndex + 1}
                        </span>
                        <span
                          className="text-muted"
                          style={{ fontSize: 'var(--font-size-xs)' }}
                        >
                          Process image
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider between steps (except last) */}
              {stepIndex < process.length - 1 && (
                <motion.div
                  className="mt-16"
                  style={{
                    height: '1px',
                    background: 'var(--color-text-secondary)',
                    opacity: 0.2,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}