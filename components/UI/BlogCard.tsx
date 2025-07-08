import Link from "next/link";
import GreenLeftHover from "../Buttons/GreenLeftHover";
import Image from "next/image";

interface Post {
  id: number;
  date: string;
  category: {
    name: string;
    color: string; 
  };
  title: string;
  imageUrl?: string; 
}


const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white rounded-[2px] shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      {post.imageUrl && (
        <div className="relative w-full h-56">
          <Image
            src={post.imageUrl}
            alt={post.title}
            className="w-full object-cover"
            fill
          />
        </div>
      )}

      <div
        className={`p-8 flex flex-col gap-4 flex-grow ${
          post.imageUrl && "pt-20"
        } `}
      >
        <p className="text-base text-gray-500 mb-2 flex items-center gap-1 font-bold">
          {post.date} |{" "}
          <span className="text-[var(--btn-color)] font-bold">
            {post.category.name}
          </span>
        </p>
        <h3 className="text-xl font-bold text-brand-dark-blue leading-tight hover:text-[var(--btn-color)]">
          {post.title}
        </h3>
        <div className="mt-auto">
          <Link href={`/blog/${post.id}`}>
            <GreenLeftHover text="Read More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;