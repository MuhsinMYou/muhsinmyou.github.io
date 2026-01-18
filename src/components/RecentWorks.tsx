import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { MAIN_WORKS } from '../constants';
import { X, Maximize2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecentWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Mouse movement for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPct = (clientX / innerWidth) - 0.5;
    const yPct = (clientY / innerHeight) - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  return (
    <section
      id="recentworks"
      ref={containerRef}
      className="relative min-h-[150vh] w-full overflow-hidden bg-transparent py-20"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none" />

      <div className="text-center relative z-20 mb-12 pointer-events-none">
        <h2 className="text-sm text-secondary tracking-widest uppercase mb-2">Selected Works</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400">Works</span>
        </h3>
      </div>

      <div className="relative w-full h-[100vh] max-w-7xl mx-auto">
        {MAIN_WORKS.map((img, index) => (
          <DraggableWork
            key={index}
            img={img}
            index={index}
            containerRef={containerRef}
            onExpand={setSelectedImage}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>

      <div className="flex justify-center mt-32 relative z-30">
        <button
          onClick={() => navigate('/all-works')}
          className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg group"
        >
          View All Works
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {ReactDOM.createPortal(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.button
                  className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-10 h-10" />
                </motion.button>
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  src={selectedImage}
                  alt="Full Screen Work"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-zoom-out"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                />
              </motion.div>,
              document.body
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

interface DraggableWorkProps {
  img: string;
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
  onExpand: (img: string) => void;
  mouseX: any;
  mouseY: any;
}

const DraggableWork: React.FC<DraggableWorkProps> = ({ img, index, containerRef, onExpand, mouseX, mouseY }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scattered positions
  const positions = [
    { top: '10%', left: '15%', rotate: -5 },
    { top: '15%', left: '70%', rotate: 5 },
    { top: '35%', left: '30%', rotate: -3 },
    { top: '45%', left: '60%', rotate: 4 },
    { top: '65%', left: '20%', rotate: -6 },
    { top: '75%', left: '55%', rotate: 3 },
    { top: '20%', left: '45%', rotate: 2 },
    { top: '55%', left: '10%', rotate: -4 },
    { top: '30%', left: '80%', rotate: 6 },
    { top: '80%', left: '80%', rotate: -2 },
    { top: '50%', left: '40%', rotate: 5 },
    { top: '5%', left: '50%', rotate: -3 },
    { top: '85%', left: '10%', rotate: 4 },
    { top: '40%', left: '5%', rotate: -5 },
    { top: '70%', left: '35%', rotate: 2 },
  ];
  const pos = positions[index % positions.length];

  // Parallax
  const depth = 20 + (index % 5) * 10;
  const x = useTransform(mouseX, [-0.5, 0.5], [-depth, depth]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-depth, depth]);
  const physics = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(x, physics);
  const smoothY = useSpring(y, physics);

  const handleMouseEnter = () => {
    setIsHovered(true);
    timeoutRef.current = setTimeout(() => {
      onExpand(img);
    }, 1500);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      dragMomentum={true}
      style={{
        top: pos.top,
        left: pos.left,
        x: smoothX,
        y: smoothY,
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: pos.rotate }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, zIndex: 50, rotate: 0, transition: { duration: 0.3 } }}
      whileDrag={{ scale: 1.15, zIndex: 100, cursor: 'grabbing' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute w-48 md:w-64 cursor-grab touch-none"
    >
      <div className={`relative rounded-xl overflow-hidden shadow-2xl border-2 transition-colors duration-300 ${isHovered ? 'border-primary' : 'border-white/10'
        } bg-charcoal group`}>

        {isHovered && (
          <div className="absolute top-0 left-0 h-1 bg-primary z-20 w-full animate-grow-width origin-left" style={{ animationDuration: '1.5s' }} />
        )}

        <img
          src={img}
          alt={`Work ${index}`}
          className="w-full h-auto object-cover pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex items-center gap-2 text-white text-xs font-bold">
            <Maximize2 className="w-3 h-3" />
            <span>Hold to Expand</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentWorks;
