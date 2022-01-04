import React from "react";
import AddCar from "../Car/AddCar";
import CarsList from "../Car/CarsList";
import EditCar from "../Car/EditCar";
import AddGarage from "../Garage/AddGarage";
import GaragesList from "../Garage/GaragesList";
import EditGarage from "../Garage/EditGarage";
import AddBus from "../Bus/AddBus";
import BusList from "../Bus/BusList";
import EditBus from "../Bus/EditBus";
import AddPlace from "../Place/AddPlace";
import PlacesList from "../Place/PlacesList";
import EditPlace from "../Place/EditPlace";
import AddAdmin from "../Admin/AddAdmin";
import AdminsList from "../Admin/AdminsList";
import EditAdmin from "../Admin/EditAdmin";
import AddRoles from "../Roles/AddRoles";
import RolessList from "../Roles/RolessList";
import EditRoles from "../Roles/EditRoles";
import AddBusGarage from "../BusGarage/AddBusGarage";
import BusGaragesList from "../BusGarage/BusGaragesList";
import EditBusGarage from "../BusGarage/EditBusGarage";
import AddEmployee from "../Employee/AddEmployee";
import EmployeesList from "../Employee/EmployeesList";
import AddCategory from "../Category/AddCategory";
import CategoryList from "../Category/CategoryList";
import EditCategory from "../Category/EditCategory";
import AddReservation from "../Reservation/AddReservation";
import ReservationsList from "../Reservation/ReservationsList";
import EditReservation from "../Reservation/EditReservation";
import UsersList from "../User/UsersList";
import Home from "../Home";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import EditEmployee from "../Employee/EditEmployee";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useState } from "react";
import ActiveJobs from "../components/ActiveJobs";
import TotalJobViews from "../components/TotalJobViews";
import MostPopularJob from "../components/MostPopularJob";
import JobCredits from "../components/JobCredits";

const initialPositions = [
  {
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    col: 3,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    col: 4,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    col: 3,
    colSpan: 2,
    rowSpan: 2,
  },
];

const getPositions = (initialPositions) => {
  // Try to get positions from local storage
  // If we have none in the storage then default to initial positions
  return (
    JSON.parse(localStorage.getItem("dashboard-positions")) || initialPositions
  );
};
function Dashboard() {
  const [positions, setPositions] = useState(getPositions(initialPositions));

  const widgets = [
    {
      header: "Total Garages",
      body: <TotalJobViews />,
    },
    {
      header: "Total Cars",
      body: <ActiveJobs />,
    },
    {
      header: "Total Buses",
      body: <JobCredits />,
    },
    {
      header: "Garage Status Graph ",
      body: <MostPopularJob />,
    },
  ];

  const handleReposition = (e) => {
    setPositions(e.value);
    localStorage.setItem("dashboard-positions", JSON.stringify(e.value));
  };
  const token = localStorage.getItem("token");
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/LoginForm");
  };

  return (
    <Router>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to={"/App"} className="linki">
              Manage garages
            </Link>
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
                      Place List
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
                  Reservation
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/AddReservation"} className="link">
                      Add Reservation
                    </Link>
                  </li>

                  <li className="nav-link">
                    <Link to={"/ReservationsList"} className="link">
                      Reservation List
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
                      Admin List
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
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/UsersList"} className="link">
                      Users List
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
                {token ? (
                  <p onClick={() => logOut()} className="nav-link">
                    Log out
                  </p>
                ) : (
                  <Link to={"/LoginForm"} className="nav-link">
                    Sign in
                  </Link>
                )}
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

      <div className="Dashb">
        <h1>Garage management</h1>
        <TileLayout
          style={{
            backgroundColor: "rgba(252, 247, 247, 0.63)",
            BorderRadius: "10px",
          }}
          className="tileLayout "
          columns={4}
          rowHeight={255}
          positions={positions}
          gap={{ rows: 10, columns: 10 }}
          items={widgets}
          onReposition={handleReposition}
        />
      </div>

      <Container className=" AboutUs ">
        <div className=" col-md-10 Aboutt">
          <div className="row">
            <h1 className="title"></h1>
            <div className="col-md-6 About1">
              <p className="contentt">About Us</p>
            </div>

            <div className="col-md-6 About">
              <p className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="Footer">
        <div className="row">
          <div className="col-lg-12 Footer">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-itemm">
                <p>Copyright © LuizaIzeti&DhurataKelmendi</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>

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
        <Route exact path="/AddReservation" component={AddReservation} />
        <Route path="/EditReservation/:id" component={EditReservation} />
        <Route path="/ReservationsList" component={ReservationsList} />
        <Route path="/UsersList" component={UsersList} />
      </Switch>
    </Router>
  );
}
export default Dashboard;
