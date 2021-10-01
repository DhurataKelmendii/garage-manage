import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BusList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();

  const getData = () => {
    axios
      .get("http://localhost:65424/Api/Bus/BusList")
      .then((response) => {
        setbussines(response.data.bus);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBus = (id) => {
    axios.post(`http://localhost:65424/Api/Bus/Delete/${id}`).then((res) => {
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

  return (
    <div className="containerr">
      <h4 align="center">Buses List</h4>
      {status && <p className="color-red">Deleted successfully!</p>}
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th> Name</th>
            <th> Brand</th>
            <th> YearOfProduction</th>
            <th> Price</th>
            <th> NumberOfSeats</th>
            <th> EngineType</th>
            <th> FuelType</th>
            <th> ChassisNumber</th>
            <th> Color</th>

            <th></th>
            <th colSpan="4">Action</th>
          </tr>
        </thead>
        <tbody>
          {business?.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.brand}</td>
              <td>{el.yearOfProduction}</td>
              <td>{el.price}</td>
              <td>{el.numberOfSeats}</td>
              <td>{el.engineType}</td>
              <td>{el.fuelType}</td>
              <td>{el.chassisNumber}</td>
              <td>{el.color}</td>

              <td>
                <Link to={`/EditBus/${el.id}`} className="btn btn-success">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteBus(el.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BusList;
