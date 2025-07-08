import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
    {
        question: "What should I include in my personal statement?",
        answer: "Lorem ipsum dolor sit amet consecte tur adipiscing elit sed do eiu smod tempor incididunt ut labore.",
    },
    {
        question: "Will membership plans be charged automatically?",
        answer: "Yes, all courses are self-paced so you can learn at your convenience.",
    },
    {
        question: "Do I get a certificate after completion?",
        answer: "Absolutely! A certificate is provided after you complete each course.",
    },
    {
        question: "Can I access the course materials offline?",
        answer: "Yes, once enrolled you can download resources to access them offline.",
    },
    {
        question: "Is there a refund policy?",
        answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course.",
    },
    {
        question: "Can I talk to a mentor or instructor?",
        answer: "Yes, our premium plans include 1-on-1 mentorship sessions.",
    },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                <h1 className="text-5xl font-bold text-[#1A2C62]">Faq</h1>
                <div className="mt-4 inline-block px-10 py-3 bg-white rounded-[6px] shadow-sm">
                    <span className="text-green-500 font-bold">Home</span> /{" "}
                    <span className="font-bold text-[#1A2C62]">Faq</span>
                </div>
            </section>

            <div className="px-6 md:px-20 py-16 bg-white">
                <h2 className="text-5xl font-extrabold text-center text-[#1A2C62] mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6 max-w-5xl mx-auto">
                    {faqData.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center text-left px-6 py-4 text-[#1A2C62] font-semibold text-lg"
                            >
                                <span>{item.question}</span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-green-500" />
                                ) : (
                                    <FaChevronDown className="text-green-500" />
                                )}
                            </button>

                            <div
                                className={`px-6 text-gray-600 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 py-4' : 'max-h-0 py-0'
                                    } overflow-hidden`}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default FAQs;