import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Premium Garments",
            subtitle: "Manufacturing Excellence",
            description: "Crafting quality apparel with precision and passion. Your trusted partner in garment manufacturing since 2005."
        },
        {
            image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Fashion Forward",
            subtitle: "Trend Setting Designs",
            description: "Stay ahead with our innovative designs and contemporary fashion trends for global markets."
        },
        {
            image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            title: "Quality Craftsmanship",
            subtitle: "Perfect Stitching Every Time",
            description: "Experience unmatched quality with our attention to detail and superior craftsmanship techniques."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background Images with Video-like Animations */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Enhanced Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center animate-videoLike"
                        style={{
                            backgroundImage: `url("${slide.image}")`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>
                </div>
            ))}

            {/* Modern Content Layout */}
            <div className="relative z-20 flex items-center h-full">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl">
                        {/* Static Star without Animation */}
                        <div className="mb-8 flex ">
                            <div className="relative inline-block">
                                <svg className="w-16 h-16 text-yellow-400 filter drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                            </div>
                        </div>

                        <div className="relative h-64 mb-12">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
                                        ? 'opacity-100 transform translate-x-0'
                                        : 'opacity-0 transform translate-x-10'
                                        }`}
                                >
                                    {/* Modern Title with Gradient Text */}
                                    <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
                                        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                                            {slide.title}
                                        </span>
                                        <br />
                                        <span className="text-xl md:text-3xl font-light text-white mt-4 block">
                                            {slide.subtitle}
                                        </span>
                                    </h1>

                                    <div className="border-l-4 border-yellow-400 pl-6 my-8">
                                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 right-10 z-20">
                <div className="text-right text-white">
                    <div className="text-sm text-white mb-2">Current Collection</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                        2025
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes videoLike {
                    0% {
                        transform: scale(1) translateX(0px) translateY(0px);
                    }
                    25% {
                        transform: scale(1.05) translateX(-10px) translateY(-5px);
                    }
                    50% {
                        transform: scale(1.03) translateX(5px) translateY(3px);
                    }
                    75% {
                        transform: scale(1.06) translateX(-8px) translateY(2px);
                    }
                    100% {
                        transform: scale(1) translateX(0px) translateY(0px);
                    }
                }

                .animate-videoLike {
                    animation: videoLike 20s ease-in-out infinite;
                    animation-delay: 1s;
                }
            `}</style>
        </div>
    );
};

export default Banner;