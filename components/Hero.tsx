import { motion } from "framer-motion";
import CourseSection from "./UI/CourseSection";
import AchievementSection from "./UI/AchievementSection";
import FeaturesSection from "./UI/FeaturesSection";
import NewSkillSection from "./UI/NewSkillSection";
import CardSection from "./UI/CardSection";
import LandingSection from "./UI/LandingSection";
import ExploreCoursesSection from "./UI/ExploreCoursesSection";
import SubscribeSection from "./UI/SubscribeSection";
import TopicsSection from "./UI/TopicsSection";
import EventSection from "./UI/EventSection";
import StudentsSection from "./UI/StudentsSection";
import InstructorSection from "./UI/InstructorSection";
import BlogSection from "./UI/BlogSection";

// Reusable animation variant
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Hero: React.FC = () => {
  return (
    <main className="w-full">
      <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <LandingSection />
      </motion.div>

      <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <CardSection />
      </motion.div>

      <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <NewSkillSection />
      </motion.div>

      <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <AchievementSection />
      </motion.div>

      <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <FeaturesSection />
      </motion.div>

      <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <CourseSection />
      </motion.div>

      <motion.div custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <ExploreCoursesSection />
      </motion.div>

      <motion.div custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <SubscribeSection />
      </motion.div>

      <motion.div custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <TopicsSection />
      </motion.div>

      <motion.div custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <EventSection/>
      </motion.div>

      <motion.div custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <StudentsSection/>
      </motion.div>

      <motion.div custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <InstructorSection />
      </motion.div>

      <motion.div custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <BlogSection/>
      </motion.div>

    </main>
  );
};

export default Hero;