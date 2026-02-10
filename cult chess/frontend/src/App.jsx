import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blogs from "./pages/Blogs";
import WPButton from "./components/WhatsappButton";
import Form from "./pages/Form";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return ( 
    <>
      <ScrollToTop />
      <WPButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/form" element={<Form />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default App;
