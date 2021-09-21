import React from 'react'
import  './Recipes.css'
export default function Recipe(props) {
    return (
        <div key={props.id} className="row">
                        <div className="col-md-3">
                            <img src={props.recipe.image} alt={props.recipe.name}/>
                        </div>
                        <div className="col-md-9">
                            <h3>Recipe Name: {props.recipe.name}</h3>
                            <p><strong>Calories:</strong> {props.recipe.calories}</p>
                            <p><strong>Diet Labels:</strong> {props.recipe.dietLabels}</p>
                            <p><strong>Ingredients:</strong> {props.recipe.ingredients}</p>
                      
                        </div>
                    </div>
                    
    )
}

