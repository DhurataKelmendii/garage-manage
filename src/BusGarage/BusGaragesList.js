import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BusGaragesList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();

  const getData = () => {
    axios
      .get("http://localhost:65424/Api/BusGarage/BusGaragesList")
      .then((response) => {
        setbussines(response.data.busGarages);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBusGarage = (id) => {
    axios
      .post(`http://localhost:65424/Api/BusGarage/DeleteBusGarage/${id}`)
      .then((res) => {
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
      <h4 align="center">BusGarage List</h4>
      {status && <p className="color-red">Deleted successfully!</p>}
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>CapacityOfBuses</th>
            <th>Country</th>
            <th>City</th>
            <th>Street</th>
            <th>PricePerDay</th>
            <th>BusesUsing</th>
            <th colSpan="8">Action</th>
          </tr>
        </thead>
        <tbody>
          {business?.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.capacityOfBuses}</td>
              <td>{el.country}</td>
              <td>{el.city}</td>
              <td>{el.street}</td>
              <td>{el.pricePerDay}</td>
              <td>{el.busesUsing}</td>
              <td>
                <Link
                  to={`/EditBusGarage/${el.id}`}
                  className="btn btn-success"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteBusGarage(el.id)}
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
export default BusGaragesList;
