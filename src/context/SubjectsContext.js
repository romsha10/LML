import React, { createContext, useState, useContext, useEffect } from "react";

// Create context for subjects
const SubjectsContext = createContext();

// Custom hook to access subjects context
export const useSubjects = () => {
  return useContext(SubjectsContext);
};

// Subjects provider to wrap the app with context
export const SubjectsProvider = ({ children }) => {
  const [subjects, setSubjects] = useState(() => {
    // Try to load subjects from localStorage, otherwise use default subjects
    const savedSubjects = localStorage.getItem("subjects");
    return savedSubjects
      ? JSON.parse(savedSubjects)
      : [
          {
            id: "math",
            name: "Mathematics",
            description: "Master math with engaging videos.",
            thumbnail: "/math.png",
            topics: [],
          },
          {
            id: "science",
            name: "Science",
            description: "Dive into the wonders of science.",
            thumbnail: "/science.png",
            topics: [],
          },
        ];
  });

  // Function to add a new subject
  const addSubject = (subject) => {
    // Ensure the subject has all necessary properties
    const newSubject = {
      ...subject,
      description: subject.description || `Learn more about ${subject.name}`,
      thumbnail: subject.thumbnail || "/default-thumbnail.png",
    };

    setSubjects((prevSubjects) => {
      // Check if subject already exists to prevent duplicates
      const existingSubject = prevSubjects.find(
        (s) => s.name === newSubject.name
      );

      if (existingSubject) {
        // If subject exists, update its topics
        return prevSubjects.map((s) =>
          s.name === newSubject.name
            ? {
                ...s,
                topics: [...(s.topics || []), ...(newSubject.topics || [])],
              }
            : s
        );
      }

      return [...prevSubjects, newSubject];
    });
  };

  // Function to remove a subject
  const removeSubject = (subjectId) => {
    setSubjects((prevSubjects) =>
      prevSubjects.filter((subject) => subject.id !== subjectId)
    );
  };

  // Save subjects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  return (
    <SubjectsContext.Provider value={{ subjects, addSubject, removeSubject }}>
      {children}
    </SubjectsContext.Provider>
  );
};
