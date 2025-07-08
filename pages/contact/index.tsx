import BlueHover from '@/components/Buttons/BlueHoverBtn';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <section style={{ backgroundImage: "url('/contact-top.png')" }} className="bg-cover bg-center text-center py-32 relative">
                <h1 className="text-5xl font-bold text-[#1A2C62]">Get In Touch</h1>
                <div className="mt-4 inline-block px-10 py-3 bg-white rounded-[6px] shadow-sm">
                    <span className="text-green-500 font-bold">Home</span> / <span className="font-bold text-[#1A2C62]">Contact</span>
                </div>
            </section>

            <section className="bg-white py-24 px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div className="flex flex-col items-center space-y-3">
                        <FaMapMarkerAlt className="text-green-500 text-3xl" />
                        <h3 className="text-2xl font-extrabold text-[#1A2C62]">Our Location</h3>
                        <p className="font-bold text-gray-600">3481 Melrose Place, Beverly Hills, CA 90210</p>
                    </div>
                    <div className="flex flex-col items-center space-y-3 border-t border-b border-gray-200 md:border-t-0 md:border-b-0 md:border-l md:border-r px-6 py-8 md:py-0">
                        <FaPhoneAlt className="text-green-500 text-3xl" />
                        <h3 className="text-2xl font-extrabold text-[#1A2C62]">Telephone</h3>
                        <p className="font-bold text-gray-600">(+1) 517 397 7100</p>
                        <p className="font-bold text-gray-600">(+1) 411 315 8138</p>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                        <FaEnvelope className="text-green-500 text-3xl" />
                        <h3 className="text-2xl font-extrabold text-[#1A2C62]">Send Email</h3>
                        <p className="font-bold text-gray-600">info@example.com</p>
                        <p className="font-bold text-gray-600">admin@example.com</p>
                    </div>
                </div>
            </section>

            <section className="bg-white pb-16 px-6 md:px-20">
                <h2 className="text-5xl font-extrabold text-center text-[#1A2C62] mb-10">Send your message.</h2>
                <form className="max-w-4xl mx-auto space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[#1A2C62] font-bold mb-2">Name</label>
                            <input type="text" className="w-full p-4 bg-gray-100 rounded outline-none" />
                        </div>
                        <div>
                            <label className="block text-[#1A2C62] font-bold mb-2">Your Email</label>
                            <input type="email" className="w-full p-4 bg-gray-100 rounded outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[#1A2C62] font-bold mb-2">Your Subject</label>
                        <input type="text" className="w-full p-4 bg-gray-100 rounded outline-none" />
                    </div>
                    <div>
                        <label className="block text-[#1A2C62] font-bold mb-2">Your Message</label>
                        <textarea className="w-full p-4 bg-gray-100 rounded outline-none h-40 resize-none" />
                    </div>
                    <div className="text-center">
                        <BlueHover text='Send Message' />
                    </div>
                </form>
            </section>
        </motion.div>
    );
};

export default Contact;