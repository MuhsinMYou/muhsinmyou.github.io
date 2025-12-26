import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FluidCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation configuration
  // Increased stiffness and reduced mass for faster, snappier movement
  const springConfig = { damping: 20, stiffness: 500, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // Slower, "heavier" spring for the ambient glow
  // Adjusted to follow slightly faster but still maintain the trail effect
  const glowSpringConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(mouseX, glowSpringConfig);
  const glowY = useSpring(mouseY, glowSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Precision Dot */}
      <motion.div
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full mix-blend-difference pointer-events-none z-[100]"
      />
      
      {/* Ambient Lighting Glow */}
      <motion.div
        style={{ x: glowX, y: glowY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen opacity-60"
      />
      
      {/* Secondary Cool Glow for contrast */}
       <motion.div
        style={{ x: glowX, y: glowY, translateX: '-40%', translateY: '-40%' }}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-screen opacity-40"
      />
    </>
  );
};

export default FluidCursor;