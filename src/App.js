import React from "react";
import { Form, Button } from "react-bootstrap";
import AddCar from "./Car/AddCar";
import CarsList from "./Car/CarsList";
import EditCar from "./Car/EditCar";
import AddGarage from "./Garage/AddGarage";
import GaragesList from "./Garage/GaragesList";
import EditGarage from "./Garage/EditGarage";
import AddBus from "./Bus/AddBus";
import BusList from "./Bus/BusList";
import EditBus from "./Bus/EditBus";
import AddPlace from "./Place/AddPlace";
import PlacesList from "./Place/PlacesList";
import EditPlace from "./Place/EditPlace";
import AddAdmin from "./Admin/AddAdmin";
import AdminsList from "./Admin/AdminsList";
import EditAdmin from "./Admin/EditAdmin";
import AddRoles from "./Roles/AddRoles";
import RolessList from "./Roles/RolessList";
import EditRoles from "./Roles/EditRoles";
import AddBusGarage from "./BusGarage/AddBusGarage";
import BusGaragesList from "./BusGarage/BusGaragesList";
import EditBusGarage from "./BusGarage/EditBusGarage";
import AddEmployee from "./Employee/AddEmployee";
import EmployeesList from "./Employee/EmployeesList";
import AddCategory from "./Category/AddCategory";
import CategoryList from "./Category/CategoryList";
import EditCategory from "./Category/EditCategory";
import Home from "./Home";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Image from "react-bootstrap/Image";
import EditEmployee from "./Employee/EditEmployee";

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
                  Place
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/PlacesList"} className="link">
                      place List
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/AddPlace"} className="link">
                      Add place
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
                    <Link to={"/BussList"} className="link">
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/AddCategory"} className="link">
                      Add category
                    </Link>
                  </li>

                  <li className="nav-link">
                    <Link to={"/CategoryList"} className="link">
                      Category List
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
                    <Link to={"/AddEmployee"} className="link">
                      Add Employee
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/EmployeesList"} className="link">
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
                  Admin
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/AdminsList"} className="link">
                      AdminList
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/AddAdmin"} className="link">
                      Add Admin
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
                  Roles
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/RolessList"} className="link">
                      RolesList
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/AddRoles"} className="link">
                      Add Role
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
        <Route path="/EditEmployee/:id" component={EditEmployee} />
        <Route path="/AddEmployee" component={AddEmployee} />
        <Route path="/AddCategory" component={AddCategory} />
        <Route path="/EditCategory/:id" component={EditCategory} />
        <Route path="/CategoryList" component={CategoryList} />
        <Route path="/EmployeesList" component={EmployeesList} />
        <Route path="/AdminsList" component={AdminsList} />
        <Route path="/EditAdmin/:id" component={EditAdmin} />
        <Route exact path="/AddAdmin" component={AddAdmin} />
        <Route path="/RolessList" component={RolessList} />
        <Route path="/EditRoles/:id" component={EditRoles} />
        <Route exact path="/AddRoles" component={AddRoles} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/RegisterForm" component={RegisterForm} />
        <Route exact path="/AddBus" component={AddBus} />
        <Route path="/EditBus/:id" component={EditBus} />
        <Route exact path="/AddPlace" component={AddPlace} />
        <Route path="/EditPlace/:id" component={EditPlace} />
        <Route path="/PlacesList" component={PlacesList} />
        <Route path="/BusList" component={BusList} />
        <Route exact path="/AddBusGarage" component={AddBusGarage} />
        <Route path="/EditBusGarage/:id" component={EditBusGarage} />
        <Route path="/BusGaragesList" component={BusGaragesList} />
      </Switch>
    </Router>
  );
}
export default App;
