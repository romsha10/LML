import React from "react";
import { useParams } from "react-router-dom"; // To get the subject ID from the URL
import Navbar from "./Navbar";

// Dummy data for subjects and topics
const tutorialDetails = {
  math: [
    {
      title: "Algebra Basics",
      description: "An introduction to the fundamental concepts of Algebra.",
      videoUrl: "https://www.youtube.com/playlist?list=ALGEBRAPLAYER",
    },
    {
      title: "Geometry Basics",
      description: "Learn the basics of Geometry.",
      videoUrl: "https://www.youtube.com/playlist?list=GEOMETRYPLAYER",
    },
  ],
  science: [
    {
      title: "Chemistry Basics",
      description: "Start your journey in Chemistry.",
      videoUrl: "https://www.youtube.com/playlist?list=CHEMISTRYPLAYER",
    },
    {
      title: "Physics Basics",
      description: "Understand the basics of Physics.",
      videoUrl: "https://www.youtube.com/playlist?list=PHYSICPLAYER",
    },
  ],
  // Other subjects...
};

const TutorialSpecificPage = () => {
  const { subjectId } = useParams(); // Get the subject ID from the URL
  const subjectTopics = tutorialDetails[subjectId] || []; // Fetch the topics for the selected subject

  return (
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar />
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-[#3b3092] text-4xl font-semibold">
          Explore Tutorials for{" "}
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
            <p className="text-[#4538a7] mb-4">{topic.description}</p>
            <div className="flex justify-end">
              <a
                href={topic.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
              >
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TutorialSpecificPage;
