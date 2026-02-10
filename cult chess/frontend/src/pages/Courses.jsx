import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const servicesData = [
  {
    id: 1,
    title: "Beginner Program",
    criteria: "Ages 6+",
    duration: "12 Sessions",
    description:
      "Chess fundamentals\nPiece movement rules\nBasic tactics\nCheckmate patterns",
  },
  {
    id: 2,
    title: "Intermediate Program",
    criteria: "Rated 1000-1400",
    duration: "24 Sessions",
    description:
      "Opening principles\nTactical motifs\nEndgame basics\nGame analysis",
  },
  {
    id: 3,
    title: "Advanced & Tournament",
    criteria: "Rated 1400+",
    duration: "Ongoing",
    description:
      "Advanced strategy\nOpening repertorie\nPsychological prep\n1-on-1 coaching",
  },
  {
    id: 4,
    title: "Corporate Workshops",
    criteria: "Teams",
    duration: "Custom",
    description:
      "Strategic thinking\nTeam building\nSimultaneous exhibitions\nLeadership seminars",
  },
];

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div
        className="h-100 pt-35 p-5 w-full bg-linear-to-b from-[#0A5943] from-35%
          via-[#339b7e] via-75%
          to-white to-100%"
      >
        <div className="text-center font-bold text-3xl text-white">
          Coaching Programs
        </div>
        <p className="text-cl p-6 text-center text-white">
          Find the perfect path for your chess journey.
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto px-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-[#efefef] rounded-2xl shadow-lg h-full pb-5"
          >
            <div className=" h20 rounded-tl-2xl rounded-tr-2xl bg-[#0A5943] mb-4 p-3 text-white">
              <p className="text-2xl font-bold">{service.title}</p>
              <p className="text-lg text-[#ffba08]">{service.criteria}</p>
            </div>
            <p className="text-sm text-[#4d4d4d] mt-5 ml-5">DURATION</p>
            <p className="text-[#000000] ml-5 font-semibold text-lg">
              {service.duration}
            </p>
            <p className="text-[#4d4d4d] ml-5 pt-10 text-lg leading-8 whitespace-pre-line">
              {service.description}
            </p>
            <Link to="/form">
              <button className=" mt-6 w-[90%] border-2 border-[#0A5943]  text-[#0A5943] font-bold py-3 px-6 rounded-2xl text-lg ml-4 active:scale-95 transition">
                Enroll Now
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="-mt-2.5 h-20 w-full bg-linear-to-b from-white via-[#339b7e] to-[#0A5943] flex items-center justify-center py-20 px-4" />
      <Footer />
    </div>
  );
};

export default Courses;
