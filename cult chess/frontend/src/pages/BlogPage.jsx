import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogData = [
  { id: 1, title: "5 Chess Opening Principles", description: "Master control...", thumbnail: "/thumbnail1.avif", date: "Oct 15, 2024", author: "Cultchess Team" },
  { id: 2, title: "Improve Your Chess Tactical Vision", description: "Tactics decide games...", thumbnail: "/thumbnail2.avif", date: "Oct 12, 2024", author: "Cultchess Team" },
  { id: 3, title: "Preparing for Your First Tournament", description: "Physical and mental preparation...", thumbnail: "/thumbnail3.avif", date: "Oct 08, 2024", author: "Cultchess Team" },
  { id: 4, title: "Benefits of Chess for Child Development", description: "Chess improves concentration...", thumbnail: "/thumbnail4.avif", date: "Sep 29, 2024", author: "Cultchess Team" },
];

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BlogData.find((b) => b.id === parseInt(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div>
      <Navbar />
      <div
        className="pt-25 p-5 w-full bg-linear-to-b from-[#0A5943] from-15%
        via-[#339b7e] via-55%
        to-white to-100%"
      >
        <button
          onClick={() => navigate(-1)}
          className="text-[#ffffff] font-bold mb-5"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-3 text-white">{blog.title}</h1>
        <p className="text-gray-300 mb-5">
          {blog.date} | {blog.author}
        </p>
        <img src={blog.thumbnail} alt={blog.title} className="w-full h-80 object-cover rounded-xl mb-5" />
        <p className="text-lg">{blog.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
