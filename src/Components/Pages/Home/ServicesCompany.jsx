import React from 'react';
import { motion } from 'framer-motion';
import {
    Factory,
    Award,
    Truck,
    Palette,
    ArrowRight
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const services = [
    {
        icon: Factory,
        title: "Production Excellence",
        description: "State-of-the-art manufacturing facilities with cutting-edge technology and a skilled workforce, ensuring premium quality garment production for all scales.",
        features: ["Advanced Machinery", "Flexible MOQ", "Inline QC", "Efficient Production"],
        color: "text-blue-600"
    },
    {
        icon: Award,
        title: "Global Quality Assurance",
        description: "Rigorous quality checks at every critical stage, from raw material inspection to final product auditing, ensuring absolute international standards conformity.",
        features: ["Certified Standards", "Material Testing", "Final Inspection", "Defect Prevention"],
        color: "text-emerald-600"
    },
    {
        icon: Truck,
        title: "Seamless Supply Chain",
        description: "Integrated supply chain management and worldwide logistics solutions to guarantee fast, secure, and on-time delivery to your destination ports.",
        features: ["Efficient Logistics", "Global Shipping", "Full Export Docs", "Real-time Tracking"],
        color: "text-orange-600"
    },
    {
        icon: Palette,
        title: "Creative Design & R&D",
        description: "Dedicated in-house design team providing custom pattern making, trend forecasting, and innovative product development to bring your vision to life.",
        features: ["Trend Analysis", "Custom Design", "Sampling & Fitting", "Product Development"],
        color: "text-purple-600"
    }
];

const ServicesCompany = () => {
    return (
        <section className="bg-blue-50/50 text-slate-900 py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
                        — Your Manufacturing Partner
                    </p>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Integrated Garment <span className="text-blue-600">Solutions</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        We offer a complete, end-to-end apparel manufacturing experience. Our services are designed for quality, transparency, and efficiency from **concept to cargo**.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className={`h-full bg-white border border-gray-100 rounded-3xl p-6 transition-all duration-300 transform hover:scale-[1.03] hover:border-blue-300 flex flex-col`}>

                                <div className="mb-6">
                                    <div className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center border-2 border-gray-100 transition-colors duration-300 ${service.color} group-hover:bg-blue-50`}>
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6 text-base leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6 border-t pt-4 border-gray-100">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-700 font-medium">
                                            <div className={`w-2 h-2 rounded-full mr-3 bg-blue-400 opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-2">
                                    <button className="flex items-center text-blue-600 font-semibold group/btn hover:text-blue-700 transition-colors duration-200">
                                        Explore Details
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>



            </div>
        </section>
    );
};

export default ServicesCompany;