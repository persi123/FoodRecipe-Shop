import React, { Component } from "react";
import "./DetailView.css";
//import Racipe from "../SearchView/SearchView";

export default class DetailView extends Component {
  state = {
    recipe: this.props.location.state.recipe,
    serving: 0
  };

  changed = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  ServingCount(str) {
    let serving = str.split(" ");
    console.log(serving);
    return serving[0] * this.state.serving + "ll" + serving.slice(1).join(" ");
  }

  render() {
    return (
      <div className="container mt-4 " style={{ color: "black" }}>
        <img
          alt="food"
          style={{ marginTop: "10px" }}
          src={this.state.recipe.image}
        />
        <h1 className="mt-4">{this.state.recipe.label}</h1>
        <div className="d-flex justify-content-around elements">
          <div>
            <h3>Ingredients</h3>
            <ul>
              <li>{this.state.recipe.ingredientLines[0]}</li>
              <li>{this.state.recipe.ingredientLines[1]}</li>
              <li>{this.state.recipe.ingredientLines[2]}</li>
              <li>{this.state.recipe.ingredientLines[3]}</li>
            </ul>
          </div>
          <div>
            <h3>Nutritions</h3>
            <ul>
              <li className="d-flex">
                <p>calories/serving:</p>
                <p className="ml-2"> {this.state.recipe.calories.toFixed(2)}</p>
              </li>
              <li className="d-flex">
                <p>daily value:</p>
                <p className="ml-4"> 1400</p>
              </li>
              <li className="d-flex">
                <p>Diet label:</p>
                <p className="ml-4">
                  {this.state.recipe.dietLabels.map(el => el)}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <a href={this.state.recipe.url} style={{ cursor: "pointer" }}>
          More Info-:{this.state.recipe.source}
        </a>
        {/* <div className="servingBlock">
          <input
            name="serving"
            value={this.state.serving}
            placeholder="serving"
            className="ml-4"
            onChange={this.changed}
          />
        </div> */}
      </div>
    );
  }
}
