import axios from "axios";
import { apiUrl } from "./helper";
import {getTokenFromStorage} from "./tokenHelper"

// Importing data fron fron backend
export const fetchNotes = async () => {
    const token = getTokenFromStorage();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(`${apiUrl}/api/notes`, config);

    // console.log("Fetching notes in MyNotes...", data);

    return data;
  } catch (error) {
    console.log("Fetching notes failed Error: " + error);
  }
};


export const fetchNotesById = async (id) => {
  const token = getTokenFromStorage();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(`${apiUrl}/api/notes/${id}`, config);

    // console.log("Fetching notes in MyNotes...", data);

    return data;
  } catch (error) {
    console.log("Fetching notes failed Error: " + error);
  }
};