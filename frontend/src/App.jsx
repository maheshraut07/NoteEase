import React, { useState } from "react";
import Header from "./components/Header-Footer/Header";
import Footer from "./components/Header-Footer/Footer";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./components/Notes/MyNotes";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CreateNote from "./components/Notes/createNote";
import EditNote from "./components/Notes/EditNote";
import DeleteNote from "./components/Notes/DeleteNote";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/editnote/:id" element={<EditNote />} />
        <Route path="/deletenote/:id" element={<DeleteNote />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

