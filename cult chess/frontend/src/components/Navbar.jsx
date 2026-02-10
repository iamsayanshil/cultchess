import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // to highlight active link

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full px-5 h-18 flex items-center justify-between bg-[#0A5943] drop-shadow-xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-[#F2E8CF]">
          <img src="/logo.svg" alt="Logo" className="h-13 w-13" />
          <div className="flex flex-col leading-tight">
            <span className="text-l font-bold tracking-wide">CULTCHESS</span>
            <span className="text-xs font-light tracking-widest">ACADEMY</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-semibold shadow-lg px-4 py-2 rounded-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-[#ffba08] ${
                location.pathname === link.path ? "text-[#ffba08]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#F2E8CF] transform transition duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#F2E8CF] transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#F2E8CF] transform transition duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0A594380] backdrop-blur-md transition-all duration-300 z-40 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white font-bold">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`hover:text-[#ffba08] ${
                location.pathname === link.path ? "text-[#ffba08]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
