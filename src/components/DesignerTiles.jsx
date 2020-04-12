import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/tiles.css";
import Tile from "./Tile";
// img
import questation from "../img/tiles/designer/questation.png";
import KARTAR from '../img/tiles/designer/"KARTAR".png';
import flatspace from "../img/tiles/designer/flatspace.png";

class DesignerTiles extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tile-nav">
          <Link to="/">
            <button className="landing-button blue">
              <i className="fas fa-angle-left"></i>Back to start
            </button>
          </Link>
          <Link to="/DeveloperTiles">
            <button className="landing-button red">
              Developer<i className="fas fa-angle-right"></i>
            </button>
          </Link>
        </div>

        <div className="page-name">
          <h1>Designer</h1>
          <p className="recent">Recent work examples</p>
        </div>

        <div className="designer-tiles tiles">
          <div className="tile tile-1">
            <img src={questation} alt="Maths question generator app" />
            <p className="name">Questation</p>
            <p className="desc">
              Coming soon... An app built for maths teachers, currently in
              development.
            </p>
            <Link to="/CreatorTiles">
              <button className="landing-button red">Learn more here</button>
            </Link>
          </div>

          <Tile
            tileClass="tile-2"
            imgSrc={KARTAR}
            alt={"Old portfolio design"}
            name="Previous portfolio design"
            desc="Previous design iteration of this website, before I opted to build
              it using React.js"
          />
          <Tile
            tileClass="tile-3"
            imgSrc={flatspace}
            alt={"Flat space frame"}
            name="Flat space frame"
            desc="Flat space sketch artboard, inspired by Kurzgesagt – In a Nutshell videos."
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DesignerTiles;
