import react, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./App.css";
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

function AddCategory() {
  const [dataCategory, setDataCategory] = useState({
    CategoryName: "",
    
  });
  const history = useHistory();

  const AddCategory = () => {
    axios
      .post("http://localhost:65424/Api/Category/Create/", dataCategory)
      .then((json) => {
        if (json.data) {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          history.push("/CategoryList");
        } else {
          alert("Data not Saved");
        }
      });
  };

  const handleChange = (e) => {
    setDataCategory({ ...dataCategory, [e.target.name]: e.target.value });
  };

  return (
    <Container className="App">
      <h4 className="PageHeading">Enter Category Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="Category" sm={2}>
            Category Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Category"
                onChange={handleChange}
                value={dataCar.CategoryName}
                placeholder="Enter Category Name"
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
                onClick={() => AddCategory()}
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

export default AddCategory;
