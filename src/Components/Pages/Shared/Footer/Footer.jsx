import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-blue-600/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    <div className="lg:col-span-1">
                        <img className='w-[120px] -mt-4' src="https://i.ibb.co.com/m5Nv69bJ/download-21.png" alt="" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Driving global garment excellence through ethical manufacturing and unparalleled quality since 2012. Your reliable partner in apparel sourcing.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/" className="hover:text-white transition duration-200">Home</a></li>
                            <li><a href="/about" className="hover:text-white transition duration-200">About Us</a></li>
                            <li><a href="/services" className="hover:text-white transition duration-200">Services</a></li>
                            <li><a href="/portfolio" className="hover:text-white transition duration-200">Portfolio</a></li>
                            <li><a href="/contact" className="hover:text-white transition duration-200">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                            Get In Touch
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500 flex-shrink-0" />
                                <span>
                                    Unit 4B, XYZ Industrial Park, <br />
                                    Dhaka, Bangladesh 1205
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                                <a href="tel:+8801700000000" className="hover:text-white transition duration-200">+880 1700 000 000</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                                <a href="mailto:info@exporthousebd.com" className="hover:text-white transition duration-200">info@exporthousebd.com</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                            Connect
                        </h4>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mb-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-200">
                                <Facebook className="w-7 h-7" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-200">
                                <Linkedin className="w-7 h-7" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-200">
                                <Instagram className="w-7 h-7" />
                            </a>
                        </div>

                        <p className="text-sm text-gray-400 italic">
                            Follow us for the latest trend insights.
                        </p>
                    </div>

                </div>

                <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Export House BD. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;