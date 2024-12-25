import React from "react";
import { useParams } from "react-router-dom"; // To fetch subject ID from URL
import Navbar from "./Navbar";

// Dummy data for subjects and topics
const subjectDetails = {
  math: [
    {
      title: "Algebra Basics",
      notes: "/path/to/algebra-notes.pdf", // Provide the actual path to the PDF
      numerical: "/path/to/algebra-numerical.pdf", // Provide the actual path to the PDF
    },
    {
      title: "Geometry Basics",
      notes: "/path/to/geometry-notes.pdf", // Only notes here, no numerical
      numerical: null,
    },
  ],
  science: [
    {
      title: "Chemistry Basics",
      notes: "/path/to/chemistry-notes.pdf", // Only notes here, no numerical
      numerical: null,
    },
    {
      title: "Physics Basics",
      notes: "/path/to/physics-notes.pdf", // Only notes here, no numerical
      numerical: "/path/to/physics-numerical.pdf",
    },
  ],
  // Other subjects...
};

const SubjectNotesPage = () => {
  const { subjectId } = useParams(); // Get the subject ID from the URL
  const subjectTopics = subjectDetails[subjectId] || []; // Fetch the respective subject topics

  return (
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar /> {/* Navbar here */}
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-[#3b3092] text-4xl font-semibold">
          Explore Notes for{" "}
          {subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}
        </h1>
      </header>
      {/* Topics Section */}
      <section className="px-6 py-16">
        {subjectTopics.map((topic, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-[#3b3092] text-xl font-semibold">
              {topic.title}
            </h3>
            <div className="flex space-x-4 mt-4">
              {topic.notes && (
                <a
                  href={topic.notes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
                >
                  Download Notes
                </a>
              )}
              {topic.numerical && (
                <a
                  href={topic.numerical}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
                >
                  Download Numerical
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SubjectNotesPage;
