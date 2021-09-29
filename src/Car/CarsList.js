import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/dom";

function CarsList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();

  const getData = () => {
    axios
      .get("http://localhost:65424/Api/Car/CarsList")
      .then((response) => {
        setbussines(response.data.cars);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCar = (id) => {
    axios.post(`http://localhost:65424/Api/Car/Delete/${id}`).then((res) => {
      console.log("res", res);
      if (res.data) {
        getData();
        setStatus(res.data);
        setTimeout(() => {
          setStatus(null);
        }, 4000);
        alert("Record deleted successfully!!");
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

<<<<<<< HEAD
  return (
    <div className="containerr">
      <h4 align="center">Cars List</h4>
      {status && <p className="color-red">Deleted successfully!</p>}
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Color</th>
            <th>ChassisNumber</th>
            <th colSpan="4">Action</th>
          </tr>
        </thead>
        <tbody>
          {business?.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.brand}</td>
              <td>
                <Link to={`/EditCar/${el.id}`} className="btn btn-success">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteCar(el.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* {tabRow()}    */}
        </tbody>
      </table>
    </div>
  );
}
=======
      return (  
        <div>  
          <h4 align="center">Cars List</h4>
          {status && <p className="color-red">Deleted successfully!</p>}
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Name</th>  
                <th>Brand</th>  
                <th>Color</th>  
                <th>ChassisNumber</th>  
                <th>NumberOfSeats</th> 
                <th>EngineType</th> 
                <th>FuelType</th> 
                <th>YearOfProduction</th> 
                <th>Price</th>
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>
              {
                business?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.brand}</td>
                    <td>{el.color}</td>
                    <td>{el.chassisNumber}</td>
                    <td>{el.numberOfSeats}</td>
                    <td>{el.engineType}</td>
                    <td>{el.fuelType}</td>
                    <td>{el.yearOfProduction}</td>
                    <td>{el.price}</td>
                    <td>  
                      <Link to={`/EditCar/${el.id}`} className="btn btn-success">Edit</Link>  
                    </td>  
                    <td>  
                      <button type="button" onClick={() => deleteCar(el.id)} className="btn btn-danger">Delete</button>  
                    </td> 
                  </tr>
                  
                ))
              }
            </tbody>  
          </table>  
        </div>  
    ); 
  }
>>>>>>> 2f12c4ab7689737ba4fec62721b9009186386595

export default CarsList;
