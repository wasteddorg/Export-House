import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase } from 'lucide-react';

const WorkWithUsCTA = () => {
    return (
        <section className="bg-gray-50 py-10 lg:py-5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                    className="relative p-10 lg:p-16 rounded-[40px] lg:rounded-[60px] text-center text-white 
                                bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 
                                shadow-2xl shadow-blue-400/50 transform hover:shadow-blue-500/60 
                                transition-all duration-500"
                >

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="text-lg font-medium uppercase tracking-widest opacity-80 mb-3">
                            Let's Build Together
                        </p>
                        <h2 className="text-2xl  lg:text-4xl font-extrabold mb-6 leading-tight">
                            Ready to Elevate Your Garment Brand?
                        </h2>
                        <p className="text-xl max-w-4xl mx-auto mb-10 opacity-90 font-light">
                            Partner with **Export House BD** to streamline your production, guarantee quality, and scale your brand globally.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-blue-600 font-bold text-lg 
                                       hover:bg-gray-100 transition-colors duration-300 transform hover:scale-[1.05] shadow-lg"
                        >
                            <Mail className="w-5 h-5 mr-3" />
                            Contact Our Experts Now
                        </a>

                        <a
                            href="/portfolio"
                            className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-white text-white font-medium text-lg 
                                       hover:bg-white/20 transition-colors duration-300"
                        >
                            <Briefcase className="w-5 h-5 mr-3" />
                            View Our Recent Work
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default WorkWithUsCTA;