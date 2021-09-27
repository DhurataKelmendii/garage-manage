import React from "react";
import axios from "axios";
import "../BusGarage/BusGarage.css";
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
class AddBusGarage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      CapacityOfCars: "",
      City: "",
      Country: "",
      Street: "",
      PricePerDay: "",
      CarsUsing: "",
    };
  }
  // AddBusGarage=()=>{
  //   axios.post('http://localhost:65424/Api/BusGarage/Create/', {Name:this.state.Name,CapacityOfCars :this.state.CapacityOfCars ,
  //   Country :this.state.Country , NumberOfSeats:this.state.NumberOfSeats, City :this.state.City , EngineType:this.state.EngineType, FuelType:this.state.FuelType, IsDeleted:this.state.IsDeleted, Price:this.state.Price, YearOfProduction:this.state.YearOfProduction})
  // .then(json => {
  // if(json.data.Status==='Success'){
  //   console.log(json.data.Status);
  //   alert("Data Save Successfully");
  // this.props.history.push('/BusGaragesList')
  // }
  // else{
  // alert('Data not Saved');
  // debugger;
  // this.props.history.push('/BusGaragesList')
  // }
  // })
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
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
                  onChange={this.handleChange}
                  value={this.state.Name}
                  placeholder="Enter Name"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="CapacityOfCars " sm={2}>
                CapacityOfCars
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="CapacityOfCars "
                  onChange={this.handleChange}
                  value={this.state.CapacityOfCars}
                  placeholder="Enter CapacityOfCars "
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Country " sm={2}>
                Country
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Country "
                  onChange={this.handleChange}
                  value={this.state.Country}
                  placeholder="Enter Country "
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Street  " sm={2}>
                Street
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Street  "
                  onChange={this.handleChange}
                  value={this.state.Street}
                  placeholder="Enter Street  "
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="PricePerDay  " sm={2}>
                PricePerDay
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="PricePerDay  "
                  onChange={this.handleChange}
                  value={this.state.PricePerDay}
                  placeholder="Enter PricePerDay  "
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="CarsUsing  " sm={2}>
                CarsUsing
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="CarsUsing  "
                  onChange={this.handleChange}
                  value={this.state.CarsUsing}
                  placeholder="Enter CarsUsing  "
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="City " sm={2}>
                City
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="City "
                  onChange={this.handleChange}
                  value={this.state.City}
                  placeholder="Enter City "
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
                  onClick={this.AddBusGarage}
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
}

export default AddBusGarage;
