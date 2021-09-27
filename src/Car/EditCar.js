import react, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';  
import '../Car/Car.css'  
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
    
function EditCar(props) {  
    const [dataCar, setDataCar] = useState({
        Name: '', 
        Brand: '',
        Color: '',
        ChassisNumber : '',
        NumberOfSeats :'',
        EngineType: '',
        FuelType: '',
        YearOfProduction: '',
        Price: '',
    });
    const history = useHistory();
    const id = props.match.params.id;
    
    const EditCar = () => {  
      axios.post('http://localhost:65424/Api/Car/Update/', dataCar)
        .then(json => {
          if (json.data) {  
            alert("Data Save Successfully");  
            history.push('/CarsList') 
          } else {  
            alert('Data not Saved');  
          }  
        }) 
    }
    
    const handleChange = (e) => {  
        setDataCar({ ...dataCar, [e.target.name]: e.target.value });  //destructure
    };

    useEffect(() => {
        axios.get(`http://localhost:65424/Api/Car/GetById/${id}`)  
        .then(response => {
            if (response.data) {
                setDataCar({
                    Id: response.data.id,  
                    Name: response.data.name, 
                    Brand: response.data.brand,
                    Color: response.data.color,
                    ChassisNumber : response.data.chassisNumber,
                    NumberOfSeats :response.data.numberOfSeats,
                    EngineType: response.data.engineType,
                    FuelType: response.data.fuelType,
                    YearOfProduction: response.data.yearOfProduction,
                    Price: response.data.price,
                });    
            }
        }) 
        .catch((error) => {  
            console.log(error);  
        })   
    }, []);
       
    return (  
       <Container className="App">  
        <h4 className="PageHeading">Enter Car Informations</h4>  
        <Form className="form">  
          <Col>  
            <FormGroup row>  
              <Label for="name" sm={2}>Name</Label>  
              <Col sm={10}>  
                <Input type="text" name="Name" onChange={handleChange} value={dataCar.Name} placeholder="Enter Name" />  
              </Col>  
            </FormGroup>  
            <FormGroup row>  
              <Label for="Brand" sm={2}>Brand</Label>  
              <Col sm={10}>  
                <Input type="text" name="Brand" onChange={handleChange} value={dataCar.Brand} placeholder="Enter Brand" />  
              </Col>  
            </FormGroup>  
            <FormGroup row>  
              <Label for="ChassisNumber" sm={2}>ChassisNumber</Label>  
              <Col sm={10}>  
                <Input type="text" name="ChassisNumber" onChange={handleChange} value={dataCar.ChassisNumber} placeholder="Enter ChassisNumber" />  
              </Col>  
            </FormGroup>  
            <FormGroup row>  
              <Label for="Color" sm={2}>Color</Label>  
              <Col sm={10}>  
                <Input type="text" name="Color" onChange={handleChange} value={dataCar.Color} placeholder="Enter Color" />  
              </Col>  
            </FormGroup>  
            <FormGroup row>  
              <Label for="NumberOfSeats" sm={2}>NumberOfSeats</Label>  
              <Col sm={10}>  
                <Input type="number" name="NumberOfSeats" onChange={handleChange} value={dataCar.NumberOfSeats} placeholder="Enter NumberOfSeats" />  
              </Col>  
            </FormGroup>
            <FormGroup row>  
              <Label for="EngineType" sm={2}>EngineType</Label>  
              <Col sm={10}>  
                <Input type="text" name="EngineType" onChange={handleChange} value={dataCar.EngineType} placeholder="Enter EngineType" />  
              </Col>  
            </FormGroup>
            <FormGroup row>  
              <Label for="FuelType" sm={2}>FuelType</Label>  
              <Col sm={10}>  
                <Input type="text" name="FuelType" onChange={handleChange} value={dataCar.FuelType} placeholder="Enter FuelType" />  
              </Col>  
            </FormGroup>
            <FormGroup row>  
              <Label for="YearOfProduction" sm={2}>YearOfProduction</Label>  
              <Col sm={10}>  
                <Input type="number" name="YearOfProduction" onChange={handleChange} value={dataCar.YearOfProduction} placeholder="Enter YearOfProduction" />  
              </Col>  
            </FormGroup>
            <FormGroup row>  
              <Label for="Price" sm={2}>Price</Label>  
              <Col sm={10}>  
                <Input type="number" name="Price" onChange={handleChange} value={dataCar.Price} placeholder="Enter Price" />  
              </Col>  
            </FormGroup>
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={() => EditCar()} className="btn btn-success">Save Changes</button>  
              </Col>  
              <Col sm={1}>  
                <Button onClick={() => history.push('/CarsList')} color="danger">Cancel</Button>
              </Col>  
              <Col sm={5}>  
              </Col>  
            </FormGroup>  
          </Col>  
        </Form>  
      </Container>  
    );  
    }  
       
    export default EditCar;  