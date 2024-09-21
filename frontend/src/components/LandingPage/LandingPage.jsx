import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const userInfo = localStorage.getItem("userInfo");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (userInfo) {
      // User is authenticated, navigate to mynotes
      navigate("/mynotes");
    } else {
      // User is not authenticated, navigate to login
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 p-8 m-10">
      {/* Left Side (Text) */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Unleash Creativity with
          <span className="text-gray-600 font-serif"> snapNotes</span> : Your
          Ultimate Platform for Effortless Note-Taking
        </h1>
        <p className="mb-6 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="text-gray-600 font-serif"> snapNotes</span>, where
          simplicity meets creativity in the world of note-taking! Whether
          you're a student, professional, or just someone who loves jotting down
          ideas, <span className="text-gray-600 font-serif"> snapNotes</span> offers an intuitive and feature-rich experience to
          elevate your note-taking journey.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          <p className="font-semibold">Stay Connected Anywhere, Anytime:</p>{" "}
          Access your notes on the go! <span className="text-gray-600 font-serif"> snapNotes</span> is optimized for all devices,
          ensuring you have your ideas at your fingertips wherever life takes
          you. Sync seamlessly across your desktop, tablet, and mobile devices.
        </p>

        <div className="text-center mt-8">
          <button
            onClick={handleGetStarted}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2">
        <img
          src="https://thumbs.dreamstime.com/b/note-taking-concept-note-taking-concept-man-writes-goals-pen-motivation-leadership-efficient-workflow-poster-banner-258751865.jpg"
          alt="Note-Making App"
          className="w-full h-auto rounded-md "
        />
      </div>
    </div>
  );
};

export default LandingPage;
