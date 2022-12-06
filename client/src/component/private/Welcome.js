import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import img5 from "./images/2.png";
import img3 from "./images/3.jpg";

import img4 from "./images/5.jpg";

import img1 from "./images/8.jpg";

import img2 from "./images/10.png";
import Mainservice from "../Mainservice";
import { UserContext } from "../../App";

const Welcome = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [userdata, setdata] = useState("");
  const callPage = async () => {
    try {
      const res = await fetch("/checkbed", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setdata(data.name);
      dispatch({ type: "USER", payload: true });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };

  useEffect(() => {
    callPage();
  }, []);

  return (
    <div>
      <div
        class="container-fluid"
        style={{
          textAlign: "center",
          backgroundColor: "#311b92",
          color: "white",
        }}
      >
        <br />
        <h3 class="display-8">
          WELCOME TO OFFICIAL DASHBOARD OF Medical Support Services Portal
          (MSSP)
        </h3>
        <span
          style={{
            backgroundColor: "#ffffff",
            color: "#311b92",
            padding: "8px",
            margin: "50px",
            borderRadius: "0.5rem",
          }}
        >
          Hello ! {userdata}{" "}
        </span>
        <br />
        <br />
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
        data-interval="1000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "300px", width: "100%" }}
              src={img1}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "300px", width: "100%" }}
              src={img2}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "300px", width: "100%" }}
              src={img3}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "300px", width: "100%" }}
              src={img4}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "300px", width: "100%" }}
              src={img5}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Mainservice />
    </div>
  );
};

export default Welcome;
