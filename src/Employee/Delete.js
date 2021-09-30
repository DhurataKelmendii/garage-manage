import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Delete extends Component {
  constructor(props) {
    super(props);
  }

  // DeleteEmployee= () =>{
  //  axios.delete('http://localhost:65424/Api/Employee/Delete?id='+this.props.obj.Id)
  // .then(json => {
  // if(json.data.Status==='Delete'){
  // alert('Record deleted successfully!!');
  // }
  // })
  // }
  render() {
    return (
      <tr>
        <td>{this.props.obj.Name}</td>

        <td>{this.props.obj.Email}</td>

        <td>{this.props.obj.Gender}</td>
        <td>
          <Link to={"/edit/" + this.props.obj.Id} className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <button
            type="button"
            onClick={this.DeleteEmployee}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Delete;
