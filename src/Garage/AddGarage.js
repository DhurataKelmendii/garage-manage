import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Garage/Garage.css";
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

function AddGarage (){
  const [dataGarage, setData] = useState({
      Name: "",
      CapacityOfCars: "",
      City: "",
      Country: "",
      Street: "",
      PricePerDay: "",
      CarsUsing: "",
    });

    const history = useHistory();

  const AddGarage = () =>{
    axios.post('http://localhost:65424/Api/Garage/CreateGarage/', dataGarage)
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

const handleChange = (e) => {
  setData({ ...dataGarage, [e.target.name]: e.target.value });
};
    return (
      <Container className="App">
        <h4 className="PageHeading">Enter Garage Informations</h4>
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
                value={dataGarage.Name}
                placeholder="Enter Name"
              />
            </Col>
          </FormGroup>
            <FormGroup row>
              <Label for="CapacityOfCars" sm={2}>
                CapacityOfCars
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="CapacityOfCars"
                  onChange={handleChange}
                  value={dataGarage.CapacityOfCars}
                  placeholder="Enter CapacityOfCars"
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
                  value={dataGarage.Country}
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
                  value={dataGarage.City}
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
                  value={dataGarage.Street}
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
                  value={dataGarage.PricePerDay}
                  placeholder="Enter PricePerDay"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="CarsUsing" sm={2}>
                CarsUsing
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="CarsUsing"
                  onChange={handleChange}
                  value={dataGarage.CarsUsing}
                  placeholder="Enter CarsUsing"
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
                  onClick={() => AddGarage()}
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


export default AddGarage;
