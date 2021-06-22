import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import login from "../images/login.png";
import { UserContext } from '../App'

function Login() {

  const { state, dispatch } = useContext(UserContext)

  const history = useHistory();
  const [user, setuser] = useState({
    email: "",
    password: ""
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
    const { email, password } = user;
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    if (!email || !password) {
      window.alert("Please Enter your Email and Password")
    } else if (res.status === 201) {
      dispatch({ type: "USER", payload: true })
      window.alert("Welcome to Home 2 Hospital!")
      setuser({ email: "", password: "" });
      history.push("/welcome")
    } else {
      window.alert("Invalid Credentials")
    }


  }



  return (
    <div>
      <div style={{ backgroundColor: "lightskyblue" }} class="container-fluid  px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-lg-6">
              <div class="card1 pb-5">
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">

                  <img src={login} alt="logo" class="image" />
                </div>
                <p className="text-center" style={{ color: "darkblue", fontWeight: "bolder" }}>Home 2 Hospital</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card2 card border-0 px-4 py-5">
                <h3 style={{ backgroundColor: "#311b92", color: "#ffffff", padding: '8px', borderRadius: '0.5rem' }} >Login to Home 2 Hospital</h3>

                <div class="row px-3 mb-4">

                </div>
                <div class="row px-3">

                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Email Address</h6>
                  </label>
                  <input
                    class="mb-4"
                    type="email"
                    name="email"
                    onChange={handleInputs}
                    value={user.name}
                    placeholder="Enter a valid email address"
                  />
                </div>
                <div class="row px-3">

                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Password</h6>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInputs}
                    value={user.password}
                    placeholder="Enter password"
                  />
                </div>

                <div class="row mb-3 px-3">

                  <button onClick={PostData} type="submit" class="btn">
                    Login
                  </button>
                </div>
                <div class="row mb-4 px-3">

                  <small class="font-weight-bold">
                    Don't have an account?
                    <Link to="/register" class="text-danger ">
                      Register
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

export default Login;
