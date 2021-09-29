import React, { useEffect, useState } from 'react';  
import {Link} from 'react-router-dom';
import axios from 'axios';  

function GaragesList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();


  const  getData = () => {
    axios.get("http://localhost:65424/Api/Garage/GaragesList")  
    .then(response => {
      setbussines(response.data.garages);   
    })  
    .catch((error) => {  
      console.log(error);  
    });
  }

  const deleteGarage = (id) => {  
    axios.post(`http://localhost:65424/Api/Garage/DeleteGarage/${id}`)  
   .then(res => {
     console.log('res', res);
    if (res.data) {
      getData();
      setStatus(res.data);
      setTimeout(() => {
        setStatus(null);
      }, 4000);
      alert('Record deleted successfully!!');  
    }  
   })  
   } 
  useEffect(() => {
   getData();
  }, []);

    return (
      <div>
        <h4 align="center">Garage List</h4>
        {status && <p className="color-red">Deleted successfully!</p>}
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>CapacityOfCars</th>
              <th>Country</th>
              <th>City</th>
              <th>Street</th>
              <th>PricePerDay</th>
              <th>CarsUsing</th>
              <th colSpan="6">Action</th>
            </tr>
          </thead>
          <tbody>
              {
                business?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.capacityOfCars}</td>
                    <td>{el.country}</td>
                    <td>{el.city}</td>
                    <td>{el.street}</td>
                    <td>{el.pricePerDay}</td>
                    <td>{el.carsUsing}</td>
                    <td>  
                      <Link to={`/EditGarage/${el.id}`} className="btn btn-success">Edit</Link>  
                    </td>  
                    <td>  
                      <button type="button" onClick={() => deleteGarage(el.id)} className="btn btn-danger">Delete</button>  
                    </td> 
                  </tr>
                  
                ))
              }
            </tbody>  
        </table>
      </div>
    );
  }
  export default GaragesList;