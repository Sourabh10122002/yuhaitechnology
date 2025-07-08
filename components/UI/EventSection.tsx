
import { eventsData } from '@/constants/cardsData'
import React from 'react'
import e1 from "@/public/e1.png";
import e2 from "@/public/e2.png";
import EventCard from './EventCard';

const EventSection: React.FC = () => {
  const eventImages = [e1, e2];
  
  const eventsWithImage = eventsData.filter(event => event.image);
  const eventsWithoutImage = eventsData.filter(event => !event.image);

  return (
    <section className='w-full py-16 px-4'>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <p className="text-[var(--btn-color)] font-semibold uppercase tracking-wide">
            Upcoming Events
          </p>
          <span className="w-32 p-[1px] rounded bg-[var(--btn-color)]"></span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 text-[#1D2951]">
          Join With Us <span className="text-[var(--btn-color)] underline">Our Events</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-10 lg:pt-20 max-w-7xl mx-auto">
        {/* Events with images */}
        {eventsWithImage.map((event, idx) => (
          <EventCard 
            key={`with-image-${idx}`}
            event={event}
            image={eventImages[idx]}
          />
        ))}

        {/* Events without images */}
        <div className='flex flex-col gap-8'>
          {eventsWithoutImage.map((event, idx) => (
            <EventCard 
              key={`without-image-${idx}`} 
              event={event} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventSection
