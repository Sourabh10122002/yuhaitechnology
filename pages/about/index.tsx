import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <section
                style={{ backgroundImage: "url('/contact-top.png')" }}
                className="bg-cover bg-center text-center py-32 relative"
            >
                <h1 className="text-5xl font-bold text-[#1A2C62]">About Us</h1>
                <div className="mt-4 inline-block px-10 py-3 bg-white rounded-md shadow-sm">
                    <span className="text-green-500 font-bold">Home</span> /{" "}
                    <span className="font-bold text-[#1A2C62]">About</span>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-gray-800">
                {/* Company Overview */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <Image
                        src="https://4.imimg.com/data4/MQ/IM/VF/NSDMERP-2517684/67225board1533637403-1000x1000.jpg"
                        alt="Company Overview"
                        className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#1A2C62] mb-4">Company Overview</h2>
                        <p>
                            Established in 2017, <strong>YuHai Technology Manufacturing Supplies</strong> is a trusted Wholesale Trader of Packaging Machines,
                            Sealing Machines, Vacuum Packaging Machines, Liquid Filling Machines, and more.
                        </p>
                        <p className="mt-4">
                            We are known for fulfilling client needs with precision and upholding high-quality standards at every level.
                        </p>
                    </div>
                </div>

                {/* Why Us */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#1A2C62] mb-4">Why Us?</h2>
                        <p>
                            Our offerings have gained remarkable identification in the market, as offered with multiple attractive features.
                            We have always focused on delivering products to our clients as per the approved industry norms at cost-effective prices.
                            <br /><br /><strong>The factors which have helped us in becoming clients’ favorite are mentioned below:</strong>
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>World-class working facilities</li>
                            <li>Enriched product line</li>
                            <li>Diligent professionals</li>
                            <li>Stringent quality-centric policies</li>
                            <li>Deliveries within the promised time frame</li>
                            <li>Total customer satisfaction</li>
                            <li>Ethical business practices</li>
                        </ul>
                    </div>
                    <Image
                        src="https://5.imimg.com/data5/SELLER/Default/2023/11/359414858/OE/JX/XP/2517684/img-20231107-wa0031-1000x1000.jpg"
                        alt="Why Choose Us"
                        className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>

                {/* Vendor Base */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <img
                        src="https://5.imimg.com/data5/SELLER/Default/2023/11/359414465/LU/IX/DG/2517684/1-1000x1000.jpg"
                        alt="Vendor Base"
                        className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#1A2C62] mb-4">Our Vendor Base</h2>
                        <p>
                            We collaborate with trusted vendors to ensure top-tier products. Our procurement team rigorously evaluates each vendor based on:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Product quality</li>
                            <li>Production techniques</li>
                            <li>Financial stability</li>
                            <li>Reputation in the market</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#1A2C62] mb-4">About the Owner</h2>
                        <p>
                            Our success is guided by the leadership of <strong>Mr. Xiang Yu</strong>, whose sharp business acumen and commitment to excellence
                            have helped the company grow rapidly in a competitive market.
                        </p>
                        <p className="mt-4">
                            His strategic decisions, client-focused approach, and industry experience continue to shape the direction of our organization.
                        </p>
                    </div>
                    <Image
                        src="https://i0.wp.com/www.yuhaitechnology.com/wp-content/uploads/2023/06/James-Yu-267x352.jpg"
                        alt="Mr. Xiang - Yu"
                        className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </section>
            
        </motion.div>
    );
};

export default About;