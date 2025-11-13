import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const socialLinks = [
        { name: "Facebook", icon: <FaFacebookF />, url: "#" },
        { name: "Twitter", icon: <FaTwitter />, url: "#" },
        { name: "Instagram", icon: <FaInstagram />, url: "#" },
        { name: "LinkedIn", icon: <FaLinkedinIn />, url: "#" },
    ];

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 10) setScrolled(true);
            else setScrolled(false);

            if (currentScrollY > lastScrollY && currentScrollY > 100) setIsVisible(false);
            else if (currentScrollY < lastScrollY) setIsVisible(true);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                } ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-xl py-2" : "bg-white py-2 shadow-md"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="pt-5">
                        <img
                            className="w-[110px] md:w-[120px]"
                            src="https://i.ibb.co.com/m5Nv69bJ/download-21.png"
                            alt="Logo"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-2">
                            {menuItems.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    end
                                    className={({ isActive }) =>
                                        `relative text-base font-semibold px-4 py-2 transition-colors duration-300 group ${isActive
                                            ? "text-blue-600"
                                            : "text-gray-600 hover:text-blue-500"
                                        }`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-in-out transform -translate-x-1/2 ${window.location.pathname === item.path
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="hidden md:flex items-center space-x-3">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 border-2 border-transparent hover:border-blue-500 shadow-sm hover:shadow-lg"
                        >
                            <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
                                {isMenuOpen ? (
                                    <FaTimes className="text-2xl text-blue-600" />
                                ) : (
                                    <CiMenuFries className="text-2xl" />
                                )}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100 pt-2" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <div className="px-2 pt-2 pb-4 space-y-2 rounded-xl shadow-2xl bg-white border border-gray-100">
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                end
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 hover:translate-x-1 ${isActive
                                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600 shadow-sm"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        {/* Mobile Social Links */}
                        <div className="flex justify-center space-x-4 pt-4 mt-4 border-t border-gray-200">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                    aria-label={social.name}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
