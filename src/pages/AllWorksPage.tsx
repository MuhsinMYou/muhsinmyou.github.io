import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ALL_WORKS } from '../constants';
import { X, Maximize2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllWorksPage: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const navigate = useNavigate();

    return (
        <div className="bg-navy min-h-screen text-white">
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-navy/80 backdrop-blur-md">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-stone-400 hover:text-primary transition-colors uppercase text-xs tracking-widest"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
                <div className="text-xl font-bold">MUHSIN</div>
            </nav>

            <section ref={targetRef} className="relative h-[600vh]">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                    <div className="absolute top-20 left-0 right-0 z-20 text-center pointer-events-none">
                        <h2 className="text-sm text-secondary tracking-widest uppercase mb-2">Complete Archive</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">All <span className="text-primary text-glow">Works</span></h3>
                        <p className="text-stone-400 text-sm mt-2 opacity-80">Scroll to browse the full collection</p>
                    </div>

                    <motion.div
                        style={{ x }}
                        className="grid grid-rows-3 grid-flow-col gap-4 px-24 items-center w-max h-[70vh] auto-cols-[300px] will-change-transform"
                    >
                        {ALL_WORKS.map((img, index) => (
                            <GalleryItem
                                key={index}
                                img={img}
                                index={index}
                                onExpand={setSelectedImage}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
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
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const GalleryItem = React.memo(({ img, index, onExpand }: { img: string, index: number, onExpand: (img: string) => void }) => {
    const { xOffset, yOffset, rotate, zIndex } = React.useMemo(() => {
        return {
            xOffset: (index % 3 - 1) * 20,
            yOffset: (index % 4 - 2) * 20,
            rotate: ((index % 5) - 2) * 2,
            zIndex: 10
        };
    }, [index]);

    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
            className="relative w-full h-[220px] flex items-center justify-center"
            style={{
                x: xOffset,
                y: yOffset,
                rotate: rotate,
                zIndex: isHovered ? 50 : zIndex
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1, zIndex: 100, rotate: 0, transition: { duration: 0.2 } }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 transition-colors duration-300 ${isHovered ? 'border-primary' : 'border-white/10'} bg-charcoal group`}>
                {isHovered && (
                    <div className="absolute top-0 left-0 h-1 bg-primary z-20 w-full animate-grow-width origin-left" style={{ animationDuration: '1.5s' }} />
                )}

                <img
                    src={img}
                    alt={`Gallery ${index}`}
                    className="w-full h-full object-cover pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
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
    )
});

export default AllWorksPage;
