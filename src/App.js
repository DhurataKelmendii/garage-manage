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
import LandingPageImage from "./bg.jpg";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <Router>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Car garages
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <Link to={"/Home"} className="nav-link">
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Car
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={"/CarsList"} className="nav-link">
                    Car List
                  </Link>
                  <li className="nav-item">
                    <Link to={"/AddCar"} className="nav-link">
                      Add Car
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/EditCar"} className="nav-link">
                      Edit Car
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Garage
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={"/AddGarage"} className="nav-link">
                    Add Garage
                  </Link>
                  <li className="nav-item">
                    <Link to={"/GaragesList"} className="nav-link">
                      Garage list
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/EditGarage"} className="nav-link">
                      Garage Edit
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employee
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={"/AddEmpModel"} className="nav-link">
                    Add Employee
                  </Link>
                  <li className="nav-item">
                    <Link to={"/Employee"} className="nav-link">
                      Employee List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/EditEmpModel"} className="nav-link">
                      Edit Employee
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bus
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={"/AddBus"} className="nav-link">
                    Add Bus
                  </Link>
                  <li className="nav-item">
                    <Link to={"/EditBus"} className="nav-link">
                      Edit Bus
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/BusesList"} className="nav-link">
                      Bus List
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BusGarage
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to={"/AddBusGarage"} className="nav-link">
                    Add Bus
                  </Link>
                  <li className="nav-item">
                    <Link to={"/EditBusGarage"} className="nav-link">
                      Edit Bus
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/BusGaragesList"} className="nav-link">
                      Bus garage List
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="nav justify-content-end">
              <li class="nav-item ">
                <Link to={"/LoginForm"} className="nav-link">
                  Sign in
                </Link>
              </li>
              <li class="nav-item ">
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
