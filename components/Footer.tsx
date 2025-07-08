import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"
import FooterItem from './UI/FooterItem'
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { SiOnlyoffice } from "react-icons/si";
import { footerItem1Data, footerItem2Data } from '@/constants/cardsData';
import Link from 'next/link';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'TW', onClick: () => console.log('Twitter clicked') },
    { name: 'FB', onClick: () => console.log('Facebook clicked') },
    { name: 'INS', onClick: () => console.log('Instagram clicked') },
    { name: 'YT', onClick: () => console.log('YouTube clicked') }
  ];

  return (
    <footer className='bg-[var(--text-color)] text-white w-full'>
      <div className='max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className='flex flex-col'>
            <div className="mb-6">
              <Image
                src={logo}
                alt='Company logo'
                className='w-40 h-auto'
                width={160}
                height={48}
                priority
              />
            </div>
            <p className='text-gray-300 mb-6 text-sm leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quisquam consectetur reprehenderit.
            </p>
            <div className='flex space-x-4 mt-auto'>
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.onClick}
                  className='text-white hover:text-[var(--btn-color)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--btn-color)] focus:ring-opacity-50'
                  aria-label={link.name}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-lg font-bold mb-6'>Products</h3>
            <ul className='space-y-3'>
              {footerItem1Data.map((val, index) => (
                <FooterItem key={`courses-${index}`} text={val} />
              ))}
            </ul>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-lg font-bold mb-6'>Company</h3>
            <ul className='space-y-3'>
              {footerItem2Data.map((val, index) => (
                <FooterItem key={`company-${index}`} text={val} />
              ))}
            </ul>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-lg font-bold mb-6'>Contact Info</h3>
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <CiMobile4 className='w-5 h-5 mt-1 text-[var(--btn-color)] flex-shrink-0' />
                <div>
                  <h4 className='text-base font-semibold'>Phone number</h4>
                  <p className='text-gray-300 text-sm'>+88 457 845 695</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <TfiEmail className='w-5 h-5 mt-1 text-[var(--btn-color)] flex-shrink-0' />
                <div>
                  <h4 className='text-base font-semibold'>Email Address</h4>
                  <p className='text-gray-300 text-sm'>example@gmail.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <SiOnlyoffice className='w-5 h-5 mt-1 text-[var(--btn-color)] flex-shrink-0' />
                <div>
                  <h4 className='text-base font-semibold'>Office Address</h4>
                  <p className='text-gray-300 text-sm'>California, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 mt-12 pt-8 text-sm flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between'>
          <p className='text-base font-semibold'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className='flex flex-wrap items-center gap-6 text-base font-semibold'>
            <Link href={"/term-of-use"} className='hover:text-[var(--btn-color)] hover:underline transition-all cursor-pointer'>Terms of use</Link>
            <Link href={"/privacy-policy"} className='hover:text-[var(--btn-color)] hover:underline transition-all cursor-pointer'>Privacy Policy</Link>
            <Link href={"/cookie-policy"} className='hover:text-[var(--btn-color)] hover:underline transition-all cursor-pointer'>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;