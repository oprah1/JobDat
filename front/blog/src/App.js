import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Accueil from "./Components/Accueil.js";
import Galerie from "./Components/Galerie.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Nav from "./Components/Nav.js";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Accueil} />
              <Route exact path="/Galerie" component={Galerie} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Nav" component={Nav} />
            </Switch>
            {/* <Accueil /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
