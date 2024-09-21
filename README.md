# NoteEase - Secure Easy Noting

NoteEase is a secure and user-friendly application built with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. It allows users to effortlessly create, update, and delete personal notes, helping them organize their thoughts and ideas efficiently.

## Features

- **Create, Update, Delete Notes**: Effortlessly manage your personal notes.
- **User Authentication**: Includes login and logout functionality to ensure secure access to your notes.
- **Intuitive Interface**: Designed for a seamless experience, suitable for users of all technical backgrounds.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (for local development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/maheshraut07/NoteEase.git
   cd NoteEase
   ```

2. **Backend setup**

   - Navigate to the `backend` directory.

   ```bash
   cd backend
   ```

   - Install backend dependencies.

   ```bash
   npm install
   ```

   - Start the backend server.

   ```bash
   npm start
   ```

3. **Frontend setup to run the developement server**

   - Navigate to the `frontend` directory.

   ```bash
   cd frontend
   ```

   - Install frontend dependencies.

   ```bash
   npm install
   ```

   - Create a `.env` file in the `backend` folder and add 
   the following environment variables:

   ```bash
   MONGODB_URL=your_mongo_database_uri
   PORT=5000
   VITE_REACT_APP_BACKEND_URL = "http://localhost:4000"x  

   ```

   - Start the frontend development server.

   ```bash
   npm run dev
   ```
