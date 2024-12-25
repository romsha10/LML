import React from "react";
import Navbar from "./Navbar"; // Assuming Navbar component is already created

const FAQ = () => {
  return (
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar /> {/* Add Navbar here */}
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-[#3b3092] text-4xl font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-[#4538a7] text-xl mt-4">
          Find answers to some of the most common questions below.
        </p>
      </header>
      {/* FAQ Content Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Question 1 */}
          <div className="mb-6">
            <h2 className="text-[#3b3092] text-xl font-semibold mb-2">
              How do I access the tutorials?
            </h2>
            <p className="text-[#4538a7] text-lg">
              To access the tutorials, simply navigate to the "Videos" section
              or "Tutorials" section and click on the tutorial of your choice.
              You'll be redirected to the subject-specific page with all the
              relevant videos.
            </p>
          </div>

          {/* Question 2 */}
          <div className="mb-6">
            <h2 className="text-[#3b3092] text-xl font-semibold mb-2">
              Are the materials free to access?
            </h2>
            <p className="text-[#4538a7] text-lg">
              Yes, all the tutorial videos, notes, and subjects are completely
              free to access. You can view the content at any time.
            </p>
          </div>

          {/* Question 3 */}
          <div className="mb-6">
            <h2 className="text-[#3b3092] text-xl font-semibold mb-2">
              Can I download the notes and tutorials?
            </h2>
            <p className="text-[#4538a7] text-lg">
              Yes, you can download notes in PDF format. The "Download Notes"
              button will allow you to save the file for offline access.
            </p>
          </div>

          {/* Question 4 */}
          <div className="mb-6">
            <h2 className="text-[#3b3092] text-xl font-semibold mb-2">
              How can I contact support?
            </h2>
            <p className="text-[#4538a7] text-lg">
              If you have any issues or need assistance, please visit our
              "Contact Us" page or email us at support@littlemorelearning.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
