import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, FileText, X, Download, ExternalLink, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);
  const yImage = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const yText = useTransform(scrollY, [0, 500], [0, -100]);

  // Resume URLs
  const resumeId = "17pjw9DSRUEwOTP3Bbr351W8CKXMdVoo72HQi08Vx20M";
  const resumePreviewUrl = `https://docs.google.com/document/d/${resumeId}/preview`;
  const resumeDownloadUrl = `https://docs.google.com/document/d/${resumeId}/export?format=pdf`;

  // Text Animation Variants
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVars: Variants = {
    hidden: { y: 100, opacity: 0, rotateX: -80 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const titleText = "MUHSIN";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">

        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ scale, y: yImage }} className="w-full h-full bg-gradient-to-br from-[#2a1e16] to-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-50 mix-blend-screen"
            >
              <source src={`${import.meta.env.BASE_URL}hero-video.mp4?v=1`} type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        </div>

        {/* Content Container - Glass */}
        <motion.div
          style={{ y: yText, opacity }}
          className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-end h-full pb-12 text-center"
        >
          {/* Main Typography */}
          <div className="flex flex-col items-center space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="liquid-glass w-fit px-5 py-1.5 rounded-full mb-2 border border-secondary/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="font-sans font-bold text-secondary text-xs tracking-widest uppercase relative z-10">Hello, I am</span>
            </motion.div>

            {/* Staggered Text Reveal */}
            <motion.div
              variants={containerVars}
              initial="hidden"
              animate="visible"
              className="font-sans font-bold tracking-tighter leading-[0.9] flex flex-col items-center"
            >
              {/* First Line */}
              <div className="font-sans flex overflow-hidden text-6xl md:text-8xl lg:text-9xl text-white mb-1 relative group cursor-default">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {titleText}
                </div>
                {titleText.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVars} className="inline-block group-hover:text-white/10 transition-colors duration-500 font-sans">
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Dynamic Subtitle - Stroked Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-block border border-white/10 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent transition-all duration-300 font-sans text-xs md:text-sm tracking-widest uppercase font-bold">
                  Creative Technologist | AI Enthusiast
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-2 max-w-3xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group font-sans">
                <span className="">Crafting Digital Experiences That Matter!</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-wrap justify-center items-center gap-4 mt-8"
            >
              <motion.button
                onClick={() => setIsResumeOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-700 to-orange-400 text-white font-bold text-base rounded-full overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-none transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <FileText className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-sans">Resume</span>
              </motion.button>

              <SocialLink href="https://github.com/MuhsinMYou" icon={Github} />
              <SocialLink href="https://linkedin.com/in/muhsinponpara" icon={Linkedin} />
              <SocialLink href="https://instagram.com/muhhs.in" icon={Instagram} />

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-700 to-orange-400 text-white font-bold text-base rounded-full overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-none transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-sans">Connect Me</span>
              </motion.a>
            </motion.div>
          </div>

        </motion.div>

      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <>
            {ReactDOM.createPortal(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
                onClick={() => setIsResumeOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 20 }}
                  className="w-full max-w-5xl h-[85vh] bg-[#1a1a1a] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#0a0a0a]">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-orange-500" />
                      My Resume
                    </h3>
                    <div className="flex items-center gap-3">
                      <a
                        href={resumeDownloadUrl}
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-colors border border-white/5"
                      >
                        <Download className="w-4 h-4" /> Download PDF
                      </a>
                      <a
                        href={resumePreviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-colors border border-white/5"
                      >
                        <ExternalLink className="w-4 h-4" /> Open New Window
                      </a>
                      <button
                        onClick={() => setIsResumeOpen(false)}
                        className="p-2 hover:bg-white/10 rounded-lg text-white/50 hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Viewer */}
                  <div className="flex-1 bg-[#2a2a2a] relative">
                    <iframe
                      src={resumePreviewUrl}
                      className="w-full h-full border-none"
                      title="Resume Preview"
                      loading="lazy"
                    />

                    {/* Mobile Download Fallback */}
                    <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 w-max">
                      <a
                        href={resumeDownloadUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg"
                      >
                        <Download className="w-4 h-4" /> Download PDF
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>,
              document.body
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string, icon: React.ElementType }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="liquid-glass p-4 rounded-full hover:bg-white/10 hover:text-primary transition-all duration-300 group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
  </a>
);

export default Hero;