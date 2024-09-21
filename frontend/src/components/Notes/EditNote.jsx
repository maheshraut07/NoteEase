import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../helper/helper";
import { fetchNotesById } from "../../helper/fetchNotes";
import { getTokenFromStorage } from "../../helper/tokenHelper";
import { handleError, handleSuccess } from "../../helper/notification";

const EditNote = () => {
  // Code to fetch token from local storage
  // const [token, setToken] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  // Fetch the note data based on the ID when the component mounts
  const fetchNoteData = async () => {
    try {
      const notesData = await fetchNotesById(id);
      const notes = JSON.stringify(notesData);
      // console.log("Notes in editor: " + notes);

      // Parse the string back to an object
      const notesObject = JSON.parse(notes);
      setNote(notesObject);

      // setTitle(note.title);
      // setContent(note.content);
      // setCategory(note.category);
      // console.log("Note in editor: " + note);
    } catch (error) {
      console.error("Error fetching note:", error);
      // Handle the error, redirect, or show an error message to the user
    }
  };
  useEffect(() => {
    fetchNoteData();
  }, [id]);

    useEffect(() => {
      setTitle(note.title);
      setContent(note.content);
      setCategory(note.category);
    }, [note]);

  const updateNote = async () => {
    const token = getTokenFromStorage();
    if (!token) {
      console.log("Edit new note token failed", token);
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const updatedData = {
        title,
        content,
        category,
      };
      // console.log("Params id", id);

      await axios.put(`${apiUrl}/api/notes/${id}`, updatedData, config);

      handleSuccess();
      // Redirect to the MyNotes page or show a success message
      navigate("/mynotes");
    } catch (error) {
      handleError()
      console.error("Error updating note:", error);
      // Handle the error, show a message to the user, etc.
    }
  };

  return (
    <>
      <div className="container mx-auto my-10 p-8 bg-white shadow-md rounded-md">
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
          onClick={updateNote}
          className="bg-blue-500 text-lg font-bold text-white px-8 py-3 rounded-md hover:bg-blue-600"
        >
          Update Note
        </button>
      </div>
    </>
  );
};

export default EditNote;
