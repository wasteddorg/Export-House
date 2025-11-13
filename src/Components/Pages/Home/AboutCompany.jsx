import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { CheckCircle } from 'lucide-react';

import companyLottie from "../../../../public/lottie/Jansma.vip Clothes Sales Man.json";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
    },
};

const missionPoints = [
    "Commitment to **Ethical Sourcing** and fair labor practices.",
    "Driven by **Customer-Centric Innovation** in design and process.",
    "Ensuring **Global Quality Standards** for every product.",
    "Pioneering **Sustainable Manufacturing** practices in Bangladesh."
];

const AboutCompany = () => {
    return (
        <section className="bg-white text-slate-800 py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true, amount: 0.2 }}
                        className="order-2 lg:order-1"
                    >
                        {/* Subtle accent */}
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-0.5 bg-blue-600 mr-3"></div>
                            <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
                                Our Mission
                            </p>
                        </div>

                        {/* Clean heading */}
                        <h1 className="text-2xl lg:text-3xl font-bold mb-8 text-slate-900 leading-tight">
                            Redefining Garment <span className="text-blue-600">Export Excellence</span> for Global Partners
                        </h1>

                        {/* Minimal border accent */}
                        <div className="relative mb-8">
                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light pl-6">
                                **Export House BD** is your trusted global apparel partner. We combine over a decade of expertise with a commitment to quality, transparency, and sustainable production from design to final delivery.
                            </p>
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
                        </div>

                        <div className="space-y-4">
                            {missionPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors duration-200" />
                                    </div>
                                    <span
                                        className="text-base lg:text-lg text-gray-700 ml-4 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: point }}
                                    ></span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        {/* Modern container - no shadows, clean borders */}
                        <div className="w-full max-w-md lg:max-w-lg rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gray-200">
                            {companyLottie ? (
                                <div style={{ height: '500px', width: '100%' }}>
                                    <Lottie
                                        animationData={companyLottie}
                                        loop={true}
                                        style={{ height: '100%', width: '100%' }}
                                    />
                                </div>
                            ) : (
                                <div className="h-[500px] flex items-center justify-center bg-gray-100 rounded-xl">
                                    <span className="text-gray-400 text-lg">Animation Loading...</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

export default AboutCompany;