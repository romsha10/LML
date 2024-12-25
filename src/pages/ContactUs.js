import React, { useState } from "react";
import axios from "axios";
import Navbar from "../pages/Navbar"; // Adjust the import path based on your project structure

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [showPopup, setShowPopup] = useState(false); // Pop-up visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      // Send form data to backend
      await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
      });

      // Show success message
      setStatus("success");
      setShowPopup(true); // Show pop-up

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setShowPopup(true); // Show pop-up
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-[#f2daed] min-h-screen relative">
      {/* Include Navbar */}
      <Navbar />

      <header className="text-center py-10">
        <h1 className="text-[#3b3092] text-4xl font-semibold">Contact Us</h1>
        <p className="text-[#4538a7] text-xl mt-4">
          We'd love to hear from you! Please fill out the form below.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg relative">
          {/* Pop-Up Notification */}
          {showPopup && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#00000088] rounded-lg">
              <div className="bg-white shadow-lg rounded-md border-2 border-[#ddd] p-6 max-w-md text-center space-y-4">
                {status === "success" ? (
                  <p className="text-green-600 font-semibold">
                    Thank you for reaching out! We will get in touch with you
                    soon.
                  </p>
                ) : (
                  <p className="text-red-600 font-semibold">
                    Failed to send the message. Please try again.
                  </p>
                )}
                <button
                  onClick={() => setShowPopup(false)} // Close pop-up
                  className="bg-[#3b3092] text-white px-4 py-2 rounded-md hover:bg-[#ff3131]"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[#3b3092] font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border-2 border-[#ddd] rounded-md"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[#3b3092] font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border-2 border-[#ddd] rounded-md"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-[#3b3092] font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border-2 border-[#ddd] rounded-md"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3b3092] text-white py-3 rounded-md hover:bg-[#ff3131]"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
