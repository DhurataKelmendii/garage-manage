import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Admin/Admin.css";
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

function AddAdmin() {
  const [dataAdmin, setData] = useState({
    Name: "",
    Email: "",
    Gender: "",
  });

  const history = useHistory();

  const AddAdmin = () => {
    axios
      .post("http://localhost:65424/Api/Admin/CreateAdmin/", dataAdmin)
      .then((json) => {
        if (json.data) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          history.push("/AdminsList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataAdmin, [e.target.name]: e.target.value });
  };
  return (
    <Container className="App">
      <h4 className="PageHeading">Enter Admin Informations</h4>
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
                value={dataAdmin.Name}
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
                value={dataAdmin.Email}
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
                value={dataAdmin.Gender}
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
                onClick={() => AddAdmin()}
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

export default AddAdmin;
