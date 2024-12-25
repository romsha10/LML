import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ReactDOM from "react-dom";
import { SubjectsProvider } from "./context/SubjectsContext"; // Import SubjectsProvider

// Importing Components
import HomePage from "./pages/HomePage"; // Path to HomePage component
import VideosPage from "./components/VideosPage"; // Path to VideosPage component
import NotesPage from "./pages/NotesPage"; // Path to NotesPage component
import SubjectSpecificPage from "./pages/SubjectNotesPage"; // Path to SubjectSpecificPage component
import TutorialsPage from "./pages/TutorialsPage"; // Path to TutorialsPage component
import TutorialSpecificPage from "./pages/TutorialSpecificPage"; // Path to TutorialSpecificPage component
import AboutUs from "./pages/AboutUs"; // Path to AboutUs component
import FAQ from "./pages/FAQ"; // Path to FAQ component
import ContactUs from "./pages/ContactUs"; // Path to ContactUs component
import Footer from "./pages/Footer";

import LoginPage from './pages/LoginPage';   // Login page
import AdminPanelPage from './pages/AdminPanelPage'; // Admin panel page

const App = () => {
  const [token] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <SubjectsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route
            path="/subjects/notes/:subjectId"
            element={<SubjectSpecificPage />}
          />
          <Route
            path="*"
            element={<Navigate to={token ? "/admin" : "/login"} />}
          />
          <Route path="/login" element={<LoginPage />} />{" "}
          {/* Route for login */}
          <Route path="/admin" element={<AdminPanelPage />} />{" "}
          {/* Route for admin panel */}
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route
            path="/subjects/tutorials/:subjectId"
            element={<TutorialSpecificPage />}
          />
          <Route path="/about" element={<AboutUs />} />{" "}
          {/* About Us Page Route */}
          <Route path="/faq" element={<FAQ />} /> {/* FAQ Page Route */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer /> {/* Footer added here, so it's on every page */}
      </SubjectsProvider>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
