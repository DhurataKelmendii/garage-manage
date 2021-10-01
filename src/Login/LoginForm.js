import react, { useState } from "react";
import { Route, Router, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import "../Login/LoginForm.css";
import App from "../App";
import { Container, Col, Form, Row, FormGroup, Label, Input } from "reactstrap";

function LoginForm() {
  const [dataUser, setData] = useState({
    Email: "",
    Password: "",
  });

  const history = useHistory();
  const LoginForm = () => {
    axios
      .post("http://localhost:65424/Api/User/Login/", dataUser)
      .then((response) => {
        console.log();
        if (response.data) {
          alert("Data Save Successfully");
          history.push("/App");
        } else {
          alert("User does not existtttt!");
        }
      });
    // .catch((error) => {
    //   alert("User does not exist!");
    // });
  };

  const handleChange = (e) => {
    setData({ ...dataUser, [e.target.name]: e.target.value });
  };

  return (
    <Container className="Appp">
      <main className="form-signin">
        <Form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <Row className="mb-3">
            <FormGroup as={Col}>
              <Label>Email</Label>
              <Input
                type="text"
                name="Email"
                onChange={handleChange}
                value={dataUser.Email}
                placeholder="Enter Email"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <Label>Password</Label>
              <Input
                type="text"
                name="Password"
                onChange={handleChange}
                value={dataUser.Password}
                placeholder="Enter Password"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col} className="checkbox mb-3">
              <Label>Remember me</Label>
              <Input type="checkbox" label="Remember me" />
            </FormGroup>
          </Row>
          {/* <Col className="w-100 btn btn-lg btn-primary"> */}
          <Col>
            <button
              type="button"
              onClick={() => LoginForm()}
              className="btn btn-primary"
            >
              Sign in
            </button>
          </Col>
        </Form>
      </main>
    </Container>
  );
}

export default LoginForm;
