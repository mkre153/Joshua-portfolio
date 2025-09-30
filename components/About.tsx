'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'Brand Identity',
    'Editorial Design',
    'Typography',
    'Digital Design',
    'Art Direction',
    'Visual Systems',
    'Print Design',
    'User Experience',
    'Motion Graphics',
  ];

  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: 'var(--color-bg)' }}
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
            About Me
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
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                border: '4px solid var(--color-surface)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Placeholder for actual image */}
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="font-bold"
                  style={{
                    fontSize: 'var(--font-size-display)',
                    color: 'white',
                    opacity: 0.3,
                  }}
                >
                  JK
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Bio - Paragraph 1 */}
            <motion.p
              className="text-foreground"
              style={{
                fontSize: 'var(--font-size-base)',
                lineHeight: 'var(--line-height-relaxed)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a graphic designer passionate about creating visual experiences that
              resonate with audiences. With a keen eye for detail and a love for
              typography, I craft designs that blend aesthetic beauty with strategic
              purpose.
            </motion.p>

            {/* Bio - Paragraph 2 */}
            <motion.p
              className="text-foreground"
              style={{
                fontSize: 'var(--font-size-base)',
                lineHeight: 'var(--line-height-relaxed)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My work spans brand identity, editorial design, and digital experiences.
              I believe great design tells stories, solves problems, and creates
              meaningful connections between brands and their audiences.
            </motion.p>

            {/* Bio - Paragraph 3 */}
            <motion.p
              className="text-foreground"
              style={{
                fontSize: 'var(--font-size-base)',
                lineHeight: 'var(--line-height-relaxed)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              When I'm not designing, you'll find me exploring art galleries, studying
              vintage typography, or experimenting with new creative techniques.
            </motion.p>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className="font-semibold mb-8 text-center"
            style={{ fontSize: 'var(--font-size-xl)' }}
          >
            Skills & Expertise
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="p-6 rounded-lg text-center cursor-default"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-text-secondary)',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--color-primary)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              >
                <span
                  className="font-semibold"
                  style={{ fontSize: 'var(--font-size-base)' }}
                >
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Philosophy */}
        <motion.div
          className="mt-20 p-8 rounded-2xl text-center max-w-3xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, oklch(from var(--color-primary) l c h / 0.1), oklch(from var(--color-secondary) l c h / 0.1))',
            border: '2px solid var(--color-primary)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className="font-semibold mb-4"
            style={{ fontSize: 'var(--font-size-lg)' }}
          >
            Design Philosophy
          </h3>
          <p
            className="text-foreground italic"
            style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-relaxed)',
            }}
          >
            "Every design decision should serve both form and function. Beauty without
            purpose is decoration; purpose without beauty is merely functional. Great
            design achieves both."
          </p>
        </motion.div>
      </div>
    </section>
  );
}