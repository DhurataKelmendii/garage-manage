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

function EditBus(props) {
  const [dataBus, setDataBus] = useState({
    BusName: "",
  });
  const history = useHistory();
  const id = props.match.params.id;

  const EditBus = () => {
    axios
      .post("http://localhost:65424/Api/Bus/Update/", dataBus)
      .then((json) => {
        if (json.data) {
          alert("Data Save Successfully");
          history.push("/BusList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setDataBus({ ...dataBus, [e.target.name]: e.target.value }); //destructure
  };

  useEffect(() => {
    axios
      .get(`http://localhost:65424/Api/Bus/GetById/${id}`)
      .then((response) => {
        if (response.data) {
          setDataBus({
            Id: response.data.id,
            Name: response.data.name,
            Brand: response.data.brand,
            Color: response.data.color,
            ChassisNumber: response.data.chassisNumber,
            NumberOfSeats: response.data.numberOfSeats,
            EngineType: response.data.engineType,
            FuelType: response.data.fuelType,
            YearOfProduction: response.data.yearOfProduction,
            Price: response.data.price,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="App">
      <h4 className="PageHeading">Update Bus Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="Name" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Name"
                onChange={handleChange}
                value={dataBus.Name}
                placeholder="Enter  Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Brand" sm={2}>
              Brand
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Brand"
                onChange={handleChange}
                value={dataBus.Brand}
                placeholder="Enter Brand"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="YearOfProduction" sm={2}>
              YearOfProduction
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="YearOfProduction"
                onChange={handleChange}
                value={dataBus.YearOfProduction}
                placeholder="Enter YearOfProduction"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Price" sm={2}>
              Price
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Price"
                onChange={handleChange}
                value={dataBus.Price}
                placeholder="Enter Price "
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="NumberOfSeats" sm={2}>
              City
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="NumberOfSeats"
                onChange={handleChange}
                value={dataBus.NumberOfSeats}
                placeholder="Enter NumberOfSeats"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="EngineType" sm={2}>
              EngineType
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="EngineType"
                onChange={handleChange}
                value={dataBus.EngineType}
                placeholder="Enter EngineType"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="FuelType" sm={2}>
              FuelType
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="FuelType"
                onChange={handleChange}
                value={dataBus.FuelType}
                placeholder="Enter FuelType"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="ChassisNumber" sm={2}>
              ChassisNumber
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="ChassisNumber"
                onChange={handleChange}
                value={dataBus.ChassisNumber}
                placeholder="Enter ChassisNumber"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Color" sm={2}>
              Color
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Color"
                onChange={handleChange}
                value={dataBus.Color}
                placeholder="Enter Color"
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
                onClick={() => EditBus()}
                className="btn btn-success"
              >
                Save
              </button>
            </Col>
            <Col sm={1}>
              <Button onClick={() => history.push("/BusList")} color="danger">
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

export default EditBus;
