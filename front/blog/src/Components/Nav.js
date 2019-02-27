import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Css/Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link className="noeud" to="/">
          Accueil
        </Link>
        <Link className="noeud" to="/Galerie">
          Galerie
        </Link>
        <Link className="noeud" to="/About">
          About
        </Link>
        <Link className="noeud" to="/Contact">
          Contact
        </Link>
      </div>
      // <div className='styleNav'>

      //     <div className="NavBar">
      //     <div className='styleLogo'>
      //         <p>Logo</p>
      //     </div>

      //             <Link className="noeud" to="/">Accueil</Link>
      //             <Link className="noeud" to="/Galerie">Galerie</Link>
      //             <Link className="noeud" to="/About">About</Link>
      //             <Link className="noeud" to="/Contact">Contact</Link>
      //     </div>
      // </div>
    );
  }
}
