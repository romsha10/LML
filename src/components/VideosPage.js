import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../pages/Navbar";

const VideosPage = () => {
  const [subjects, setSubjects] = useState([]);

  // Fetch subjects from the backend
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/subjects");
        setSubjects(response.data); // Update state with subjects from backend
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar />
      <header className="text-center py-10">
        <h1 className="text-[#3b3092] text-4xl font-semibold">
          Explore the wide range of subjects' videos we have for you
        </h1>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-16">
        {subjects.map((subject) => (
          <div
            key={subject._id}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <h3 className="text-[#3b3092] text-xl font-semibold mb-2">
              {subject.name}
            </h3>
            <p className="text-[#4538a7] mb-4">{subject.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default VideosPage;