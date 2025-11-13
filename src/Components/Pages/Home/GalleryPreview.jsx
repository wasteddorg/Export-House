import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        name: 'The Luxe Polo',
        brand: 'Elegance Knitwear',
        imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Women’s Summer Dress',
        brand: 'Chic Woven',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1673356302031-86c27e061153?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        name: 'Denim Comfort Jeans',
        brand: 'Global Denim',
        imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        name: 'Kids Graphic Tee',
        brand: 'Playful Cotton',
        imageUrl: 'https://images.unsplash.com/photo-1759572095329-1dcf9522762b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 5,
        name: 'Winter Hoodies',
        brand: 'Cozy Wear',
        imageUrl: 'https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        name: 'Formal Shirt Line',
        brand: 'Executive Finish',
        imageUrl: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

const GalleryPreview = () => {
    return (
        <section className="bg-white text-slate-900 py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
                        — Best Collections
                    </p>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                        A Glimpse of Our Garment <span className="text-blue-600">Masterpieces</span>
                    </h2>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                >
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}

                            className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/5] md:aspect-[3/4]"
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                            />

                            {/* Black Hover Overlay (Smooth Opacity) */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-70"></div>

                            {/* Content Block (Instant Appearance on Hover) */}
                            <div className="absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                <div className="text-white">
                                    <p className="text-xs font-medium uppercase tracking-widest opacity-80 mb-1">
                                        {item.brand}
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                        {item.name}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 lg:mt-16"
                >
                    <a
                        href="/portfolio"
                        className="inline-flex items-center px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.03]"
                    >
                        View More Collections
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

export default GalleryPreview;