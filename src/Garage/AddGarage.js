import React from "react";
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
class AddGarage extends React.Component {
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
  // AddGarage=()=>{
  //   axios.post('http://localhost:65424/Api/Garage/Create/', {Name:this.state.Name,CapacityOfCars :this.state.CapacityOfCars ,
  //   Country :this.state.Country , NumberOfSeats:this.state.NumberOfSeats, City :this.state.City , EngineType:this.state.EngineType, FuelType:this.state.FuelType, IsDeleted:this.state.IsDeleted, Price:this.state.Price, YearOfProduction:this.state.YearOfProduction})
  // .then(json => {
  // if(json.data.Status==='Success'){
  //   console.log(json.data.Status);
  //   alert("Data Save Successfully");
  // this.props.history.push('/GaragesList')
  // }
  // else{
  // alert('Data not Saved');
  // debugger;
  // this.props.history.push('/GaragesList')
  // }
  // })
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
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
                  onClick={this.AddGarage}
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

export default AddGarage;
