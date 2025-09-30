'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

interface ProjectGalleryProps {
  images: string[];
  projectColor: string;
}

export default function ProjectGallery({ images, projectColor }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden cursor-pointer group"
            style={{
              background: `linear-gradient(135deg, ${projectColor}, oklch(from ${projectColor} calc(l * 0.8) c calc(h + 30)))`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              aspectRatio: index === 0 && images.length % 2 !== 0 ? '16/9' : '4/3',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
            onClick={() => openLightbox(index)}
            className={index === 0 && images.length % 2 !== 0 ? 'md:col-span-2' : ''}
          >
            {/* Image Placeholder - will show gradient until real images added */}
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="font-bold"
                style={{
                  fontSize: 'var(--font-size-2xl)',
                  color: 'white',
                  opacity: 0.3,
                }}
              >
                {index + 1}
              </span>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(2px)',
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="font-semibold"
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'white',
                }}
              >
                Click to expand
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          projectColor={projectColor}
        />
      )}
    </>
  );
}