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

function RegisterForm (){
  const [dataUser, setData] = useState({
      Email: "",
      Password: "",
      Address: "",
      City: "",
      Zip: "",
      State: "",
      PhoneNumber: "",
    });

  const history = useHistory();

  const RegisterForm = () =>{
    axios.post('http://localhost:65424/Api/User/CreateUserApplication/', dataUser)
    .then((json) => {
      if (json.data) {
        console.log(json.data.Status);
        alert("Data Save Successfully");
        history.push("/GaragesList");
      } else {
        alert("Data not Saved");
      }
    });
};

  return (
    <Container className="Appp">
    <main className="form-signin">
      <Form>
        <Row className="mb-3">
          <FormGroup as={Col} >
            <Label>Email</Label>
            <Input type="text" placeholder="Enter email" />
          </FormGroup>

          <FormGroup as={Col} >
            <Label>Password</Label>
            <Input type="text" placeholder="Password" />
          </FormGroup>
        </Row>

        <FormGroup className="mb-3" >
          <Label>Address</Label>
          <Input type="text" placeholder="Address" />
        </FormGroup>

        <FormGroup className="mb-3" >
          <Label>Phone Number</Label>
          <Input type="text" placeholder="Phone Number" />
        </FormGroup>

        <FormGroup className="mb-3" >
          <Label>Address</Label>
          <Input type="text" placeholder="Address" />
        </FormGroup>
        <Row className="mb-3">
          <FormGroup as={Col}>
            <Label>City</Label>
            <Input type="text" placeholder="City" />
          </FormGroup>

          {/* <FormGroup as={Col} controlId="formGridState">
            <Label>State</Label>
            <Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Select>
          </FormGroup> */}

          <FormGroup as={Col} >
            <Label>Zip</Label>
            <Input type="text" placeholder="Zip" />
          </FormGroup>
        </Row>

        <FormGroup className="mb-3" >
        <Label>Check me out</Label>
          <Input type="checkbox" label="Check me out" />
        </FormGroup>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </main>
    </Container>
  );
}

export default RegisterForm;
