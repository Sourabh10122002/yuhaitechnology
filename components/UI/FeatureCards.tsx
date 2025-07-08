import React from "react";

interface Props {
  title: string;
  value: string;
}

import { FiBook, FiUsers, FiCalendar, FiMonitor, FiHeadphones, FiUser} from "react-icons/fi";

const FeatureCards: React.FC<Props> = ({ title, value }) => {

    const iconMap = {
    "Learn More Anywhere": <FiBook className="w-6 h-6" />,
    "Expert Instructor": <FiUser className="w-6 h-6" />,
    "Team Management": <FiUsers className="w-6 h-6" />,
    "Course Planning": <FiCalendar className="w-6 h-6" />,
    "Teacher Monitoring": <FiMonitor className="w-6 h-6" />,
    "24/7 Strong Support": <FiHeadphones className="w-6 h-6" />,
  };

  return (
    <div className="p-10 py-12 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-100 hover:-translate-y-2">
      <div className="flex flex-col items-start space-x-4">
        {/* Icon with colored background */}
        <div className="flex items-center gap-6">
          <div className="p-3 bg-[#EAFAF2] rounded-full text-[var(--btn-color)]">
            {iconMap[title as keyof typeof iconMap]}
          </div>

          <h3 className="text-xl font-semibold mb-2 text-[#1A2D62]">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div>
          <p className="text-gray-600">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
