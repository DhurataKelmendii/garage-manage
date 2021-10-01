import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Place/Place.css";
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

function AddPlace() {
  const [dataPlace, setData] = useState({
    NamePlace: "",
  });

  const history = useHistory();

  const AddPlace = () => {
    axios
      .post("http://localhost:65424/Api/Place/CreatePlace/", dataPlace)
      .then((json) => {
        if (json.data) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          history.push("/PlacesList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataPlace, [e.target.name]: e.target.value });
  };
  return (
    <Container className="App">
      <h4 className="PageHeading">Enter Place Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="name" sm={2}>
              Name place
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="NamePlace"
                onChange={handleChange}
                value={dataPlace.NamePlace}
                placeholder="Enter NamePlace"
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
                onClick={() => AddPlace()}
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

export default AddPlace;
