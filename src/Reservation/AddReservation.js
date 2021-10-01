import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
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

function AddReservation() {
  const [dataReservation, setDataReservation] = useState({
    RezervationName: "",
    RezervationStartDate: "",
    RezervationEndDate: "",
    TotalBill: "",
    GarageName: "",
    CarsUsing: "",
  });
  const history = useHistory();

  const AddReservation = () => {
    axios
      .post("http://localhost:65424/Api/Reservation/CreateReservation/", dataReservation)
      .then((json) => {
        if (json.data) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          history.push("/ReservationsList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setDataReservation({ ...dataReservation, [e.target.name]: e.target.value });
  };

  return (
    <Container className="App">
      <h4 className="PageHeading">Garage Reservation Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="RezervationName" sm={2}>
            Reservation Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="RezervationName"
                onChange={handleChange}
                value={dataReservation.RezervationName}
                placeholder="Enter Rezervation Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="RezervationStartDate" sm={2}>
            Rezervation Start Date
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="RezervationStartDate"
                onChange={handleChange}
                value={dataReservation.RezervationStartDate}
                placeholder="Enter Rezervation Start Date"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="RezervationeEndDate" sm={2}>
            Rezervatione End Date
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="RezervationeEndDate"
                onChange={handleChange}
                value={dataReservation.RezervationeEndDate}
                placeholder="Enter Rezervatione End Date"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="TotalBill" sm={2}>
            Total Bill
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="TotalBill"
                onChange={handleChange}
                value={dataReservation.TotalBill}
                placeholder="Enter Total Bill"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="GarageName" sm={2}>
            Garage Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="GarageName"
                onChange={handleChange}
                value={dataReservation.GarageName}
                placeholder="Enter Garage Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="CarsUsing" sm={2}>
            Cars Using
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="CarsUsing"
                onChange={handleChange}
                value={dataReservation.CarsUsing}
                placeholder="Enter Cars Using"
              />
            </Col>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup row>
            <Col sm={5}></Col>
            <Col sm={1} className="d-flex justify-content-start">
              <button
                type="button"
                onClick={() => AddReservation()}
                className="btn btn-success"
              >
                Submit
              </button>
            </Col>
            <Col sm={1} className="d-flex justify-content-end">
              <Button color="danger">Cancel</Button>{" "}
            </Col>
            <Col sm={5}></Col>
          </FormGroup>
        </Col>
      </Form>
    </Container>
  );
}

export default AddReservation;
