import axios from "axios";
import React, { useState } from "react";
import { apiUrl } from "../../helper/helper";
import { useNavigate } from "react-router-dom";
import { getTokenFromStorage } from "../../helper/tokenHelper";
import { handleError, handleSuccess } from "../../helper/notification";

const CreateNote = () => {
  const navigate = useNavigate();

  // Code to fetch token from local storage
//   const [token, setToken] = useState(null);


  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();

  const createNote = async () => {
   const token = getTokenFromStorage();
   if (!token) {
    console.log("Getting token failed", token);
   }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const postData = { title, content, category };

      await axios.post(`${apiUrl}/api/notes/create`, postData, config);
      handleSuccess()
      //   console.log("Created note data ", data);
      navigate("/mynotes");
    } catch (error) {
      handleError()
      console.log("Creating notes failed Error: " + error);
    }
  };



  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Create New Post</h2>

      <label className="text-lg font-bold block mb-4">
        Title:
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>

      <label className="text-lg font-bold block mb-4">
        Category:
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>

      <label className="text-lg font-bold block mb-4">
        Content:
        <textarea
          rows={3}
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>

      <button
        onClick={createNote}
        className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600"
      >
        Create Post
      </button>
    </div>
  );
};

export default CreateNote;
