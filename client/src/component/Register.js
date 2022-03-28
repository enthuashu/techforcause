import React, { useState } from "react";
import login from "../images/login.png";
import { Link, useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Register() {
  const history = useHistory();
  const [user, setuser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const PostData = async (e) => {
    e.preventDefault();
    try {
      const { name, phone, email, password, cpassword } = user;

      if (
        name.length === 0 ||
        phone.length === 0 ||
        email.length === 0 ||
        password.length === 0
      )
        return toast.error("Some details are missing!");
      if (!validateEmail(email)) return toast.error("Enter valid email");
      if (password.length < 4)
        return toast.error("Password should be atleast 4 characters");
      if (password !== cpassword)
        return toast.error("Password and confirm password should match");
      const data = {
        name,
        phone,
        email,
        password,
        cpassword,
      };
      await axios
        .post(`/api/register`, data)
        .then((res) => {
          if (res.data.success) {
            history.push("/login");
            toast.success("Successfully registered");
          }
        })
        .catch((err) => {
          toast.error(err.response.data.error, { position: "bottom-right" });
        });
    } catch (err) {
      console.log(err);
      return toast.error("Some thing went wrong");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div
        style={{ backgroundColor: "lightskyblue" }}
        class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
      >
        <div class="card card0 border-0">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-lg-6">
              <div class="card1 pb-5">
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img alt="logo" src={login} class="image" />
                </div>
                <p
                  className="text-center"
                  style={{ color: "darkblue", fontWeight: "bolder" }}
                >
                  Tech For Cause
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card2 card border-0 px-4 py-5">
                <h3
                  style={{
                    backgroundColor: "#311b92",
                    color: "#ffffff",
                    padding: "8px",
                    borderRadius: "0.5rem",
                  }}
                >
                  Register to Tech For Cause
                </h3>
                <form method="POST">
                  <div class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Enter Name</h6>
                    </label>
                    <input
                      class="mb-4"
                      type="text"
                      onChange={handleInputs}
                      value={user.name}
                      name="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Mobile No.</h6>
                    </label>
                    <input
                      class="mb-4"
                      type="number"
                      onChange={handleInputs}
                      value={user.phone}
                      name="phone"
                      placeholder="Enter Mobile No."
                    />
                  </div>
                  <div class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>
                    </label>
                    <input
                      class="mb-4"
                      type="email"
                      onChange={handleInputs}
                      value={user.email}
                      name="email"
                      placeholder="Enter a valid email address"
                    />
                  </div>
                  <div class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                      type="password"
                      onChange={handleInputs}
                      value={user.password}
                      name="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div class="row px-3">
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Confirm Password</h6>
                    </label>
                    <input
                      type="password"
                      onChange={handleInputs}
                      value={user.cpassword}
                      name="cpassword"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div class="row mb-3 px-3">
                    <button onClick={PostData} type="submit" class="btn">
                      Sign Up
                    </button>
                  </div>
                </form>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">
                    Already have an account?
                    <Link to="/login" class="text-danger ">
                      Sign in
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
