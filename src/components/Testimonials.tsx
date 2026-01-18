import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <section ref={targetRef} className="h-[250vh] relative z-20">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        <div className="px-6 md:px-12 lg:px-24 mb-16">
          <h2 className="text-sm text-secondary tracking-widest uppercase mb-2">Endorsements</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Their Words <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400">About Me</span></h3>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 lg:px-24 w-max">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative w-[350px] md:w-[500px] liquid-glass-heavy p-10 rounded-3xl flex flex-col justify-between hover:border-primary/30 transition-colors duration-500"
            >
              <Quote className="text-primary w-12 h-12 mb-6 opacity-80" />
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full border-2 border-white/10 p-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <span className="text-sm text-slate-400">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="w-[10vw]" />
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;