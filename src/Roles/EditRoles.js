import react, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Roles/Roles.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

function EditRoles(props) {
  const [dataRoles, setData] = useState({
    RoleName: "",
  });
  const history = useHistory();
  const id = props.match.params.id;

  const EditRoles = () => {
    axios
      .post("http://localhost:65424/Api/Roles/UpdateRoles/", dataRoles)
      .then((response) => {
        if (response.data) {
          alert("Data Save Successfully");
          history.push("/RolessList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataRoles, [e.target.name]: e.target.value }); //destructure
  };

  useEffect(() => {
    axios
      .get(`http://localhost:65424/Api/Roles/GetRolesById/${id}`)
      .then((response) => {
        if (response.data) {
          setData({
            Id: response.data.id,
            RoleName: response.data.rolename,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="App">
      <h4 className="PageHeading">Update Roles Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="RoleName" sm={2}>
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
                onClick={() => EditRoles()}
                className="btn btn-success"
              >
                Save
              </button>
            </Col>
            <Col sm={1}>
              <Button
                onClick={() => history.push("/RolessList")}
                color="danger"
              >
                Cancel
              </Button>
            </Col>
            <Col sm={5}></Col>
          </FormGroup>
        </Col>
      </Form>
    </Container>
  );
}

export default EditRoles;
