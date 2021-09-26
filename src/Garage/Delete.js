import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Delete extends Component {
  constructor(props) {
    super(props);
  }

  // DeleteGarage= () =>{
  //  axios.delete('http://localhost:65424/Api/Garage/Delete?id='+this.props.obj.Id)
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
        <td>{this.props.obj.Brand}</td>
        <td>{this.props.obj.Color}</td>
        <td>{this.props.obj.ChassisNumber}</td>
        <td>
          <Link to={"/edit/" + this.props.obj.Id} className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <button
            type="button"
            onClick={this.DeleteGarage}
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
