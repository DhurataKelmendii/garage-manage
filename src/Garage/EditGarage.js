import react, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';  
import "../Garage/Garage.css";
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function EditGarage(props){
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
  const id = props.match.params.id;
  

  const EditGarage = () => { 
      axios.post('http://localhost:65424/Api/Garage/UpdateGarage/', dataGarage)
        .then(response => {
          if (response.data) {  
            alert("Data Save Successfully");  
            history.push('/GaragesList') 
          } else {  
            alert('Data not Saved');  
          }  
        }) 
  }
  
  const handleChange = (e) => {  
    setData({ ...dataGarage, [e.target.name]: e.target.value });  //destructure
  };

  useEffect(() => {
    axios.get(`http://localhost:65424/Api/Garage/GetGarageById/${id}`)  
    .then(response => {
        if (response.data) {
            setData({
                Id: response.data.id,  
                Name: response.data.name, 
                CapacityOfCars: response.data.capacityOfCars,
                Country: response.data.country,
                City : response.data.city,
                Street :response.data.street,
                PricePerDay: response.data.pricePerDay,
                CarsUsing: response.data.carsUsing,
            });    
        }
    }) 
    .catch((error) => {  
        console.log(error);  
    })   
  }, []);
   
  return(
    <Container className="App">
      <h4 className="PageHeading">Update Garage Informations</h4>
      <Form className="form">
        <Col>
        <FormGroup row>  
              <Label for="name" sm={2}>Name</Label>  
              <Col sm={10}>  
                <Input type="text" name="Name" onChange={handleChange} value={dataGarage.Name} placeholder="Enter Name" />  
              </Col>  
            </FormGroup>  
        <FormGroup row>
              <Label for="CapacityOfCars" sm={2}>
                CapacityOfCars
              </Label>
              <Col sm={10}>
                <Input type="text"
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
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={() => EditGarage()} className="btn btn-success">Save</button>  
              </Col>  
              <Col sm={1}>  
                <Button onClick={() => history.push('/GaragesList')} color="danger">Cancel</Button>
              </Col>  
              <Col sm={5}>  
              </Col>  
            </FormGroup>  
          </Col>  
      </Form>
    </Container>
  );
  }

export default EditGarage;
