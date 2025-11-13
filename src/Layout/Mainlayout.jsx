import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Components/Pages/Shared/Navbar/Navbar';
import Footer from '../Components/Pages/Shared/Footer/Footer';

const Mainlayout = () => {
    const location = useLocation();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(false);

    const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
        setShowProgress(scrollTop > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [location.pathname]);

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
    };

    const pageTransition = { type: 'tween', ease: 'easeOut', duration: 0.5 };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="bg-white font-sans min-h-screen text-black font-roboto overflow-x-hidden">
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: showProgress ? 1 : 0, scale: showProgress ? 1 : 0 }}
                transition={{ duration: 0.3, type: 'spring' }}
            >
                <motion.button
                    onClick={scrollToTop}
                    className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg flex items-center justify-center group"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    title="Scroll to Top"
                >
                    <svg className="w-full h-full absolute top-0 left-0 transform -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#1f2937" strokeWidth="2" className="opacity-30" />
                        <motion.circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="url(#progressGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="100"
                            strokeDashoffset={100 - scrollProgress}
                            initial={{ strokeDashoffset: 100 }}
                            animate={{ strokeDashoffset: 100 - scrollProgress }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        />
                        <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="50%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <motion.svg
                            className="w-5 h-5 text-white mb-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ y: 0 }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                        </motion.svg>
                        <span className="text-[10px] font-semibold text-white">{Math.round(scrollProgress)}%</span>
                    </div>
                </motion.button>
            </motion.div>

            <Navbar />

            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="min-h-screen"
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Mainlayout;
