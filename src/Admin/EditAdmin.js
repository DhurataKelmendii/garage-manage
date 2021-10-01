import react, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Admin/Admin.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

function EditAdmin(props) {
  const [dataAdmin, setData] = useState({
    Name: "",
    Email: "",
    Gender: "",
  });
  const history = useHistory();
  const id = props.match.params.id;

  const EditAdmin = () => {
    axios
      .post("http://localhost:65424/Api/Admin/UpdateAdmin/", dataAdmin)
      .then((response) => {
        if (response.data) {
          alert("Data Save Successfully");
          history.push("/AdminsList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataAdmin, [e.target.name]: e.target.value }); //destructure
  };

  useEffect(() => {
    axios
      .get(`http://localhost:65424/Api/Admin/GetAdminById/${id}`)
      .then((response) => {
        if (response.data) {
          setData({
            Id: response.data.id,
            Name: response.data.name,
            Email: response.data.email,
            Gender: response.data.gender,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="App">
      <h4 className="PageHeading">Update Admin Informations</h4>
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
                onClick={() => EditAdmin()}
                className="btn btn-success"
              >
                Save
              </button>
            </Col>
            <Col sm={1}>
              <Button
                onClick={() => history.push("/AdminsList")}
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

export default EditAdmin;
