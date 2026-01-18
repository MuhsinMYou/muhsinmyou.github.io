import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { EXPERTISE } from '../constants';
import { ExpertiseItem } from '../types';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="relative py-20 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="mb-16 relative z-10">
        <h2 className="text-sm text-secondary tracking-widest uppercase mb-2">My Services</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400">Expertise</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {EXPERTISE.map((item, index) => (
          <ExpertiseCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

const ExpertiseCard: React.FC<{ item: ExpertiseItem; index: number }> = ({ item, index }) => {
  const Icon = item.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const getGradient = (index: number) => {
    switch (index) {
      case 0: return "from-orange-900/20 to-transparent";
      case 1: return "from-amber-900/20 to-transparent";
      case 2: return "from-orange-950/30 to-transparent";
      case 3: return "from-stone-900/20 to-transparent";
      default: return "from-white/5 to-transparent";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      className={`group p-8 rounded-3xl border border-white/10 relative overflow-hidden bg-gradient-to-br ${getGradient(index)} backdrop-blur-xl transition-colors duration-500`}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 40%
            )
          `,
        }}
      />

      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <Icon className="w-7 h-7" />
        </div>

        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
        <p className="text-stone-300 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default Expertise;