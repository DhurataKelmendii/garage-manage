import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function EmployeesList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();

  const getData = () => {
    axios
      .get("http://localhost:65424/Api/Employee/EmployeesList")
      .then((response) => {
        setbussines(response.data.employees);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (id) => {
    axios
      .post(`http://localhost:65424/Api/Employee/DeleteEmployee/${id}`)
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
      <h4 align="center">Employee List</h4>
      {status && <p className="color-red">Deleted successfully!</p>}
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>

            <th colSpan="8">Action</th>
          </tr>
        </thead>
        <tbody>
          {business?.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.gender}</td>

              <td>
                <Link to={`/EditEmployee/${el.id}`} className="btn btn-success">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteEmployee(el.id)}
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
export default EmployeesList;
