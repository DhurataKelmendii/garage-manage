import React from "react";
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
import axios from "axios";
import "../Bus/Bus.css";
class EditBus extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeChassisNumber = this.onChangeChassisNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: "",
      Brand: "",
      Color: "",
      ChassisNumber: "",
    };
  }

  //   componentDidMount() {
  //       axios.get('http://localhost:65424/Api/Bus/GetById?id='+this.props.match.params.id)
  //           .then(response => {
  //               this.setState({
  //                 Name: response.data.Name,
  //                 Brand: response.data.Brand,
  //                 Color: response.data.Color,
  //                 ChassisNumber: response.data.ChassisNumber });

  //           })
  //           .catch(function (error) {
  //               console.log(error);
  //           })
  //     }

  onChangeName(e) {
    this.setState({
      Name: e.target.value,
    });
  }
  onChangeBrand(e) {
    this.setState({
      Brand: e.target.value,
    });
  }
  onChangeColor(e) {
    this.setState({
      Color: e.target.value,
    });
  }
  onChangeChassisNumber(e) {
    this.setState({
      ChassisNumber: e.target.value,
    });
  }

  onSubmit(e) {
    debugger;
    e.preventDefault();
    const obj = {
      Id: this.props.match.params.id,
      Name: this.state.Name,
      Brand: this.state.Brand,
      Color: this.state.Color,
      ChassisNumber: this.state.ChassisNumber,
    };
    // axios.post('http://localhost:65424/Api/Bus/Update/'+this.props.match.params.id)
    //     .then(res => console.log(res.data));
    //     debugger;
    //     this.props.history.push('/BussList')
  }
  render() {
    return (
      <Container className="App">
        <h4 className="PageHeading">Update Bus Informations</h4>
        <Form className="form" onSubmit={this.onSubmit}>
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
              <Label for="Brand" sm={2}>
                Brand
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="Brand"
                  onChange={this.handleChange}
                  value={this.state.Brand}
                  placeholder="Enter Brand"
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
                  onChange={this.handleChange}
                  value={this.state.ChassisNumber}
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
                  onChange={this.handleChange}
                  value={this.state.Color}
                  placeholder="Enter Color"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <Button type="submit" color="success">
                  Submit
                </Button>{" "}
              </Col>
              <Col sm={1}>
                <Button color="danger">Cancel</Button>{" "}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default EditBus;
