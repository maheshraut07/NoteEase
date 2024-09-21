import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "../../helper/notification";

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    handleSuccess();
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  // Get userInfo from localStorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const isLoggedIn = !!localStorage.getItem("userInfo");

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Link to="/">
            <a className="flex title-font font-medium items-center text-gray-900">
              <span className="ml-3 text-xl text-gray-900 font-bold font-serif">
                snapNotes
              </span>
            </a>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <a className="mr-5 hover:text-gray-900">About Us</a>
            </Link>
          </nav>

          {isLoggedIn ? (
            <div className="flex items-center">
              {userInfo.pic && (
                <img
                  src={userInfo.pic}
                  alt={userInfo.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
              )}

              {/* Display user's name and image here */}
              <span className="mr-5 text-gray-700">{userInfo.name}</span>

              <button
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-2 mr-2 md:mt-0"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-2 mr-3 md:mt-0">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-2 md:mt-0">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
