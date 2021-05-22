import React, { useState } from "react";
import login from "../images/login.png";
import { Link, useHistory } from "react-router-dom";
import isemail from 'isemail'

function Register() {
  const history = useHistory();
  const [user, setuser] = useState({
    name: "", phone: "", email: "", password: "", cpassword: ""
  })
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({
      ...user, [name]: value
    })
  }


  const PostData = async (e) => {
    e.preventDefault();
    const { name, phone, email, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, phone, email, password, cpassword
      })
    });


    if (res.status === 422) {
      window.alert("Please Fill the Details Properly!")
    } else if (res.status === 350) {
      window.alert("EmailID already Exists")
    } else if (res.status === 300) {
      window.alert("Password and Confirm password are not matching!")
    } else if (isemail.validate(email) !== true) {
      window.alert("You have entered an Invalid EmailId")
    } else if (password.length < 6) {
      window.alert("Your Password must be atleast 6 characters long!")
    } else if (phone.length < 10) {
      window.alert("You have entered an Invalid Phone number")
    } else if (res.status === 201) {
      window.alert("You have been Successfully Registered at H2H! Login with your Email and Password.")
      setuser({ name: "", phone: "", email: "", password: "", cpassword: "" })
      history.push("/login")
    } else {
      window.alert("Please Fill the Details Properly!")
    }

  }




  return (
    <div>
      <div style={{ backgroundColor: "lightskyblue" }} class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-lg-6">
              <div class="card1 pb-5">
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">

                  <img alt="logo" src={login} class="image" />
                </div>
                <p className="text-center" style={{ color: "darkblue", fontWeight: "bolder" }} >Home 2 Hospital</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card2 card border-0 px-4 py-5">
                <h3 style={{ backgroundColor: "#311b92", color: "#ffffff", padding: '8px', borderRadius: '0.5rem' }} >Register to Home 2 Hospital</h3>
                <form
                  method="POST">
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
                      <h6 class="mb-0 text-sm">Email Mobile No.</h6>
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
