import React from 'react';  
import axios from 'axios';  
import '../Car/Car.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class AddCar extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Name:'dhurata',  
Brand:'RangeR',  
Color:'black',  
ChassisNumber:'2', 
NumberOfSeats:'4', 
EngineType:'5000', 
FuelType:'benz', 
isDeleted: false, 
YearOfProduction:'2021', 
Price:'5000'
}  
   
this.model = {
Name:this.state.Name, 
Brand: this.state.Brand,
Color: this.state.Color,
ChassisNumber : this.state.ChassisNumber,
NumberOfSeats : this.state.NumberOfSeats,
EngineType: this.state.EngineType,
FuelType: this.state.FuelType,
isDeleted: this.state.isDeleted,
YearOfProduction: this.state.YearOfProduction,
Price: this.state.Price
};
}
AddCar=()=>{  
  axios.post('http://localhost:65424/Api/Car/Create2/', JSON.stringify(this.model))
  // axios.post('http://localhost:65424/Api/Car/Create/', {Name:this.state.Name,Brand:this.state.Brand,  
  // ChassisNumber:this.state.ChassisNumber, NumberOfSeats:this.state.NumberOfSeats, Color:this.state.Color, EngineType:this.state.EngineType, FuelType:this.state.FuelType, IsDeleted:this.state.IsDeleted, Price:this.state.Price, YearOfProduction:this.state.YearOfProduction})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/CarsList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/CarsList')  
}  
})  
}

        
// test = () =>{
//   axios.get('http://localhost:65424/Api/Car/CarsList')  
//         .then(response => { 
//           console.log('Test dhurata'); 
//           console.log(response); 

//           // this.setState({ business: response.data });  
//           // debugger;  
  
//         })  
//         .catch(function (error) {  
//           console.log(error);  
//         })  
// }
AddCar2= () =>{
  
fetch('http://localhost:65424/Api/Car/Create/', {
  mode: 'no-cors',
  method: "post",
  headers: {
       "Content-Type": "application/json"
  },
  body: JSON.stringify(this.model)
})
}
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Car Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Brand" sm={2}>Brand</Label>  
          <Col sm={10}>  
            <Input type="text" name="Brand" onChange={this.handleChange} value={this.state.Brand} placeholder="Enter Brand" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="ChassisNumber" sm={2}>ChassisNumber</Label>  
          <Col sm={10}>  
            <Input type="text" name="ChassisNumber" onChange={this.handleChange} value={this.state.ChassisNumber} placeholder="Enter ChassisNumber" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Color" sm={2}>Color</Label>  
          <Col sm={10}>  
            <Input type="text" name="Color" onChange={this.handleChange} value={this.state.Color} placeholder="Enter Color" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="NumberOfSeats" sm={2}>NumberOfSeats</Label>  
          <Col sm={10}>  
            <Input type="number" name="NumberOfSeats" onChange={this.handleChange} value={this.state.NumberOfSeats} placeholder="Enter NumberOfSeats" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="EngineType" sm={2}>EngineType</Label>  
          <Col sm={10}>  
            <Input type="text" name="EngineType" onChange={this.handleChange} value={this.state.EngineType} placeholder="Enter EngineType" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="FuelType" sm={2}>FuelType</Label>  
          <Col sm={10}>  
            <Input type="text" name="FuelType" onChange={this.handleChange} value={this.state.FuelType} placeholder="Enter FuelType" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="YearOfProduction" sm={2}>YearOfProduction</Label>  
          <Col sm={10}>  
            <Input type="number" name="YearOfProduction" onChange={this.handleChange} value={this.state.YearOfProduction} placeholder="Enter YearOfProduction" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="Price" sm={2}>Price</Label>  
          <Col sm={10}>  
            <Input type="number" name="Price" onChange={this.handleChange} value={this.state.Price} placeholder="Enter Price" />  
          </Col>  
        </FormGroup>
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddCar2} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default AddCar;  