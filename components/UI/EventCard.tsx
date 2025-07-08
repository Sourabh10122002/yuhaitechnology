
import { eventsData } from "@/constants/cardsData";
import Image, { StaticImageData } from "next/image";
import { CiClock2 } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

interface EventCardProps {
  event: typeof eventsData[0];
  image?: StaticImageData | string;
}


const EventCard: React.FC<EventCardProps> = ({ event, image }) => {
  return (
    <div className={`bg-white border h-fit border-gray-200 rounded-xs overflow-hidden hover:shadow-xl transition duration-300 flex flex-col ${!image ? 'p-4' : ''}`}>
      {/* Date Badge */}
      {image ? (
        <div className="relative">
          <Image
            src={image}
            alt={event.title || "Event image"}
            className="w-full h-72 object-cover"
          />
          <div className="absolute top-4 left-4 bg-blue-900 text-white font-bold rounded-tl-lg rounded-bl-lg px-3 py-1">
            {event.date}
          </div>
          <div className="absolute top-4 left-14 bg-green-500 text-white font-semibold rounded-tr-lg rounded-br-lg px-3 py-1">
            {event.month}
          </div>
        </div>
      ) : (
        <div className="flex gap-2 items-center pt-2 pl-4">
          <div className="bg-blue-900 text-white font-bold px-3 py-1 rounded">
            {event.date}
          </div>
          <div className="bg-green-500 text-white font-semibold px-3 py-1 rounded">
            {event.month}
          </div>
        </div>
      )}

      {/* Event Details */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {event.title}
        </h3>
        
        <div className="flex flex-col lg:flex-row gap-2 lg:items-center text-sm text-gray-600 lg:gap-10 mb-2">
          <span className="flex items-center gap-1">
            <CiClock2 className="w-4 h-4 text-[var(--btn-color)] font-bold" /> 
            {event.time}
          </span>
          <span className="flex items-center gap-1">
            <LuCalendarDays className="w-4 h-4 text-[var(--btn-color)]" /> 
            {event.location}
          </span>
        </div>
        
        <p className={`text-gray-500 text-base ${image ? "pb-4" : ""} `}>
          {event.description}
        </p>
      </div>
    </div>
  )
}

export default EventCard