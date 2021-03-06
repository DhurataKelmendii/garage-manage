import react, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "../Place/Place.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

function EditPlace(props) {
  const [dataPlace, setData] = useState({
    NamePlace: "",
    Country: "",
    City: "",
    Street: "",
    NumberOfGarages: "",
  });
  const history = useHistory();
  const id = props.match.params.id;

  const EditPlace = () => {
    axios
      .post("http://localhost:65424/Api/Place/UpdatePlace/", dataPlace)
      .then((response) => {
        if (response.data) {
          alert("Data Save Successfully");
          history.push("/PlacesList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setData({ ...dataPlace, [e.target.name]: e.target.value }); //destructure
  };

  useEffect(() => {
    axios
      .get(`http://localhost:65424/Api/Place/GetPlaceById/${id}`)
      .then((response) => {
        if (response.data) {
          setData({
            Id: response.data.id,
            NamePlace: response.data.namePlace,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="App">
      <h4 className="PageHeading">Update Place Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="NamePlace" sm={2}>
              NamePlace
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
          <FormGroup row>
            <Label for="Country" sm={2}>
            Country
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Country"
                onChange={handleChange}
                value={dataPlace.Country}
                placeholder="Enter Country"
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
                value={dataPlace.City}
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
                value={dataPlace.Street}
                placeholder="Enter Street"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="NumberOfGarages" sm={2}>
            Number Of Garages
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="NumberOfGarages"
                onChange={handleChange}
                value={dataPlace.NumberOfGarages}
                placeholder="Enter NumberOfGarages"
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
                onClick={() => EditPlace()}
                className="btn btn-success"
              >
                Save
              </button>
            </Col>
            <Col sm={1}>
              <Button
                onClick={() => history.push("/PlacesList")}
                color="danger"
              >
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

export default EditPlace;
