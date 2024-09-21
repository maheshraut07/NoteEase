import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-md shadow-md text-center">
        {/* If Title is there then render it */}
        {title && (
          <>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <hr className="border-t-2 border-gray-300" />
          </>
        )}

        {/* Render children */}
        {children}
      </div>
    </div>
  );
};

export default MainScreen;
