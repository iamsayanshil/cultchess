import Navbar from "../components/Navbar";
import Corousal from "../components/Corousal";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar/>

      {/* Corousal - full screen height, responsive */}
      <section className="relative">
        <Corousal/>
      </section>

      {/* Testimonials - stacked below Corousal */}
      <section className="relative">
        <Testimonials/>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home
