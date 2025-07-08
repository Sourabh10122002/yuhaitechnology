import React, { useState } from 'react';
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import { MdMenu, MdClose } from "react-icons/md";
import BlueHover from './Buttons/BlueHoverBtn';
import { navLinks } from '@/constants/cardsData';
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import GreenHoverBtn from './Buttons/GreenHoverBtn';
import Image from 'next/image';
import logo from "@/public/logo.png"

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#1A2D62]">
            <Image src={logo} alt='' className='w-40' />
          </Link>

          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <MdClose size={30} className="text-[var(--text-color)]" />
            ) : (
              <MdMenu size={30} className="text-[var(--text-color)]" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex gap-8 relative font-bold">
            <li className='font-bold text-[#1A2D62] hover:text-[#2ECA7F] transition-colors'>
              <Link href={"/home"}>Home</Link>
            </li>
            <li className='font-bold text-[#1A2D62] hover:text-[#2ECA7F] transition-colors'>
              <Link href={"/about"}>About</Link>
            </li>
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer group">
                  <span className="font-bold text-[#1A2D62] group-hover:text-[#2ECA7F] transition-colors">
                    {link.title}
                  </span>
                  {link.submenu && (
                    activeIndex === idx ? (
                      <LiaAngleUpSolid className="text-[#1A2D62] group-hover:text-[#2ECA7F] transition-colors" />
                    ) : (
                      <LiaAngleDownSolid className="text-[#1A2D62] group-hover:text-[#2ECA7F] transition-colors" />
                    )
                  )}
                </div>

                {link.submenu && (
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-3 min-w-[200px] bg-white shadow-lg rounded-md border-t-2 border-[#2ECA7F] z-50"
                      >
                        <ul className="flex flex-col px-6 py-4 space-y-2">
                          {link.submenu.map((item, i) => (
                            <li key={i}>
                              <Link
                                href={item.href}
                                className="block py-1 text-sm font-medium text-[#1A2D62] hover:text-[#2ECA7F] transition-colors pl-4"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}

            <li className='font-bold text-[#1A2D62] group-hover:text-[#2ECA7F] transition-colors'>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full overflow-hidden"
            >
              <ul className="flex flex-col items-center py-4 space-y-4">
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href="/home"
                    className="font-semibold text-[#1A2D62] hover:text-[#2ECA7F] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href="/about"
                    className="font-semibold text-[#1A2D62] hover:text-[#2ECA7F] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </motion.li>
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    className="w-full text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                      >
                        <span className="font-semibold text-[#1A2D62]">
                          {link.title}
                        </span>
                        {link.submenu && (
                          activeIndex === idx ? (
                            <LiaAngleUpSolid className="text-[#1A2D62]" />
                          ) : (
                            <LiaAngleDownSolid className="text-[#1A2D62]" />
                          )
                        )}
                      </div>

                      <AnimatePresence>
                        {activeIndex === idx && link.submenu && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-2 mt-2"
                          >
                            {link.submenu.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <Link
                                  href={item.href}
                                  className="block py-1 text-sm text-[#1A2D62] hover:text-[#2ECA7F] transition-colors pl-6"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href="/contact"
                    className="font-semibold text-[#1A2D62] hover:text-[#2ECA7F] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons - Hidden on mobile when menu is open */}
        <div className={`${mobileMenuOpen ? 'hidden' : 'flex'} items-center gap-4`}>
          <BlueHover text="Login" />
          <GreenHoverBtn text="Sign Up" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;