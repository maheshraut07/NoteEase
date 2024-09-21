require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT;
// const MONGODB_URL = "mongodb+srv://Notekeeper:Notekeeper@cluster0.lexyygd.mongodb.net/?retryWrites=true&w=majority"
// Mongodb connection
const connectDB = require("./config/db.js");
connectDB();

// Routes
const userRoutes = require("./routes/UserRoutes.js");
const noteRoutes = require("./routes/NoteRoutes.js");

const app = express();

app.use(cors());

// to get data from user
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.listen(4000, () => {
  console.log("listening on port " + port);
});

// Testing routes for dummy data

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((item) => item._id === req.params.id);
//   res.send(note);
// });

// END
