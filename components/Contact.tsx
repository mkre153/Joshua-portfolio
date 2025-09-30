'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err: any) {
      console.error('Error sending contact message:', err);
      setStatus('error');

      // Reset error after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'joshua@joshuakwak.me', href: 'mailto:joshua@joshuakwak.me' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/joshuakwak', href: 'https://linkedin.com' },
    { icon: '📸', label: 'Instagram', value: '@joshuakwak.design', href: 'https://instagram.com' },
    { icon: '🎨', label: 'Behance', value: 'behance.net/joshuakwak', href: 'https://behance.net' },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
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
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold"
                  style={{ fontSize: 'var(--font-size-base)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                  style={{
                    background: 'var(--color-surface)',
                    border: '2px solid var(--color-text-secondary)',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--color-text)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-text-secondary)'}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold"
                  style={{ fontSize: 'var(--font-size-base)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                  style={{
                    background: 'var(--color-surface)',
                    border: '2px solid var(--color-text-secondary)',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--color-text)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-text-secondary)'}
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold"
                  style={{ fontSize: 'var(--font-size-base)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none"
                  style={{
                    background: 'var(--color-surface)',
                    border: '2px solid var(--color-text-secondary)',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--color-text)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--color-text-secondary)'}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 rounded-lg font-semibold cursor-pointer"
                  style={{
                    background: status === 'sending' ? 'var(--color-text-secondary)' : 'var(--color-primary)',
                    color: 'white',
                    fontSize: 'var(--font-size-base)',
                  }}
                  whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' } : {}}
                  whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : status === 'error' ? 'Failed. Try Again' : 'Send Message'}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3
                className="font-semibold mb-6"
                style={{ fontSize: 'var(--font-size-xl)' }}
              >
                Other Ways to Connect
              </h3>
              <p
                className="text-muted mb-8"
                style={{
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 'var(--line-height-relaxed)',
                }}
              >
                Prefer to reach out directly? Feel free to connect with me through any of these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg cursor-pointer"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-text-secondary)',
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'var(--color-primary)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <span style={{ fontSize: 'var(--font-size-2xl)' }}>
                    {method.icon}
                  </span>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ fontSize: 'var(--font-size-base)' }}
                    >
                      {method.label}
                    </p>
                    <p
                      className="text-muted"
                      style={{ fontSize: 'var(--font-size-sm)' }}
                    >
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Note */}
            <motion.div
              className="p-6 rounded-lg"
              style={{
                background: 'linear-gradient(135deg, oklch(from var(--color-primary) l c h / 0.1), oklch(from var(--color-secondary) l c h / 0.1))',
                border: '2px solid var(--color-primary)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p
                className="font-semibold mb-2"
                style={{ fontSize: 'var(--font-size-base)' }}
              >
                Currently Available
              </p>
              <p
                className="text-muted"
                style={{ fontSize: 'var(--font-size-sm)' }}
              >
                I'm currently accepting new projects and collaborations. Let's create something great together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}