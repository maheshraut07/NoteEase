import React, { useState , useEffect} from "react";
import MainScreen from "../MainScreen";
import { useNavigate, useParams } from "react-router-dom";
import {  fetchNotesById } from "../../helper/fetchNotes";
import { getTokenFromStorage } from "../../helper/tokenHelper";
import { apiUrl } from "../../helper/helper";
import axios from "axios";
import { handleError, handleSuccess } from "../../helper/notification";

const DeleteNote = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState(null);

    
  useEffect(() => {
    // Fetch the note data based on the ID when the component mounts
    const fetchNoteData = async () => {
      try {
        const notesData = await fetchNotesById(id);
        const notes = JSON.stringify(notesData);
        // console.log("Notes in editor: " + notes);

        // Parse the string back to an object
        const notesObject = JSON.parse(notes);
        setNote(notesObject);

        // console.log("Note in editor: " + note);
      } catch (error) {
        console.error("Error fetching note:", error);
        // Handle the error, redirect, or show an error message to the user
      }
    };

    fetchNoteData();
  }, [id]);

  const deleteNote = async() => {
    const token = getTokenFromStorage();
       if (!token) {
         console.log("Deleting  note token failed", token);
       }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`${apiUrl}/api/notes/${id}`, config);
      handleSuccess()
      navigate("/mynotes");
    } catch (error) {
      handleError()
      console.error("Error Deleting note:", error);
    }
  };

  return (
    <>
      <div className="container m-auto mt-20 my-10 p-12 bg-white shadow-md rounded-md max-w-lg">
        {note && (
          <div className="text-center">
            <h1 className=" text-2xl font-bold mb-4">{note.title}</h1>
            <h2 className="text-blue-500 mb-2">Category: {note.category}</h2>

            <p className="text-gray-700 mb-4 text-lg font-bold">
              {note.content}
            </p>
            <p className="text-lg font-bold block  text-gray-500 mb-2">
              Created At:{" "}
              <span className=" text-black mb-2">
                {" "}
                {new Date(note.createdAt).toLocaleString()}{" "}
              </span>
            </p>
            <p className="text-lg font-bold block text-gray-500 mb-4">
              Updated At:{" "}
              <span className=" text-black mb-2">
                {new Date(note.updatedAt).toLocaleString()}
              </span>
            </p>
            <button
              onClick={deleteNote}
              className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600"
            >
              Delete Note
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteNote;
