import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();

  const getData = () => {
    axios
      .get("http://localhost:65424/Api/User/UsersList")
      .then((response) => {
        setbussines(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (id) => {
    axios
      .post(`http://localhost:65424/Api/User/DeleteUser/${id}`)
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
      <h4 align="center">Users List</h4>
      {status && <p className="color-red">Deleted successfully!</p>}
      <table className="table table-striped" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>Email</th>
            <th colSpan="8">Action</th>
          </tr>
        </thead>
        <tbody>
          {business?.map((el) => (
            <tr key={el.id}>
              <td>{el.email}</td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteUser(el.id)}
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
export default UsersList;
