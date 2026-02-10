import { useEffect, useRef } from "react";

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.8; // scroll speed

    const scroll = () => {
      container.scrollLeft += speed;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Helper to render stars
  const renderStars = (count = 5) => {
    return (
      <div className="flex justify-center mt-3 text-yellow-400 text-lg">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div  className=" bg-linear-to-b from-white via-[#339b7e] to-[#0A5943] py-20 px-4">
      <div className="text-center font-bold text-3xl text-black mb-10">
        What Our Students Say
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 scrollbar-hide"
      >
        {/* Card 1 */}
        <div className="min-w-70 sm:min-w-[320px] bg-[#efefef] rounded-xl p-6 border-b-4 border-[#0A5943] shadow-md">
          {renderStars(5)}
          <p className="text-sm text-gray-700 mt-3">
            "The coaching methodology at Cultchess is exceptional. I went from unrated to 1400 in just one year."
          </p>
          <div className="mt-4 font-bold text-[#0A5943]">
            — Rahul Verma, Student
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-70 sm:min-w-[320px] bg-[#efefef] rounded-xl p-6 border-b-4 border-[#0A5943] shadow-md">
          {renderStars(5)}
          <p className="text-sm text-gray-700 mt-3">
            "My son's concentration has improved drastically since he started classes with WIM Priya."
          </p>
          <div className="mt-4 font-bold text-[#0A5943]">
            — Sarah Jenkins, Parent
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-70 sm:min-w-[320px] bg-[#efefef] rounded-xl p-6 border-b-4 border-[#0A5943] shadow-md">
          {renderStars(5)}
          <p className="text-sm text-gray-700 mt-3">
            "Great community and challenging tournaments. The analysis sessions are the best part."
          </p>
          <div className="mt-4 font-bold text-[#0A5943]">
            — Amit Dubey, Student
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
