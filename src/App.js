import React from "react";
import Homepage from "./pages/homepage/Homepagecomponent";
import ShopPage from "./pages/shop/shopComponent";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
