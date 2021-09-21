import React, { Component } from "react";
import Card from "./Card";
import "./Recipes.css";
import Balanced from "../images/balanced.jpg";
import High_Fiber from "../images/High fiber.jpg";
import High_Protein from "../images/high proten.jpg";
import Low_Carb from "../images/low carb.jpg";
import Low_Fat from "../images/low fat.jpeg";
import Low_Sodium from "../images/low sodium.jpg";
import Recipe from "./Recipe";
import loading from "../images/generating.gif";

import axios from "axios";

// const APP_ID = "750a3def";
// const APP_KEY = "78f65d43585a400ca862a44e196ee9c2";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategories: true,
      displayRecipes: false,
      recipes: [],
    };
  }

  onImageClick = (searchKey) => {
    this.loadData(searchKey);
    this.setState({
      displayCategories: false,
      displayRecipes: true,
    });
  };

  formatRecipe = (recipes) => {
    console.log(recipes.hits);
    let tempRecipes = recipes[0].hits.map((recipe) => {
      let image = recipe.recipe.image;
      let name = recipe.recipe.source;
      let ingredients = recipe.recipe.ingredients
        .map((ingredient) => ingredient.text)
        .join(", ");
      let calories = recipe.recipe.calories.toFixed(2);

      let tempRecipe = { image, name, ingredients, calories };
      return tempRecipe;
    });

    return tempRecipes;
  };
  loadData = async (searchKey) => {
    let url = `https://api.edamam.com/search?q=${searchKey}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;
    console.log(url);
    let dietRecipe = await axios.get(url);

    this.setState({
      recipes: this.formatRecipe([dietRecipe.data]),
      displayCategories: false,
      displayRecipes: true,
    });
  };

  render() {
    return (
      <>
        {this.state.displayCategories ? (
          <div className="container">
            <div>
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                  <h1>Diet Meals</h1>
                </div>
                <div className="col-sm-2"></div>
              </div>
              <div className="row">
                <Card
                  itemName={Balanced}
                  searchItem="Balanced"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={High_Fiber}
                  searchItem="High-Fiber"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={High_Protein}
                  searchItem="High-Protein"
                  onImageClick={this.onImageClick}
                />
              </div>
              <div className="row">
                <Card
                  itemName={Low_Carb}
                  searchItem="Low-Carb"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={Low_Fat}
                  searchItem="Low-Fat"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={Low_Sodium}
                  searchItem="Low-Sodium"
                  onImageClick={this.onImageClick}
                />
              </div>
            </div>
          </div>
        ) : null}

        {this.state.displayRecipes && this.state.recipes ? (
          <div className="container">
            {this.state.recipes.map((recipe, id) => {
              return <Recipe key={id} recipe={recipe} />;
            })}
            <a className="backbutton" href="/recipes">
              <button type="button" className="btn btn-primary btn-lg">
                Back
              </button>
            </a>
          </div>
        ) : this.state.displayRecipes ? (
          <img className="loading" src={loading} alt="loading.." />
        ) : null}
      </>
    );
  }
}
