import React from 'react';  
import AddCar from './Car/AddCar';  
import CarsList from './Car/CarsList';  
import EditCar from './Car/EditCar';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddCar'} className="nav-link">Add Car</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/CarsList'} className="nav-link">Car List</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/EditCar'} className="nav-link">Edit Car</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/AddCar' component={AddCar} />  
          <Route path='/EditCar/:id' component={EditCar} />
          <Route path='/CarsList' component={CarsList} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default App; 