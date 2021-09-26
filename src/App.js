import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.js";

const HastPage = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HastPage} />
      </Switch>
    </div>
  );
}

export default App;
