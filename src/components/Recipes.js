
import React, { Component } from 'react'
import Card from './Card';
import './Recipes.css';
import Balanced from '../images/balanced.jpg';
import High_Fiber from '../images/High fiber.jpg';
import High_Protein from '../images/high proten.jpg';
import Low_Carb from '../images/low carb.jpg';
import Low_Fat from '../images/low fat.jpeg';
import Low_Sodium from '../images/low sodium.jpg';
import Recipe from './Recipe';
import loading from '../images/generating.gif';
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button, Row, Col } from "react-bootstrap";

import axios from "axios";


export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategories: true,
      displayRecipes: false,
      displaysearch: false,
      recipes: [],
      recipesData: "",
    }
  }
  onImageClick = (searchKey) => {
    this.loadData(searchKey);
    this.setState({
      displayCategories: false,
      displayRecipes: true,
      displaysearch: false
    })
  }
  formatRecipe = (recipes) => {
    let tempRecipes = recipes[0].hits.map(recipe => {
      let image = recipe.recipe.image;
      let name = recipe.recipe.source;
      let dietLabels = recipe.recipe.dietLabels;
      let ingredients = recipe.recipe.ingredients.map(ingredient => ingredient.text).join(', ');
      let calories = recipe.recipe.calories.toFixed(2);
      let tempRecipe = { image, name, ingredients, calories, dietLabels }
      return tempRecipe;
    });
    return tempRecipes;
  }
  goBack = () => {
    this.setState({
      displayCategories: true,
      displayRecipes: false,
      displaysearch: false,
    })

  }
  loadData = async (searchKey) => {
    let url = `https://api.edamam.com/search?q=${searchKey}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;
    console.log(url);
    let dietRecipe = await axios.get(url);
    this.setState({
      recipes: this.formatRecipe([dietRecipe.data]),
      displayCategories: false,
      displayRecipes: true,
      displaysearch: false
    });
  }
  searchfromApi = async (event) => {
    event.preventDefault();
    try {
      let targetrecipe = event.target.targetrecipe.value;
      let edamamURL = `https://api.edamam.com/search?q=${targetrecipe}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`;
      let EdamamResult = await axios.get(edamamURL);
      this.setState({
        recipesData: this.formatRecipe([EdamamResult.data]),
        displayCategories: false,
        displayRecipes: false,
        displaysearch: true
      });
    }
    catch {
      this.setState({
        errorrMsg: "Error Unable to geocode",
        displayErrorr: true,
      });
      console.log("invalied");
    }
  };
  render() {
    return (
      <>
      
        <Form className="formsearch" onSubmit={this.searchfromApi} >
          <Form.Group controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Control
                  className="form-text"
                  type="text"
                  placeholder="Enter Recipe Name"
                  name="targetrecipe"
                ></Form.Control>
              </Col>
              <Col>
                <Button className="buttonform" variant="primary" type="submit" value="search">Search</Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
        <div className="col-sm-8"><h1>Diet Meal</h1></div>
         < br/>
         < br/>
        {this.state.displayCategories ?
          <div className="container">
            <div>
              <div className="row">
                <Card itemName={Balanced} searchItem="Balanced" onImageClick={this.onImageClick} />
                <Card itemName={High_Fiber} searchItem="High-Fiber" onImageClick={this.onImageClick} />
                <Card itemName={High_Protein} searchItem="High-Protein" onImageClick={this.onImageClick} />
              </div>
              <div className="row">
                <Card itemName={Low_Carb} searchItem="Low-Carb" onImageClick={this.onImageClick} />
                <Card itemName={Low_Fat} searchItem="Low-Fat" onImageClick={this.onImageClick} />
                <Card itemName={Low_Sodium} searchItem="Low-Sodium" onImageClick={this.onImageClick} />
              </div>
            </div>
          </div>
          : null
        }
        {
          this.state.displayRecipes && this.state.recipes ?
            <div className="container">
              {this.state.recipes.map((recipe, id) => {
                return <Recipe key={id} recipe={recipe} />
              })}

              <button type="button" className="buttonfor" onClick={this.goBack}>Back</button>
            </div>
            : (this.state.displayRecipes ? <img className="loading" src={loading} alt="loading.." /> : null)
        }
        {
          this.state.displaysearch && this.state.recipesData ?
            <div className="container">
              {this.state.recipesData.map((recipe) => {
                return <Recipe recipe={recipe} />
              })}

              <button type="button" className="buttonfor" onClick={this.goBack}>Back</button>
            </div>
            : (this.state.displaysearch ? <img className="loading" src={loading} alt="loading.." /> : null)
        }
      </>
    )
  }
}
