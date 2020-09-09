import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
