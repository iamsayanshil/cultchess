import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.result === "success") {
        setMessage(`✅ Form Submitted, You will be contacted by our team.`);
        setFormData({ name: "", phone: "", email: "", program: "" });
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setMessage(`❌ Fetch error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-25 p-5 w-full bg-linear-to-b from-[#0A5943] from-15% via-[#339b7e] via-55%to-white to-100%">
        <div className="text-3xl font-bold text-white text-center pb-19">
          <p>Be a Chess Genius Now</p>
        </div>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold text-[#0A5943] mb-6 text-center">
              Ready to make your first move?
            </h2>

            <p className="text-sm text-[#000000] mb-6 text-center">
              Join 500+ students mastering the game. Fill out the form to
              schedule your free assessment and trial class.
            </p>
            <p className="text-sm text-[#000000] mb-6 text-center">
              <span className="text-green-500 mr-2 text-sm">✔</span>
              Free 30-min evaluation
            </p>
            <p className="text-sm text-[#000000] mb-6 text-center">
              <span className="text-green-500 mr-2 text-sm">✔</span>
              Customized study plan
            </p>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffba08] focus:border-transparent"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your Contact Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffba08] focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffba08] focus:border-transparent"
                required
              />
            </div>

            {/* Program */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select your program
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffba08] focus:border-transparent bg-white"
                required
              >
                <option value="">Select your program</option>
                <option value="general">General Enquiry</option>
                <option value="coaching">Coaching Program</option>
                <option value="tournament">Tournament Registration</option>
                <option value="corporate">Corporate Event</option>
                <option value="trial">Free Trial</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full bg-[#ffba08] text-[#000000] font-bold py-3 rounded-xl active:scale-95 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>

            {/* Message */}
            {message && <p className="mt-4 text-center">{message}</p>}
          </form>
        </div>
      </div>
      <div className="w-full bg-linear-to-b from-white via-[#339b7e] to-[#0A5943] flex items-center justify-center py-20 px-4" />
      <Footer />
    </div>
  );
};

export default Form;
