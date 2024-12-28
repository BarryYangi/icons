'use client';
import { motion, useAnimation } from 'motion/react';
import type { Variants } from 'motion/react';

const checkVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '4px',
    originY: '20px',
    opacity: 1,
  },
  animate: {
    rotate: [-15, 15, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.5, 1],
      ease: 'easeInOut',
    },
  },
};

const ClipboardCheckIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <motion.path
          animate={controls}
          initial="normal"
          variants={checkVariants}
          d="m9 14 2 2 4-4"
        />
      </svg>
    </div>
  );
};

export { ClipboardCheckIcon };
