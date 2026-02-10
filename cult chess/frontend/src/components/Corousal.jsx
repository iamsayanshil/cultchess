import { Link } from "react-router-dom";

const Corousal = () => {
  return (
    <div className="h-full">
      <div
        className="pt-35 p-5 w-full bg-linear-to-b from-[#0A5943] from-15%
        via-[#339b7e] via-55%
        to-white to-100%"
      >
        <div className="rounded-3xl bg-[#ffba08] p-2 px-3 w-fit font-bold">
          #1 CHESS ACADEMY
        </div>

        <div className="pt-5 font-bold text-3xl text-[#F2E8CF]">
          Master Chess With
        </div>

        <div className="font-bold text-3xl text-[#ffba08]">Expert Guidance</div>

        <div className="pt-3 pr-5 text-lg text-[#F2E8CF]">
          Unlock your strategic potential with personalized coaching for all
          levels. From beginners to tournament champions, we build grandmasters
          of tomorrow.
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/form">
            <button className="w-full sm:w-auto bg-[#ffba08] text-black font-bold py-3 px-6 rounded-full text-lg active:scale-95 transition">
              Book Free Trial Class
            </button>
          </Link>

          {/*Explore Courses Button */}
          <Link to="/courses">
            <button className="w-full sm:w-auto border-2 border-white bg-transparent text-white font-bold py-3 px-6 rounded-full text-lg active:scale-95 transition">
              Explore Courses
            </button>
          </Link>
        </div>

        {/* Why Choose */}
        <div className="pt-20 font-bold text-3xl text-white text-center">
          Why Choose Cultchess?
        </div>

        <div className="pt-5 text-sm text-white text-center pb-12">
          We don't just teach moves; we teach you how to think. Our holistic
          approach ensures rapid improvement.
        </div>

        {/* Feature Cards */}
        {[
          {
            icon: "/trophy.svg",
            title: "FIDE-Certified Coaches",
            desc: "Learn from experienced tournament players and masters who have proven their skills.",
          },
          {
            icon: "/book.svg",
            title: "Structured Curriculum",
            desc: "A step-by-step roadmap designed to take you from novice to master level.",
          },
          {
            icon: "/people.svg",
            title: "Interactive Sessions",
            desc: "Live analysis, puzzle solving, and real-time feedback during every class.",
          },
          {
            icon: "/growth.svg",
            title: "Progress Tracking",
            desc: "Regular assessments and detailed reports to measure your growth.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="h-50 w-full bg-[#efefef] rounded-xl border-b-4 border-[#0A5943] mt-7"
          >
            <div className="pt-8 flex justify-center">
              <img src={item.icon} alt="" className="h-8 w-8" />
            </div>

            <div className="pt-4 font-bold text-xl text-black text-center">
              {item.title}
            </div>

            <div className="pt-3 text-sm text-black text-center px-4 pb-6">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Corousal;
