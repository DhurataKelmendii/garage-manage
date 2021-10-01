import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Register/RegisterForm.css";
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

function RegisterForm() {
  const [dataUser, setData] = useState({
    Email: "",
    Password: "",
    Address: "",
    City: "",
    PhoneNumber: "",
  });

  const history = useHistory();

  const RegisterForm = () => {
    axios
      .post("http://localhost:65424/Api/User/CreateUserApplication/", dataUser)
      .then((json) => {
        if (json.data) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          history.push("/");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataUser, [e.target.name]: e.target.value });
  };

  return (
    <Container className="Appp">
      <main className="form-signin">
        <Form>
          <Row className="mb-3">
            <FormGroup as={Col}>
              <Label>Email</Label>
              <Input
                name="Email"
                type="text"
                onChange={handleChange}
                value={dataUser.Email}
                placeholder="Email"
              />
            </FormGroup>

            <FormGroup as={Col}>
              <Label>Password</Label>
              <Input
                name="Password"
                type="Password"
                onChange={handleChange}
                value={dataUser.Password}
                placeholder="Password"
              />
            </FormGroup>
          </Row>

          <FormGroup className="mb-3">
            <Label>Address</Label>
            <Input
              name="Address"
              type="text"
              onChange={handleChange}
              value={dataUser.Address}
              placeholder="Address"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label>Phone Number</Label>
            <Input
              name="PhoneNumber"
              type="text"
              onChange={handleChange}
              value={dataUser.PhoneNumber}
              placeholder="Phone Number"
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label>City</Label>
            <Input
              name="City"
              type="text"
              onChange={handleChange}
              value={dataUser.City}
              placeholder="City"
            />
          </FormGroup>

          <Col>
            <button
              type="button"
              onClick={() => RegisterForm()}
              className="btn btn-primary"
            >
              Register
            </button>
          </Col>
        </Form>
      </main>
    </Container>
  );
}

export default RegisterForm;
