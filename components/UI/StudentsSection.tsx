
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaArrowUp } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  colorClass: string;
}

// Data for the testimonials
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'James Clayton',
    role: '- Design Expert',
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.',
    image: 'https://i.pravatar.cc/150?u=jamesclayton',
    colorClass: 'bg-green-100',
  },
  {
    id: 2,
    name: 'James Simmons',
    role: '- Marketing Expert',
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.',
    image: 'https://i.pravatar.cc/150?u=jamessimmons',
    colorClass: 'bg-orange-100',
  },
  {
    id: 3,
    name: 'Alex Feroundo',
    role: '- Founder',
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.',
    image: 'https://i.pravatar.cc/150?u=alexferoundo',
    colorClass: 'bg-blue-100',
  },
  {
    id: 4,
    name: 'Sarah Lee',
    role: '- Product Manager',
    quote: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.',
    image: 'https://i.pravatar.cc/150?u=sarahlee',
    colorClass: 'bg-red-100',
  },
  {
    id: 5,
    name: 'Michael Chen',
    role: '- Lead Developer',
    quote: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    image: 'https://i.pravatar.cc/150?u=michaelchen',
    colorClass: 'bg-purple-100',
  },
];

const StudentsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // --- RESPONSIVE LOGIC ---
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // --- SCROLL TO TOP LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- CAROUSEL NAVIGATION ---
  const maxIndex = testimonialsData.length - visibleCards;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > maxIndex ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? maxIndex : newIndex;
    });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[url(https://rxdtheme.com/html/tf/penn/assets/images/banner/shapes-bg.png)] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Section Header --- */}
        <div className="mb-16">
          <h4 className="text-base font-bold text-[var(--btn-color)] uppercase tracking-wider flex items-center gap-2">
            TESTIMONIAL
            <span className="w-32 p-[1px] rounded bg-[var(--btn-color)]"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#000c3b] mt-2">
            What Says{' '}
            <span className="text-[var(--btn-color)] relative">
              <u>Our Clients</u>
            </span>
          </h2>
        </div>

        {/* --- Carousel --- */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCards}) - ${currentIndex * (32 / visibleCards)}px))`,
              }}
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 bg-white rounded-[5px] shadow-lg p-8 flex flex-col"
                  style={{
                    width: `calc((100% - ${(visibleCards - 1) * 32}px) / ${visibleCards})`,
                  }}
                >
                  <div className="flex text-yellow-400 text-xl mb-5">
                    {[1,2,3,4,5].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
                  <div className={`flex items-center gap-4 p-5 -m-8 mt-auto rounded-b-[5px] ${testimonial.colorClass}`}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-4 border-white object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-[#000c3b]">{testimonial.name}</h3>
                      <p className="text-gray-700">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Navigation Buttons --- */}
          <div className="absolute -top-0.5 -translate-y-[150%] lg:-translate-y-[130%] right-0 flex gap-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="bg-white w-12 h-12 rounded-lg shadow-md flex items-center justify-center text-[#000c3b] hover:bg-[var(--btn-color)] hover:text-white transition-all duration-300"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="bg-white w-12 h-12 rounded-lg shadow-md flex items-center justify-center text-[#000c3b] hover:bg-[var(--btn-color)] hover:text-white transition-all duration-300"
              >
                <FaChevronRight />
              </button>
          </div>
        </div>
      </div>
      
      {/* --- Scroll to Top Button --- */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 bg-[#20b883] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FaArrowUp size={24} />
      </button>
    </section>
  );
};

export default StudentsSection;
