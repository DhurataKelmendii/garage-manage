import React, { useEffect, useState } from 'react';  
import {Link} from 'react-router-dom';
import axios from 'axios';  

function CategoryList() {
  const [business, setbussines] = useState();
  const [status, setStatus] = useState();

  const  getData = () => {
    axios.get('http://localhost:65424/Api/Category/CategoryList')  
    .then(response => {
      setbussines(response.data.categories);  
    })  
    .catch((error) => {  
      console.log(error);  
    });
  }

  const deleteCategory = (id) => {  
    axios.post(`http://localhost:65424/Api/Category/Delete/${id}`)  
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
          <h4 align="center">Categories List</h4>
          {status && <p className="color-red">Deleted successfully!</p>}
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Category Name</th>  
                <th></th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>
              {
                business?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.categoryName}</td>
                    <td>  
                      <Link to={`/EditCategory/${el.id}`} className="btn btn-success">Edit</Link>  
                    </td>  
                    <td>  
                      <button type="button" onClick={() => deleteCategory(el.id)} className="btn btn-danger">Delete</button>  
                    </td> 
                  </tr>
                  
                ))
              }
            </tbody>  
          </table>  
        </div>  
    ); 
  }

  export default CategoryList;