import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Roles/Roles.css";
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

function AddRoles() {
  const [dataRoles, setData] = useState({
    RoleName: "",
  });

  const history = useHistory();

  const AddRoles = () => {
    axios
      .post("http://localhost:65424/Api/Roles/CreateRoles/", dataRoles)
      .then((json) => {
        if (json.data) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          history.push("/RolessList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataRoles, [e.target.name]: e.target.value });
  };
  return (
    <Container className="App">
      <h4 className="PageHeading">Enter Roles Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="name" sm={2}>
              RoleName
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="RoleName"
                onChange={handleChange}
                value={dataRoles.RoleName}
                placeholder="Enter RoleName"
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
                onClick={() => AddRoles()}
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

export default AddRoles;
