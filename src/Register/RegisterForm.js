import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./RegisterForm.css";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
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
          alert("Data Save Successfully");
          localStorage.setItem('token', 'true');
          history.push("/Dashboard");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const LoginForm = () => {
    history.push("/LoginForm");
  }

  const handleChange = (e) => {
    setData({ ...dataUser, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <main className="form-signin">
        <Form className="form-signin-bg">
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
            <Label>City</Label>
            <Input
              name="City"
              type="text"
              onChange={handleChange}
              value={dataUser.City}
              placeholder="City"
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


          <Col className="btn-flex">
            <button
              type="button"
              onClick={() => RegisterForm()}
              className="btn btn-primary"
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => LoginForm()}
              className="btn btn-primary "
            >
              LogIn
            </button>
          </Col>
        </Form>
      </main>
    </Container>
  );
}

export default RegisterForm;
