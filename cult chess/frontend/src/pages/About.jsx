import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <div
          className="h-[screen] pt-35 p-5 w-full bg-linear-to-b from-[#0A5943] from-15%
          via-[#339b7e] via-55%
          to-white to-100%"
        >
          {/* Title */}
          <p className="pl-5 pr-5 text-3xl font-bold text-white text-center">
            About Cultchess
          </p>
          <p className="p-5 text-xl text-white text-center">
            Founded with a mission to democratize chess excellence and foster
            strategic thinking in young minds.
          </p>

          {/* Centered Image */}
          <div className="flex justify-center mt-15">
            <img
              className="rounded-xl max-w-full h-auto"
              src="/chess.jpg"
              alt="chess image"
            />
          </div>

          {/* Philosophy Section */}
          <p className="pt-25 pl-5 pr-5 text-3xl font-bold text-black text-center">
            Our Philosophy
          </p>
          <p className="p-5 text-l text-black text-center">
            At Cultchess Academy, we believe chess is more than just a game—it's
            a tool for character building. Our journey began in 2018 in West
            Bengal, fueled by the passion to create a world-class training
            ground for aspiring masters.
          </p>
          <p className="p-5 text-l text-black text-center">
            We combine traditional Soviet-style chess schooling with modern
            AI-driven analysis tools. This unique blend ensures our students not
            only understand the history of the game but are prepared for the
            future of competitive play.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="h-40 w-full bg-[#efefef] rounded-xl border-b-4 border-[#0A5943] mt-7">
              <div className="pt-8 flex justify-center text-4xl">
                <img src="/people.svg" alt="Logo" className="h-8 w-8" />
              </div>
              <div className="pt-2 font-bold text-3xl text-[#000000] text-center">
                500+
              </div>
              <div className="text-sm text-[rgb(83,83,83)] text-center">
                STUDENTS
              </div>
            </div>

            <div className="h-40 w-full bg-[#efefef] rounded-xl border-b-4 border-[#0A5943] mt-7">
              <div className="pt-8 flex justify-center text-4xl">
                <img src="/target.svg" alt="Logo" className="h-8 w-8" />
              </div>
              <div className="pt-2 font-bold text-3xl text-[#000000] text-center">
                50+
              </div>
              <div className="text-sm text-[rgb(83,83,83)] text-center">
                CHAMPIONS
              </div>
            </div>

            <div className="h-40 w-full bg-[#efefef] rounded-xl border-b-4 border-[#0A5943] mt-7">
              <div className="pt-8 flex justify-center text-4xl">
                <img src="/medal.svg" alt="Logo" className="h-8 w-8" />
              </div>
              <div className="pt-2 font-bold text-3xl text-[#000000] text-center">
                100%
              </div>
              <div className="text-sm text-[rgb(83,83,83)] text-center">
                CHAMPIONS
              </div>
            </div>

            <div className="h-40 w-full bg-[#efefef] rounded-xl border-b-4 border-[#0A5943] mt-7">
              <div className="pt-8 flex justify-center text-4xl">
                <img src="/clock.svg" alt="Logo" className="h-8 w-8" />
              </div>
              <div className="pt-2 font-bold text-3xl text-[#000000] text-center">
                5k+
              </div>
              <div className="text-sm text-[rgb(83,83,83)] text-center">
                HOURS TAUGHT
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Methodology Section */}
        <div className="pb-20 pt-20 h-[full] w-full bg-linear-to-b from-white via-[#339b7e] to-[#0A5943] p-5 items-center text-center">
          <p className="font-bold text-3xl text-black">Our 4-Step Methodology</p>

          {[
            { step: "01", title: "Foundation", desc: "Mastering the rules and basic movement mechanics." },
            { step: "02", title: "Tactics", desc: "Recognizing patterns and calculating variations." },
            { step: "03", title: "Strategy", desc: "Long-term planning and positional understanding." },
            { step: "04", title: "Psychology", desc: "Mental toughness and tournament preparation." },
          ].map((item) => (
            <div
              key={item.step}
              className="h-50 w-full bg-[#0d634b] mt-7 rounded-2xl border-b-4 border-[#0cd29a]"
            >
              <div className="pt-4 font-bold flex justify-center text-4xl text-[#20a881]">
                {item.step}
              </div>
              <div className="pt-4 font-bold text-2xl text-[#ffba08] text-center">
                {item.title}
              </div>
              <div className="pt-3 text-sm text-[#ffffff] text-center px-4">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
