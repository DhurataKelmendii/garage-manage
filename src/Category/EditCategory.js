import react, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';  
import './App.css'  
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
    
function EditCategory(props) {  
    const [dataCategory, setDataCategory] = useState({
        CategoryName: '', 
    });
    const history = useHistory();
    const id = props.match.params.id;
    
    const EditCategory = () => {  
      axios.post('http://localhost:65424/Api/Category/Update/', dataCategory)
        .then(json => {
          if (json.data) {  
            alert("Data Save Successfully");  
            history.push('/CategoryList') 
          } else {  
            alert('Data not Saved');  
          }  
        }) 
    }
    
    const handleChange = (e) => {  
        setDataCategory({ ...dataCategory, [e.target.name]: e.target.value });  //destructure
    };

    useEffect(() => {
        axios.get(`http://localhost:65424/Api/Category/GetById/${id}`)  
        .then(response => {
            if (response.data) {
                setDataCategory({
                    Id: response.data.id,  
                    CategoryName: response.data.categoryName, 
                   
                });    
            }
        }) 
        .catch((error) => {  
            console.log(error);  
        })   
    }, []);
       
    return (  
       <Container className="App">  
        <h4 className="PageHeading">Update Category Informations</h4>  
        <Form className="form">  
          <Col>  
            <FormGroup row>  
              <Label for="CategoryName" sm={2}>Category Name</Label>  
              <Col sm={10}>  
                <Input type="text" name="CategoryName" onChange={handleChange} value={dataCar.Name} placeholder="Enter Category Name" />  
              </Col>  
            </FormGroup>  
            
          </Col>  
          <Col>  
            <FormGroup row>  
              <Col sm={5}>  
              </Col>  
              <Col sm={1}>  
              <button type="button" onClick={() => EditCategory()} className="btn btn-success">Save</button>  
              </Col>  
              <Col sm={1}>  
                <Button onClick={() => history.push('/CategoryList')} color="danger">Cancel</Button>
              </Col>  
              <Col sm={5}>  
              </Col>  
            </FormGroup>  
          </Col>  
        </Form>  
      </Container>  
    );  
    }  
       
    export default EditCategory;  