import { initialState, reducer } from "../src/component/reducer/UseReducer"
import React, { createContext, useReducer } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Caraousel from "./component/Caraousel";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
import Main from "./component/Main";
import NavBar from "./component/NavBar";
import Login from "./component/Login";
import Register from "./component/Register";

import Hospital from './component/services/Hospital'
import Food from "./component/services/Food";
import Bed from "./component/services/Bed";
import Medicine from "./component/services/Medicine";
import Plasma from "./component/services/Plasma";
import Volunteer from "./component/services/Volunteer";
import Oxygen from "./component/services/Oxygen";
import About from "./component/About";
import Welcome from "./component/private/Welcome"
import Mainservice from "./component/Mainservice";
import Logout from "./component/Logout";
export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }} >
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Main />
            <Mainservice />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/oxygen">
            <NavBar />
            <Oxygen />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/hospital">
            <NavBar />
            <Hospital />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/beds">
            <NavBar />
            <Bed />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>

          <Route exact path="/food">
            <NavBar />
            <Food />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/medicine">
            <NavBar />
            <Medicine />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/plasma">
            <NavBar />
            <Plasma />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/volunteer">
            <NavBar />
            <Volunteer />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>

          <Route exact path="/login">
            <NavBar />
            <Login />
            <Footer />
          </Route>
          <Route exact path="/register">
            <NavBar />
            <Register />
            <Footer />
          </Route>
          <Route exact path="/contacts">
            <NavBar />
            <ContactUs />
            <Caraousel />
            <Footer />
          </Route>
          <Route exact path="/about">
            <NavBar />
            <About />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/welcome">
            <NavBar />
            <Welcome />
            <Caraousel />
            <ContactUs />
            <Footer />
          </Route>
          <Route exact path="/logout">

            <Logout />

          </Route>
          <Redirect to="/" />
        </Switch>

      </UserContext.Provider>

    </div>
  );
}

export default App;
