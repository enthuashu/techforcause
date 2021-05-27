import React, { useContext, useEffect } from "react";
import MainSvg from "./MainSvg";
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'


function Main() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext)

  const callPage = async () => {
    try {
      const res = await fetch('/checkbed', {

        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();

      dispatch({ type: "USER", payload: true })
      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;
      }

    } catch (error) {
      console.log(error);
      history.push('/')
    }
  }

  useEffect(() => {
    callPage();

  }, []);


  return (
    <div className=" main__section d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-lg-center justify-content-md-center align-items-lg-start align-items-center">
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: '1rem' }} >
              <h1 style={{ color: "darkblue", fontWeight: "bolder" }} className="font-weight-bold"> Home 2 Hospital</h1>
              <p style={{ textAlign: "left" }} className="text__main">
                <span style={{ color: "#311b92" }} >Home to Hospital (H2H)</span> is an initiative towards solving the problem of finding covid resources in a situation where time is of great essence. H2H is a non profitable service provider which works to provide ease to government and patient on a single platform, which shows details of availablity of bed, medicine, covid resources and some other medical services at a single spot.
            </p>

              <Link exact to='/about' >
                <button type="button" className="btn" >
                  Get to Know More
                 </button>
              </Link>

            </div>

          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center align-items-lg-start align-items-center ms-auto">
            <MainSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
