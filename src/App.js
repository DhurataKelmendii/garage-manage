import React from "react";
import { Form, Button } from "react-bootstrap";
import AddCar from "./Car/AddCar";
import CarsList from "./Car/CarsList";
import EditCar from "./Car/EditCar";
import AddGarage from "./Garage/AddGarage";
import GaragesList from "./Garage/GaragesList";
import EditGarage from "./Garage/EditGarage";
import AddBus from "./Bus/AddBus";
import BusesList from "./Bus/BusesList";
import EditBus from "./Bus/EditBus";
import AddBusGarage from "./BusGarage/AddBusGarage";
import BusGaragesList from "./Bus/BusesList";
import EditBusGarage from "./BusGarage/EditBusGarage";
import Employee from "./Employee/Employee";
import Home from "./Home";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <Router>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Car garages
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link to={"/Home"} className="nav-link"></Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Car
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/CarsList"} className="link">
                      Car List
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/AddCar"} className="link">
                      Add Car
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Garage
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/AddGarage"} className="link">
                      Add Garage
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/GaragesList"} className="link">
                      Garage list
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employee
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/AddEmpModel"} className="link">
                      Add Employee
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/Employee"} className="link">
                      Employee List
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bus
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/AddBus"} className="link">
                      Add Bus
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/BusesList"} className="link">
                      Bus List
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BusGarage
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/AddBusGarage"} className="link">
                      Add Bus Garage
                    </Link>
                  </li>

                  <li className="nav-link">
                    <Link to={"/BusGaragesList"} className="link">
                      Bus garage List
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav justify-content-end">
              <li className="nav-item ">
                <Link to={"/LoginForm"} className="nav-link">
                  Sign in
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/RegisterForm"} className="nav-link">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />

      <Switch>
        <Route exact path="/AddCar" component={AddCar} />
        <Route path="/EditCar/:id" component={EditCar} />
        <Route path="/CarsList" component={CarsList} />
        <Route exact path="/AddGarage" component={AddGarage} />
        <Route path="/GaragesList" component={GaragesList} />
        <Route path="/EditGarage/:id" component={EditGarage} />
        <Route path="/employee" component={Employee} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/RegisterForm" component={RegisterForm} />
        <Route exact path="/AddBus" component={AddBus} />
        <Route path="/EditBus/:id" component={EditBus} />
        <Route path="/BusesList" component={BusesList} />
        <Route exact path="/AddBusGarage" component={AddBusGarage} />
        <Route path="/EditBusGarage/:id" component={EditBusGarage} />
        <Route path="/BusGaragesList" component={BusGaragesList} />
      </Switch>
    </Router>
  );
}
export default App;
