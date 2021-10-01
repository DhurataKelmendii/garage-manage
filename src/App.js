import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import LoginForm from "./Login/LoginForm";
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import RegisterForm from "./Register/RegisterForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route exact path="/RegisterForm" component={RegisterForm} />
        <Route
          render={(props) => (localStorage.getItem('token') ? <Dashboard {...props} /> : <Redirect to="/LoginForm" />)}
        />
      </Switch>
    </Router>
  );
}
export default App;
