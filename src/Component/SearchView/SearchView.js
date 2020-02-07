import React, { Component } from "react";
import axios from "axios";
import RacipeCard from "../../racipeCard";
import uuid from "uuid";
import { withRouter } from "react-router-dom";
//import DetailView from "../DetailView/DetailView";
import Spinner from "../Spinner";

//export const Racipe = React.createContext(false);

class SearchView extends Component {
  state = {
    racipeName: "",
    query: "",
    data: [],
    doesFetch: false
  };

  componentDidMount() {
    console.log(this.props);
  }

  changeHandler = e => {
    this.setState({
      racipeName: e.target.value
    });
  };
  limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);
      return `${newTitle.join(" ")}...`;
    }
    return title;
  };

  utilData = query => {
    console.log(query);
    if (query !== null) {
      axios
        .get(
          `https://api.edamam.com/search?q=${query}&app_id=01d7eed3&app_key=959dd302ad5dea6386004e178edea3cd&from=0&to=9&health=peanut-free`
        )
        .then(res => {
          console.log(res.data.hits);
          this.setState({ data: res.data.hits, doesFetch: false });
        });
      console.log(this.state.data);
    }
  };

  submitHandler = e => {
    e.preventDefault();
    const data = this.state.racipeName;
    console.log(data);
    this.setState({ query: data, doesFetch: true });
    this.utilData(this.state.racipeName);
  };

  render() {
    var post = this.state.data.map((ele, index) => {
      return (
        <RacipeCard
          key={uuid.v4()}
          img={ele.recipe.image}
          label={this.limitRecipeTitle(ele.recipe.label)}
          data={this.state.data[index]}
          calories={this.state.data[index].recipe.calories.toFixed(2)}
          ingredients={this.state.data[index].recipe.ingredients.length}
        />
      );
    });

    return (
      <div>
        <div>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              placeholder="Search"
              name="recipeName"
              value={this.state.racipeName}
              onChange={this.changeHandler}
              style={{ width: "173px" }}
            />
            <input type="submit"></input>
          </form>
        </div>
        {this.state.doesFetch ? (
          <Spinner animation="grow" style={{ marginTop: "500px" }} />
        ) : (
          <div className="container-fluid mt-4">
            <div className="row justify-content-center">{post}</div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SearchView);
