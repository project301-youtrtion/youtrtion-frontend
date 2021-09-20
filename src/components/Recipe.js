import React from 'react'

export default function Recipe(props) {
    return (
        <div key={props.id} className="row">
                        <div className="col-md-3">
                            <img src={props.recipe.image} alt={props.recipe.name}/>
                        </div>
                        <div className="col-md-9">
                            <h2>Recipe Name: {props.recipe.name}</h2>
                            <p>Calories: {props.recipe.calories}</p>
                            <p>Ingredients: {props.recipe.ingredients}</p>
                      
                        </div>
                    </div>
                    
    )
}

