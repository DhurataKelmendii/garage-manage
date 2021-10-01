import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../App.css";
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

function AddBusGarage() {
  const [dataBusGarage, setData] = useState({
    Name: "",
    CapacityOfBuses: "",
    City: "",
    Country: "",
    Street: "",
    PricePerDay: "",
    BusesUsing: "",
  });

  const history = useHistory();

  const AddBusGarage = () => {
    axios
      .post(
        "http://localhost:65424/Api/BusGarage/CreateBusGarage/",
        dataBusGarage
      )
      .then((json) => {
        if (json.data) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          history.push("/BusGaragesList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataBusGarage, [e.target.name]: e.target.value });
  };
  return (
    <Container className="App">
      <h4 className="PageHeading">Enter BusGarage Informations</h4>
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
                value={dataBusGarage.Name}
                placeholder="Enter Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="CapacityOfBuses" sm={2}>
              CapacityOfBuses
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="CapacityOfBuses"
                onChange={handleChange}
                value={dataBusGarage.CapacityOfBuses}
                placeholder="Enter CapacityOfBuses"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Country" sm={2}>
              Country
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Country"
                onChange={handleChange}
                value={dataBusGarage.Country}
                placeholder="Enter Country "
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="City" sm={2}>
              City
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="City"
                onChange={handleChange}
                value={dataBusGarage.City}
                placeholder="Enter City"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Street" sm={2}>
              Street
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Street"
                onChange={handleChange}
                value={dataBusGarage.Street}
                placeholder="Enter Street"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="PricePerDay" sm={2}>
              PricePerDay
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="PricePerDay"
                onChange={handleChange}
                value={dataBusGarage.PricePerDay}
                placeholder="Enter PricePerDay"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="BusesUsing" sm={2}>
              BusesUsing
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="BusesUsing"
                onChange={handleChange}
                value={dataBusGarage.BusesUsing}
                placeholder="Enter BusesUsing"
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
                onClick={() => AddBusGarage()}
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

export default AddBusGarage;
