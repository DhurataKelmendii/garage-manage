import react, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';  
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
    
function EditReservation(props) {  
    const [dataReservation, setDataReservation] = useState({
        RezervationName: "",
        RezervationStartDate: "",
        RezervationEndDate: "",
        TotalBill: "",
        GarageName: "",
        CarsUsing: "",
    });
    const history = useHistory();
    const id = props.match.params.id;
    
    const EditReservation = () => {  
      axios.post('http://localhost:65424/Api/Reservation/UpdateReservation/', dataReservation)
        .then(json => {
          if (json.data) {  
            alert("Data Save Successfully");  
            history.push('/ReservationsList') 
          } else {  
            alert('Data not Saved');  
          }  
        }) 
    }
    
    const handleChange = (e) => {  
        setDataReservation({ ...dataReservation, [e.target.name]: e.target.value });  //destructure
    };

    useEffect(() => {
        axios.get(`http://localhost:65424/Api/Reservation/GetReservationById/${id}`)  
        .then(response => {
            if (response.data) {
                setDataReservation({
                    Id: response.data.id,  
                    RezervationName: response.data.rezervationName, 
                    RezervationStartDate: response.data.rezervationStartDate,
                    RezervationEndDate: response.data.rezervationEndDate,
                    TotalBill : response.data.totalBill,
                    GarageName :response.data.garageName,
                    CarsUsing: response.data.carsUsing,
                });    
            }
        }) 
        .catch((error) => {  
            console.log(error);  
        })   
    }, []);
       
    return (  
       <Container className="App">  
        <h4 className="PageHeading">Update Reservation Informations</h4>  
        <Form className="form">  
          <Col>  
          <FormGroup row>
            <Label for="RezervationName" sm={2}>
            Rezervation Name
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
            <Label for="RezervationEndDate" sm={2}>
            Rezervation End Date
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="RezervationEndDate"
                onChange={handleChange}
                value={dataReservation.RezervationEndDate}
                placeholder="Enter Reservation End Date"
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
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={() => EditReservation()} className="btn btn-success">Save</button>  
              </Col>  
              <Col sm={1}>  
                <Button onClick={() => history.push('/ReservationsList')} color="danger">Cancel</Button>
              </Col>  
              <Col sm={5}>  
              </Col>  
            </FormGroup>  
          </Col>  
        </Form>  
      </Container>  
    );  
    }  
       
    export default EditReservation;  