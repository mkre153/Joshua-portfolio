'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent, useEffect } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch entries on mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/guestbook');
      if (!response.ok) throw new Error('Failed to fetch entries');
      const data = await response.json();
      setEntries(data);
    } catch (err) {
      console.error('Error fetching guestbook entries:', err);
      setError('Failed to load guestbook entries');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit');
      }

      const newEntry = await response.json();
      setEntries([newEntry, ...entries]);
      setFormData({ name: '', message: '' });
      setStatus('idle');
    } catch (err: any) {
      console.error('Error submitting guestbook entry:', err);
      setError(err.message || 'Failed to submit entry');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
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

        {/* Error Message */}
        {error && (
          <motion.div
            className="p-4 rounded-lg mb-4"
            style={{
              background: 'oklch(from var(--color-error) l c h / 0.1)',
              border: '2px solid var(--color-error)',
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p style={{ color: 'var(--color-error)', fontSize: 'var(--font-size-sm)' }}>
              {error}
            </p>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-muted" style={{ fontSize: 'var(--font-size-base)' }}>
              Loading guestbook...
            </p>
          </div>
        )}

        {/* Entries List */}
        {!loading && (
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
                    {formatDate(entry.createdAt)}
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
        )}
      </div>
    </section>
  );
}