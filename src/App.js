import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Store from "./components/Store";

function App() {

  return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route path={"/admin"} component={Admin}/>
            <Route path={"/cart"} component={Cart}/>
            <Route path={"/"} component={Store}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;

