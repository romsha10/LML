import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar"; // Import Navbar component

const SubjectPage = () => {
  const { subjectId } = useParams();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Fetch topics from the backend for the given subjectId
    const fetchTopics = async () => {
      try {
        const response = await axios.get(`/api/subjects/${subjectId}`);
        setTopics(response.data.topics); // Set the fetched topics to state
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, [subjectId]);

  return (
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar /> {/* Add Navbar here */}
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-[#3b3092] text-4xl font-semibold">
          Welcome to the world of{" "}
          {subjectId.charAt(0).toUpperCase() + subjectId.slice(1)}
        </h1>
      </header>
      {/* List of Topics */}
      <section className="px-6 py-16">
        {topics.length > 0 ? (
          <ul>
            {topics.map((topic, index) => (
              <li
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <h3 className="text-[#3b3092] text-xl font-semibold mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-[#4538a7] mb-4">{topic.description}</p>
                </div>
                <a
                  href={topic.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131] ml-4"
                >
                  Watch Now
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-[#4538a7]">
            No topics available for this subject.
          </p>
        )}
      </section>
    </div>
  );
};

export default SubjectPage;
