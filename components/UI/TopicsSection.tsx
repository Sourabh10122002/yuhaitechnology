
import { topicsData } from "@/constants/cardsData";

const TopicsSection = () => {
  return (
    <section className="w-full py-16 pb-20 lg:pb-28 px-4 bg-gradient-to-br from-yellow-50 via-white to-pink-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-[var(--btn-color)] font-semibold uppercase tracking-wide flex items-center gap-4">
          Start Buying
          <span className="w-32 p-[1px] rounded bg-[var(--btn-color)]"></span>
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 text-[#1D2951]">
          Popular <span className="text-[var(--btn-color)] underline">Products To Buy</span>{" "}
          From Today.
        </h2>


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topicsData.map((topic, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className={`rounded flex w-12 h-12 items-center justify-center ${topic.bg}`}>
                <p className="">{idx+1}</p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#1D2951]">
                  {topic.title}
                </h3>
                <p className="text-green-500 font-medium">{topic.courses}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;