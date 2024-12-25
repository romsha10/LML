import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Assuming Navbar is the same

const subjects = [
  {
    id: "math",
    name: "Mathematics",
    description: "Learn the fundamentals and advanced topics in math.",
    thumbnail: "/math.png",
  },
  {
    id: "science",
    name: "Science",
    description: "Explore the amazing world of science.",
    thumbnail: "/science.png",
  },
  {
    id: "history",
    name: "History",
    description: "Learn about the past to shape the future.",
    thumbnail: "/history.png",
  },
  {
    id: "english",
    name: "English",
    description: "Improve your language skills.",
    thumbnail: "/english.png",
  },
];

const TutorialsPage = () => {
  return (
    <div className="bg-[#f2daed] min-h-screen">
      <Navbar /> {/* Add Navbar here */}
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-[#3b3092] text-4xl font-semibold">
          Explore the wide range of subjects' tutorials we have for you
        </h1>
      </header>
      {/* Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-16">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
          >
            <img
              src={subject.thumbnail}
              alt={subject.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-[#3b3092] text-xl font-semibold mb-2">
              {subject.name}
            </h3>
            <p className="text-[#4538a7] mb-4">{subject.description}</p>
            <Link
              to={`/subjects/tutorials/${subject.id}`}
              className="bg-[#3b3092] text-white px-6 py-2 rounded-full hover:bg-[#ff3131]"
            >
              Explore
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TutorialsPage;
