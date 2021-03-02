import React from "react";
import Homepage from "./pages/homepage/Homepagecomponent";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";

function Home() {
  return <h1>Hats</h1>;
}
function App() {
  console.log(match);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/shop/hats">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
