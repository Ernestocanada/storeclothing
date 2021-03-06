import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { Headers } from "./components/header/header";
import HomePage from "./pages/homepage/homepage.js";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Headers />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
