
import { blogData } from "@/constants/cardsData";
import BlogCard from "./BlogCard";

const BlogSection: React.FC = () => {
  return (
    <section className="relative pt-16 bg-[url(https://rxdtheme.com/html/tf/penn/assets/images/banner/blog-bg.png)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4">
          <p className="text-[var(--btn-color)] font-semibold uppercase tracking-wide">
            YHS Blogs
          </p>
          <span className="w-32 p-[1px] rounded bg-[var(--btn-color)]"></span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 text-[#1D2951]">
          Our Expert{" "}
          <span className="text-[var(--btn-color)] underline">Blogs</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-8">
            <BlogCard post={blogData[0]} />
            <BlogCard post={blogData[1]} />
          </div>

          <BlogCard post={blogData[2]} />

          <BlogCard post={blogData[3]} />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
