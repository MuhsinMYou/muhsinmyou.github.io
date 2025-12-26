import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-32 z-10">
      <div className="px-6 md:px-12 lg:px-24 mb-24">
        <h2 className="text-sm font-mono text-secondary tracking-widest uppercase mb-2">Selected Works</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Case <span className="text-primary text-glow">Studies</span></h3>
      </div>

      <div className="space-y-40">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isEven = index % 2 === 0;
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], isEven ? [5, -5] : [-5, 5]);

  return (
    <div ref={containerRef} className="relative w-full px-6 md:px-12 lg:px-24 perspective-1000">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>

        {/* Project Image - Floating Glass Container */}
        <div className="w-full lg:w-3/5 h-[400px] md:h-[500px] relative">
          <motion.div
            style={{ y, rotateX: rotate }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full rounded-3xl overflow-hidden liquid-glass-heavy p-2 group"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />

              {/* Shine Effect */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </motion.div>
        </div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/5 space-y-8"
        >
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 text-xs font-mono font-medium rounded-full bg-white/5 border border-white/10 text-secondary backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-5xl font-display font-bold text-white leading-tight">{project.title}</h3>

          <p className="text-stone-300 text-lg leading-relaxed font-light liquid-glass-heavy p-6 rounded-2xl">
            {project.description}
          </p>

          <a
            href={project.link}
            className="inline-flex items-center space-x-3 text-white px-8 py-3 rounded-full bg-white/5 border border-white/10 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="font-bold tracking-wide relative z-10 group-hover:text-black transition-colors duration-300">View Case Study</span>
            <ArrowUpRight className="w-5 h-5 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform relative z-10 group-hover:text-black" />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;