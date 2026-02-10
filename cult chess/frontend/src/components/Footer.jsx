import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0A5943] w-full px-5 py-10">
      {/* Logo */}
      <div className="flex items-center gap-2 text-[#F2E8CF]">
        <img src="/logo.svg" alt="Logo" className="h-13 w-13" />
        <div className="flex flex-col leading-tight">
          <span className="text-l font-bold tracking-wide">CULTCHESS</span>
          <span className="text-xs font-light tracking-widest">ACADEMY</span>
        </div>
      </div>

      {/* Description */}
      <p className="px-2 pt-5 text-white font-light pb-10">
        Cultivating strategic minds and champion players through expert guidance
        and structured learning paths.
      </p>

      {/* Quick Links */}
      <p className="px-2 font-bold text-xl text-white">Quick Links</p>
      <ul className="list-disc list-inside space-y-2 text-white px-2 pt-5">
        <li>
          <Link to="/" className="hover:text-[#ffba08] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#ffba08] transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="hover:text-[#ffba08] transition-colors"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="hover:text-[#ffba08] transition-colors">
            Blogs
          </Link>
        </li>
      </ul>

      {/* Contact */}
      <h1 className="font-bold text-xl px-2 pt-10 text-white">Get in Touch</h1>
      <div className="mt-4 flex flex-col space-y-3 text-white px-2">
        {/* Gmail */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#ffba08]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 15 3 8"
            />
          </svg>
          <a
            href="mailto:cultchessofficial@gmail.com"
            className="hover:text-[#ffba08] transition-colors"
          >
            cultchessofficial@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#ffba08]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
            />
          </svg>
          <span>Siliguri, West Bengal, India</span>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/fb.svg"
            alt="Facebook"
            className="h-5 w-5 hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/insta.svg"
            alt="Instagram"
            className="h-5 w-5 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/x.svg"
            alt="X"
            className="h-4 w-4 hover:scale-110 transition-transform fill-white"
          />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/yt.svg"
            alt="YouTube"
            className="h-5 w-5 hover:scale-110 transition-transform"
          />
        </a>
      </div>

      {/* Google Map */}
      <div className="mt-10 w-full h-73 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109140.82672260332!2d88.34887066974346!3d26.719407442130894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44114f5441dcd%3A0xdeb5c4702063edff!2sSiliguri%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1770719257472!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Text */}
      <p className="pt-10 text-center text-[#ababab] text-sm">
        &#169; Cultchess Academy. All rights reserved
      </p>
      <p className="pt-3 text-center text-[#ababab] text-sm">
        <a href="#">Privacy Policy & Terms of Service</a>
      </p>
    </div>
  );
};

export default Footer;
