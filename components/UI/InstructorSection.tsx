
import { instructorsData } from "@/constants/cardsData";
import InstructorCard from "./InstructorCard";

const InstructorSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <p className="text-[var(--btn-color)] font-semibold uppercase tracking-wide">
            Team member
          </p>
          <span className="w-32 p-[1px] rounded bg-[var(--btn-color)]"></span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 text-[#1D2951]">
          Our Expert <span className="text-[var(--btn-color)] underline">Instructors</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-28 lg: md:gap-y-32 sm:gap-8 py-10 md:py-16">
        {instructorsData.map((val, idx) => (
          <InstructorCard 
            key={idx} 
            index={idx} 
            name={val.name} 
            course={val.courses} 
            role={val.role} 
            students={val.students} 
          />
        ))}
      </div>
    </section>
  );
};  

export default InstructorSection;