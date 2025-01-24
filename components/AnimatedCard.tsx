import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCardProps {
  numberProp: number;
  children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, numberProp }) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  // Dynamically set the image URL based on the numberProp
  useEffect(() => {
    switch (numberProp) {
      case 1:
        setImageUrl('/1Titan-cropped.svg');
        break;
      case 2:
        setImageUrl('/2Titan-cropped.svg');
        break;
      case 3:
        setImageUrl('/3Titan-cropped.svg');
        break;
      default:
        setImageUrl('/4Titan-cropped.svg'); // Default image
        break;
    }
  }, [numberProp]);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col rounded-3xl bg-white/5 backdrop-blur-xl px-6 py-10 md:py-20 md:px-12 ring-1 ring-white/10 hover:ring-white/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 w-full max-w-6xl mx-auto mb-8"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedCard;
