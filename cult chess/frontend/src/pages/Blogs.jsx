import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogData = [
  {
    id: 1,
    title: "5 Chess Opening Principles Every Beginner Should Know",
    thumbnail: "/thumbnail1.avif",
    description:
      "Master control of the center and develop your pieces efficiently to gain an early advantage.",
    date: "Oct 15, 2024",
    author: "Cultchess Team",
  },
  {
    id: 2,
    title: "How to Improve Your Chess Tactical Vision",
    thumbnail: "/thumbnail2.avif",
    description:
      "Tactics decide games. Learn how to spot patterns like forks, pins, and skewers instantly.",
    date: "Oct 12, 2024",
    author: "Cultchess Team",
  },
  {
    id: 3,
    title: "Preparing for Your First Chess Tournament",
    thumbnail: "/thumbnail3.avif",
    description:
      "Physical and mental preparation tips to help you perform your best under pressure.",
    date: "Oct 08, 2024",
    author: "Cultchess Team",
  },
  {
    id: 4,
    title: "The Benefits of Chess for Child Development",
    thumbnail: "/thumbnail4.avif",
    description:
      "How chess improves concentration, memory, and logical thinking in young minds.",
    date: "Sep 29, 2024",
    author: "Cultchess Team",
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className=" h-80 pt-20 p-5 w-full bg-linear-to-b from-[#0A5943] 45% via-[#339b7e] 45% to-white 100"
      >
        <div className="text-center font-bold text-3xl text-white">
          Academy Blog
        </div>
        <p className="p-6 text-center text-white">
          Insights, tips, and news from the chess world.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto px-10 py-10">
        {BlogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#efefef] rounded-2xl shadow-lg pb-5 overflow-hidden"
          >
            {/* Thumbnail */}
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-44 object-cover"
            />

            {/* Blog Meta */}
            <div className="flex mt-5 ml-5 gap-7 text-[#757575]">
              <div className="flex gap-2 items-center">
                <img src="/date.svg" alt="calender" className="h-4 w-4" />
                <p>{blog.date}</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/man.svg" alt="author" className="h-4 w-4" />
                <p>{blog.author}</p>
              </div>
            </div>

            {/* Title */}
            <p className="text-xl font-bold ml-5 mr-5 mt-5">{blog.title}</p>

            {/* Description */}
            <p className="text-[#4d4d4d] ml-5 mr-5 pt-5 text-md">
              {blog.description}
            </p>

            {/* Explore Blog Button */}
            <button
              className="mt-6 w-[90%] border-2 border-[#0A5943] text-[#0A5943] font-bold py-3 px-6 rounded-2xl text-lg ml-4 active:scale-95 transition"
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              Explore Blog
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="-mt-2.5 h-20 w-full bg-linear-to-b from-white via-[#339b7e] to-[#0A5943]" />

      <Footer />
    </div>
  );
};

export default Blogs;
