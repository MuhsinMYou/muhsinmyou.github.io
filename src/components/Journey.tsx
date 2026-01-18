import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../constants';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-sm text-secondary tracking-widest uppercase mb-2">Professional Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400">Journey</span></h3>
        </div>

        <div className="relative">
          {/* Vertical Glass Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 backdrop-blur-sm border-l border-r border-white/5 transform md:-translate-x-1/2 rounded-full" />

          <div className="space-y-16">
            {TIMELINE.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ item: typeof TIMELINE[0]; index: number }> = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} md:justify-between items-start md:items-center w-full group`}>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="ml-20 md:ml-0 md:w-5/12 liquid-glass border border-white/5 p-8 rounded-3xl hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,107,0,0.1)]"
      >
        <div className="flex flex-wrap items-center justify-between mb-3 gap-4">
          <span className="text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">{item.year}</span>
          {item.company && <span className="text-sm text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">{item.company}</span>}
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
        <p className="text-stone-300 text-sm leading-relaxed font-light">{item.description}</p>
      </motion.div>

      {/* Center Node - Liquid Orb */}
      <div className="absolute left-[28px] md:left-1/2 w-8 h-8 rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
        <div className="w-full h-full bg-navy border border-white/20 rounded-full relative z-20 group-hover:border-primary transition-colors duration-500">
          <div className="absolute inset-1 bg-gradient-to-br from-primary to-secondary rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
        {/* Ripple */}
        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-40" />
      </div>

      {/* Empty Space for alignment on Desktop */}
      <div className="hidden md:block md:w-5/12" />

    </div>
  );
};

export default Journey;