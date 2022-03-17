import React from "react";
import TopForm from "./components/topform";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Planets from "./components/Planets";
import Spaceships from "./components/Spaceships";
import Vehicles from "./components/Vehicles";
import People from "./components/People";
import Films from "./components/Films";
import Species from "./components/Species";

function App() {
  return (
    <BrowserRouter>
      <TopForm/>
      <Switch>
        <Route path="/planets/:id">
          <Planets/>
        </Route>
        <Route path="/spaceships/:id">
          <Spaceships/>
        </Route>
        <Route path="/vehicles/:id">
          <Vehicles/>
        </Route>
        <Route path="/people/:id">
          <People/>
        </Route>
        <Route path="/films/:id">
          <Films/>
        </Route>
        <Route path="/species/:id">
          <Species/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
