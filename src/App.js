import React from "react";
import AddGarage from "./Garage/AddGarage";
import AddCar from "./Car/AddCar";
import CarsList from "./Car/CarsList";
import EditCar from "./Car/EditCar";
import { Employee } from "./Employee";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Employee
                </a>
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
                    <Link to={"/AddCar"} className="nav-link">
                      Edit Garage
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/EditCar"} className="nav-link">
                      Garage List
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
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <br />
      <Switch>
        <Route exact path="/AddCar" component={AddCar} />
        <Route path="/EditCar/:id" component={EditCar} />
        <Route path="/CarsList" component={CarsList} />
        <Route exact path="/AddGarage" component={AddGarage} />
        <Route path="/employee" component={Employee} />
      </Switch>
    </Router>
  );
}

export default App;
