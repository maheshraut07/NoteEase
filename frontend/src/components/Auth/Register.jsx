import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../MainScreen";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../helper/helper";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { handleError, handleSuccess } from "../../helper/notification";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Password does not match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          `${apiUrl}/api/users`,
          {
            name: name,
            pic: pic,
            email: email,
            password: password,
          },
          config
        );
        // console.log("Register data: " + JSON.stringify(data));
        // store data in local storage as cookies
        localStorage.setItem("userInfo", JSON.stringify(data));

        setLoading(false);
          handleSuccess();
        navigate("/mynotes"); // go to my notes page
      } catch (error) {
        handleError();
        console.log(`Register error ${error} : `, error.response);
      }
    }
  };

  //   To upload picture
  const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "NoteKeeper");
      data.append("cloud_name", "dsxfulhpj");
      fetch("https://api.cloudinary.com/v1_1/dsxfulhpj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Picture link", data.url.toString());
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <>
      <MainScreen title="REGISTER">
        <div className="flex justify-center items-center h-full">
          <form
            className="max-w-md w-full p-8 bg-white rounded-md shadow-lg"
            onSubmit={submitHandler}
          >
            <div className="mb-6 text-left">
              <label htmlFor="name" className="text-lg font-bold text-gray-700">
                Name
              </label>
              <input
                type="name"
                id="name"
                className="mt-1 p-3 w-full border rounded-md"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-6 text-left">
              <label
                htmlFor="email"
                className="text-lg font-bold text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 w-full border rounded-md"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6 text-left">
              <label
                htmlFor="password"
                className="text-lg font-bold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-3 w-full border rounded-md"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-6 text-left">
              <label
                htmlFor="confirmPassword"
                className="text-lg font-bold text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-3 w-full border rounded-md"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <FormControl id="pic" className="mb-4">
              <FormLabel className="text-lg font-bold text-gray-700">
                Upload your Picture
              </FormLabel>

                <Input
                  className="w-full mt-2"
                  type="file"
                  p={1.5}
                  accept="image/*"
                  onChange={(e) => postDetails(e.target.files[0])}
                />
              
              {picMessage && (
                <p className="text-red-500 text-sm">{picMessage}</p>
              )}
            </FormControl>

            <Button
              variant="primary"
              type="submit"
              className="text-lg font-bold text-white w-full py-3 bg-blue-500 hover:bg-blue-700 rounded-md transition-all duration-300"
            >
              Register
            </Button>
          </form>
        </div>

        <Row className="py-3">
          <Col className="text-center text-lg">
            <p className="text-lg">
              Have an Account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </Col>
        </Row>
      </MainScreen>
    </>
  );
};

export default Register;

// <MainScreen title="REGISTER">
//   <div className="loginContainer">
//     <Form onSubmit={submitHandler}>
//       <Form.Group controlId="name">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="name"
//           value={name}
//           placeholder="Enter name"
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           value={email}
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           value={password}
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="confirmPassword">
//         <Form.Label>Confirm Password</Form.Label>
//         <Form.Control
//           type="password"
//           value={confirmpassword}
//           placeholder="Confirm Password"
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//       </Form.Group>

//       <FormControl id="pic">
//         <FormLabel>Upload your Picture</FormLabel>
//         <Input
//           type="file"
//           p={1.5}
//           accept="image/*"
//           onChange={(e) => postDetails(e.target.files[0])}
//         />
//       </FormControl>

//       <Button variant="primary" type="submit">
//         Register
//       </Button>
//     </Form>
//     <Row className="py-3">
//       <Col>
//         Have an Account ? <Link to="/login">Login</Link>
//       </Col>
//     </Row>
//   </div>
// </MainScreen>
