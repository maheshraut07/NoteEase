// NoteCard.js
import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";


const NoteCard = ({ note }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      {/* Box content */}
      <div className="text-left">
        <div
          style={{ backgroundColor: "#FFF78A" }}
          className="bg-yellow-200 px-4 py-2 rounded-md mb-2"
        >
          <h1 className="text-xl font-bold text-gray-800">{note.title}</h1>
        </div>
        <h2 className="text-lg font-semibold px-4 py-2 text-gray-600 mb-2">
          {note.category}
        </h2>
      </div>

      <hr className="my-2 border-gray-300" />

      <div className="text-left px-4 py-2">
        <p className="text-gray-700">{note.content}</p>
      </div>

      <hr className="my-2 border-gray-300" />

      {/* Responsive layout for mobile view */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="text-left text-gray-500 text-sm mb-4 md:mb-0">
          <p>Created At: {new Date(note.createdAt).toLocaleString()}</p>
          <p>Updated At: {new Date(note.updatedAt).toLocaleString()}</p>
        </div>
        <div className="md:text-right ">
          <Link
            to={`/editnote/${note._id}`}
            className="bg-blue-500 text-white px-7 py-2 rounded-md hover:bg-blue-600 md:ml-2 m-2 mt-2"
          >
            Edit
          </Link>

          <Link
            to={`/deletenote/${note._id}`}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 md:mt-0 md:ml-2 m-2 mt-2"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;








//old code
  // <div className="bg-white shadow-md rounded-lg p-4 m-4">
    //   {/* Box content */}
    //   <div className="text-left">
    //     <div className="bg-yellow-200 px-4 py-2 rounded-md mb-2">
    //       <h1 className="text-xl font-bold text-gray-800">{note.title}</h1>
    //     </div>
    //     <h2 className="text-lg font-semibold px-4 py-2 text-gray-600 mb-2">
    //       {note.category}
    //     </h2>
    //   </div>

    //   <hr className="my-2 border-gray-300" />

    //   <div className="text-left px-4 py-2">
    //     <p className="text-gray-700">{note.content}</p>
    //   </div>

    //   <hr className="my-2 border-gray-300" />

    //   <div className="text-left mt-4">
    //     <div className="text-gray-500 text-sm">
    //       Created At: {new Date(note.createdAt).toLocaleString()}
    //     </div>
    //     <div className="text-gray-500 text-sm">
    //       Updated At: {new Date(note.updatedAt).toLocaleString()}
    //     </div>
    //   </div>

    //   {/* Buttons */}
    //   <div className="flex justify-end mt-4 space-x-2">
    //     <Link
    //       to={`/editnote/${note._id}`}
    //       className="bg-blue-500 text-white px-7 py-2 rounded-md hover:bg-blue-600"
    //     >
    //       Edit
    //     </Link>

    //     <Link
    //       to={`/deletenote/${note._id}`}
    //       className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700"
    //     >
    //       Delete
    //     </Link>
    //   </div>
    // </div>