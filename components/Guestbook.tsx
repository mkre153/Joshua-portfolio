'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

export default function Guestbook() {
  // Sample initial entries
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: 'Sarah Chen',
      message: 'Amazing portfolio! Your design work is truly inspiring. Love the attention to detail.',
      timestamp: new Date('2024-01-15T10:30:00'),
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      message: 'The typography choices are perfect. Can\'t wait to see more of your projects!',
      timestamp: new Date('2024-01-18T14:20:00'),
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      message: 'Your brand identity work is exceptional. Would love to collaborate sometime!',
      timestamp: new Date('2024-01-22T09:15:00'),
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Create new entry
    const newEntry: GuestbookEntry = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      timestamp: new Date(),
    };

    // Add to entries (at the beginning)
    setTimeout(() => {
      setEntries([newEntry, ...entries]);
      setFormData({ name: '', message: '' });
      setStatus('idle');
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section
      id="guestbook"
      className="py-24 px-6"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-4xl mx-auto">
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
            Guestbook
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
            className="text-muted mt-6"
            style={{ fontSize: 'var(--font-size-base)' }}
          >
            Leave a message and say hello! I'd love to hear from you.
          </p>
        </motion.div>

        {/* Guestbook Form */}
        <motion.div
          className="mb-12 p-6 rounded-2xl"
          style={{
            background: 'var(--color-bg)',
            border: '2px solid var(--color-primary)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="guestbook-name"
                className="block mb-2 font-semibold"
                style={{ fontSize: 'var(--font-size-sm)' }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="guestbook-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg transition-all duration-300"
                style={{
                  background: 'var(--color-surface)',
                  border: '2px solid var(--color-text-secondary)',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-text)',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-text-secondary)'}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="guestbook-message"
                className="block mb-2 font-semibold"
                style={{ fontSize: 'var(--font-size-sm)' }}
              >
                Message
              </label>
              <textarea
                id="guestbook-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg transition-all duration-300 resize-none"
                style={{
                  background: 'var(--color-surface)',
                  border: '2px solid var(--color-text-secondary)',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-text)',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-text-secondary)'}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-6 py-3 rounded-lg font-semibold cursor-pointer"
              style={{
                background: status === 'submitting' ? 'var(--color-text-secondary)' : 'var(--color-primary)',
                color: 'white',
                fontSize: 'var(--font-size-base)',
              }}
              whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
              whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
              transition={{ duration: 0.2 }}
            >
              {status === 'submitting' ? 'Signing...' : 'Sign Guestbook'}
            </motion.button>
          </form>
        </motion.div>

        {/* Entries List */}
        <div className="space-y-4">
          <AnimatePresence>
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                className="p-6 rounded-lg"
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-text-secondary)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  y: -2,
                  borderColor: 'var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                {/* Header: Name + Timestamp */}
                <div className="flex justify-between items-center mb-3">
                  <h3
                    className="font-semibold"
                    style={{ fontSize: 'var(--font-size-base)' }}
                  >
                    {entry.name}
                  </h3>
                  <span
                    className="text-muted"
                    style={{ fontSize: 'var(--font-size-xs)' }}
                  >
                    {formatDate(entry.timestamp)}
                  </span>
                </div>

                {/* Message */}
                <p
                  className="text-foreground"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    lineHeight: 'var(--line-height-relaxed)',
                  }}
                >
                  {entry.message}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {entries.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-muted"
              style={{ fontSize: 'var(--font-size-lg)' }}
            >
              No entries yet. Be the first to sign!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}