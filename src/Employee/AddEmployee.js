import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Employee/Employee.css";
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

function AddEmployee() {
  const [dataEmployee, setData] = useState({
    Name: "",
    Email: "",
    Gender: "",
  });

  const history = useHistory();

  const AddEmployee = () => {
    axios
      .post("http://localhost:65424/Api/Employee/CreateEmployee/", dataEmployee)
      .then((json) => {
        if (json.data) {
          alert("Data Save Successfully");
          history.push("/EmployeesList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataEmployee, [e.target.name]: e.target.value });
  };
  return (
    <Container className="App">
      <h4 className="PageHeading">Enter Employee Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="name" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Name"
                onChange={handleChange}
                value={dataEmployee.Name}
                placeholder="Enter Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Email"
                onChange={handleChange}
                value={dataEmployee.Email}
                placeholder="Enter Email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Gender" sm={2}>
              Gender
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Gender"
                onChange={handleChange}
                value={dataEmployee.Gender}
                placeholder="Enter Gender "
              />
            </Col>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup row>
            <Col sm={5}></Col>
            <Col sm={1}>
              <button
                type="button"
                onClick={() => AddEmployee()}
                className="btn btn-success"
              >
                Submit
              </button>
            </Col>
            <Col sm={1}>
              <Button City="danger">Cancel</Button>{" "}
            </Col>
            <Col sm={5}></Col>
          </FormGroup>
        </Col>
      </Form>
    </Container>
  );
}

export default AddEmployee;
