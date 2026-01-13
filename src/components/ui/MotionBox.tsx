'use client';
import { motion } from 'framer-motion';
import { Box, BoxProps } from '@mui/material';

// Combine MUI Box with Framer Motion
const MotionBox = motion(Box);

export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <MotionBox
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </MotionBox>
);