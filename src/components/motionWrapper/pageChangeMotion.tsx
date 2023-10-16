'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageChangeMotionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      <motion.div
        key={pathName}
        initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ opacity: 1, clipPath: 'circle(100% at 50% 50%)' }}
        exit={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border:"0.5px solid",
          borderColor:"#a0aec0",
          borderRadius:"0.5rem",
          overflow:"hidden",
          width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageChangeMotionWrapper;