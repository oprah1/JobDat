import React, { Component } from "react";
import Nav from "./Nav.js";

import "./Css/Accueil.css";
import "./Images/photoB.jpg";

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="acceuilStyle">
          <div className="Bord">
            <div className="titleBlog">
              <h1 className="titleStyle">Bienvenue dans mon Blog</h1>
            </div>
            <div className="paragrapheAccueil">
              <p>
                Dans certaines agences dans les années 90 circulait un texte
                appelé le “tramway jaune” ou “yellow subway“, sensés remplacer
                le Lorem Ipsum pour donner un aspect plus moderne au contenu.
                Mais on cherchait trop à lire le texte quand celui-ci était en
                français ou en anglais, l’effet voulu n’était donc pas atteint.
                Le travail avec du texte lisible, contenant du sens peut être
                source de distractions.
              </p>
            </div>
          </div>
        </div>
        <div className="stylePhoto">
          <img
            src="https://cdn.pixabay.com/photo/2014/11/22/00/51/camera-541213__340.jpg"
            alt="belle representation"
          />
        </div>
      </div>
    );
  }
}
