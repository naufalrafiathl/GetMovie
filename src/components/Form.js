import React, { useState } from "react";
import { Button } from "./Button";
import axios from "axios";

function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post(
        "http://localhost:3000/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 pb-16 m-10 mt-10 my-16">
      <div>
        <h1 className="title-login">GetMovie</h1>
      </div>
      <p className="text-gray-500 text-center text-xl">
        {props.login
          ? "Please login continue"
          : "Please register for an account"}
      </p>

      {props.login && (
        <div>
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="m-auto w-full p-4 my-4"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="m-auto w-full p-4 my-4 mb-10"
          />

          <div className="flex justify-between w-[35%]">
            <Button
              onClick={() => {
                login();
              }}
              buttonColor="blue"
              buttonSize="btn--wide"
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                props.history.push("/register");
              }}
              buttonColor="register"
              buttonSize="btn--wide"
            >
              Register
            </Button>
          </div>
        </div>
      )}

      {props.register && (
        <div>
          <label>Full Name</label>
          <input type="text" className="m-auto w-full p-4 my-4" />
          <label>Email Address</label>
          <input type="email" className="m-auto w-full p-4 my-4" />
          <label>Confirm Email Address</label>
          <input type="email" className="m-auto w-full p-4 my-4" />
          <label>Password</label>
          <input type="password" className="m-auto w-full p-4 my-4 mb-10" />

          <div className="flex justify-between w-[35%]">
            <Button buttonColor="blue" buttonSize="btn--wide">
              Submit
            </Button>
            <Button
              onClick={() => {
                props.history.push("/login");
              }}
              buttonColor="register"
              buttonSize="btn--wide"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
