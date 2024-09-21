import React, { useState } from "react";
import {  Button } from "react-bootstrap";
import MainScreen from "../MainScreen";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../helper/helper";
import axios from "axios";
import { handleError, handleSuccess } from "../../helper/notification";

const Login = () => {
  // console.log("API URL : ",apiUrl);
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();



  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log("Email and password", email, password);

    try {
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        setLoading(true);

        const {data} = await axios.post(
            `${apiUrl}/api/users/login`,
            {
                email:email,
                password:password,
            },
            config
        )
        // console.log("Login data: " + JSON.stringify(data));
        // store data in local storage as cookies
        localStorage.setItem("userInfo", JSON.stringify(data));

        setLoading(false);
        // Notification
            handleSuccess();
        navigate('/mynotes');  // go to my notes page
    } catch (error) {
        console.log("Login error", error); 
        handleError();  
    }
  };

  return (
    <>
      <MainScreen title="LOGIN">
        <div className="flex justify-center items-center h-full">
        {/* Loader to add in future */}
          <form
            className="max-w-md w-full p-8 bg-white rounded-md shadow-lg text-center"
            onSubmit={submitHandler}
          >
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
                required
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
                required
              />
            </div>

            <Button
              variant="primary"
              type="submit"
              className="text-lg font-bold text-white w-full py-3 bg-blue-500 hover:bg-blue-700 rounded-md transition-all duration-300"
            >
              Login
            </Button>
          </form>
        </div>

        <div className="mt-4 text-center text-lg">
          <p className="text-lg">
            New Customer?{" "}
            <Link to="/register" className="text-blue-500">
              Register Here
            </Link>
          </p>
        </div>
      </MainScreen>
    </>
  );
};

export default Login;







// Old code
// <MainScreen title="LOGIN">
//   <div className="loginContainer">
//     {loading && <Loader />}
//     <Form onSubmit={submitHandler}>
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

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>

//     <Row className="py-3">
//       <Col>
//         New Customer ? <Link to="/register">Register Here</Link>
//       </Col>
//     </Row>
//   </div>
// </MainScreen>;