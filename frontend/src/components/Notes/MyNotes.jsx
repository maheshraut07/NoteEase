import React, { useEffect, useState } from "react";
import MainScreen from "../MainScreen";
import { Link } from "react-router-dom";
import { fetchNotes } from "../../helper/fetchNotes";
import NoteCard from "./NoteCard";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotesData = async () => {
      const notesData = await fetchNotes();
      setNotes(notesData);
    }
    fetchNotesData();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-5 mb-2">Notes</h1>
      <Link to="/createnote">
        <button className="bg-sky-500 text-white font-bold px-6 py-3 rounded-lg shadow-md mx-auto my-2 hover:bg-sky-600">
          Create New Note
        </button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-5 my-2">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default MyNotes;
