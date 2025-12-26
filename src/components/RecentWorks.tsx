import React from 'react';
import { motion } from 'framer-motion';
import { RECENT_WORKS } from '../constants';
import { ExternalLink } from 'lucide-react';

const RecentWorks: React.FC = () => {
  // Duplicate the array to ensure seamless looping
  const loopItems = [...RECENT_WORKS, ...RECENT_WORKS, ...RECENT_WORKS];

  return (
    <section className="relative py-32 overflow-hidden bg-transparent">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="mb-12 text-center px-4 relative z-20">
        <h2 className="text-sm font-mono text-secondary tracking-widest uppercase mb-2">Visual Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Recent <span className="text-primary text-glow">Creations</span></h3>
      </div>

      <div className="marquee-wrapper relative z-0">
        <div className="marquee-container flex gap-6 px-6">
          {loopItems.map((img, index) => (
            <a
              href="#works"
              key={index}
              className="group relative flex-shrink-0 w-[300px] h-[200px] md:w-[400px] md:h-[260px] rounded-xl overflow-hidden liquid-glass transition-all duration-500 hover:scale-110 hover:z-30 cursor-pointer"
            >
              <img
                src={img}
                alt={`Work ${index}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center space-x-2 text-white font-bold">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
