import react, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../App.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

function EditBusGarage(props) {
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
  const id = props.match.params.id;

  const EditBusGarage = () => {
    axios
      .post(
        "http://localhost:65424/Api/BusGarage/UpdateBusGarage/",
        dataBusGarage
      )
      .then((response) => {
        if (response.data) {
          alert("Data Save Successfully");
          history.push("/BusGaragesList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataBusGarage, [e.target.name]: e.target.value }); //destructure
  };

  useEffect(() => {
    axios
      .get(`http://localhost:65424/Api/BusGarage/GetBusGarageById/${id}`)
      .then((response) => {
        if (response.data) {
          setData({
            Id: response.data.id,
            Name: response.data.name,
            CapacityOfBuses: response.data.capacityOfBuses,
            Country: response.data.country,
            City: response.data.city,
            Street: response.data.street,
            PricePerDay: response.data.pricePerDay,
            BusesUsing: response.data.busesUsing,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="App">
      <h4 className="PageHeading">Update BusGarage Informations</h4>
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
                name="CapacityOfCars"
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
                onClick={() => EditBusGarage()}
                className="btn btn-success"
              >
                Save
              </button>
            </Col>
            <Col sm={1}>
              <Button onClick={() => history.push("/BusGaragesList")}>
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

export default EditBusGarage;
