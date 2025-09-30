'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  projectColor: string;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  projectColor,
}: ImageLightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: 'rgba(0, 0, 0, 0.95)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          className="absolute top-6 right-6 z-50 p-2 rounded-full"
          style={{
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
          }}
          whileHover={{
            background: 'var(--color-primary)',
            color: 'white',
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          aria-label="Close lightbox"
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
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        {/* Image Counter */}
        <motion.div
          className="absolute top-6 left-6 z-50 px-4 py-2 rounded-full"
          style={{
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: '600',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {currentIndex + 1} / {images.length}
        </motion.div>

        {/* Previous Button */}
        {images.length > 1 && (
          <motion.button
            className="absolute left-6 z-50 p-3 rounded-full"
            style={{
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
            whileHover={{
              background: 'var(--color-primary)',
              color: 'white',
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            aria-label="Previous image"
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
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <motion.button
            className="absolute right-6 z-50 p-3 rounded-full"
            style={{
              background: 'var(--color-surface)',
              color: 'var(--color-text)',
            }}
            whileHover={{
              background: 'var(--color-primary)',
              color: 'white',
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
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
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        )}

        {/* Image Container */}
        <motion.div
          className="max-w-7xl max-h-[85vh] w-full mx-6"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          key={currentIndex}
        >
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${projectColor}, oklch(from ${projectColor} calc(l * 0.8) c calc(h + 30)))`,
              boxShadow: '0 25px 100px rgba(0,0,0,0.5)',
            }}
          >
            {/* Image Placeholder - will show gradient until real images added */}
            <div className="flex items-center justify-center aspect-[16/10]">
              <div className="text-center">
                <span
                  className="font-bold block mb-2"
                  style={{
                    fontSize: 'var(--font-size-display)',
                    color: 'white',
                    opacity: 0.4,
                  }}
                >
                  {currentIndex + 1}
                </span>
                <span
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'white',
                    opacity: 0.6,
                  }}
                >
                  Image placeholder
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            fontSize: 'var(--font-size-xs)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Press ESC to close • Use ← → arrows to navigate
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}