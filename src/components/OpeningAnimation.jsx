import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OpeningAnimation = ({ onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Animation dure environ 4 secondes puis disparaît
    const timer = setTimeout(() => {
      setIsPlaying(false);
      setTimeout(() => onComplete(), 800); // Délai pour la transition de sortie
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-tempo-light"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onEnded={() => {
                setIsPlaying(false);
                setTimeout(() => onComplete(), 800);
              }}
              onError={(e) => {
                console.error('Video failed to load:', e);
                // Si la vidéo échoue, passer directement au contenu
                setIsPlaying(false);
                setTimeout(() => onComplete(), 100);
              }}
            >
              <source src="/assets/logo-animation.mp4" type="video/mp4" />
              <source src="/assets/logo-animation.mov" type="video/quicktime" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;
