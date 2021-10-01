import React, { useEffect, useState } from 'react';  
import {Link} from 'react-router-dom';
import axios from 'axios';  

function ReservationsList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();

  const  getData = () => {
    axios.get('http://localhost:65424/Api/Reservation/ReservationsList')  
    .then(response => {
      setbussines(response.data.reservations);  
    })  
    .catch((error) => {  
      console.log(error);  
    });
  }

  const deleteReservation = (id) => {  
    axios.post(`http://localhost:65424/Api/Reservation/DeleteReservation/${id}`)  
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
        <div className="containerr">  
          <h4 align="center">Reservations List</h4>
          {status && <p className="color-red">Deleted successfully!</p>}
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>RezervationName</th>  
                <th>RezervationStartDate</th>  
                <th>RezervationEndDate</th>  
                <th>TotalBill</th>  
                <th>GarageName</th> 
                <th>CarsUsing</th> 
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>
              {
                business?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.rezervationName}</td>
                    <td>{el.rezervationStartDate}</td>
                    <td>{el.rezervationEndDate}</td>
                    <td>{el.totalBill}</td>
                    <td>{el.garageName}</td>
                    <td>{el.carsUsing}</td>
                    <td>  
                      <Link to={`/EditReservation/${el.id}`} className="btn btn-success">Edit</Link>  
                    </td>  
                    <td>  
                      <button type="button" onClick={() => deleteReservation(el.id)} className="btn btn-danger">Delete</button>  
                    </td> 
                  </tr>
                  
                ))
              }
            </tbody>  
          </table>  
        </div>  
    ); 
  }

  export default ReservationsList;