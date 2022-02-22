import "./index.css";
import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";

export default function App() {
  const APIKey = process.env.REACT_APP_SPOONACULAR_KEY;
  let [response, updateRes] = useState([]);

  const [recipeData, setRecipeData] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    fetch()
      //  `https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${APIKey}`
      // this crashes the page when uncommented
      .then((res) => res.json())
      .then((res) => updateRes(res.results))
      .catch(() => {
        console.log("error");
      });
  });
  const searchResults = response.map((recipe, index) => {
    return <h6 key={index}>{recipe.title}</h6>;
  });

  return (
    <div className="App">
      <h1>Got Munchies?</h1>
      <div>
        <section className="search-form">
          <input
            className="search-form"
            type="text"
            placeholder="lookin' for some munchies"

            // onChange={handleChange}
          />
          <button type="submit" className="recipe">
            Munch Away
          </button>
        </section>
        <RecipeList 
        
        // Should be the cards here

        />
        <div>{searchResults}</div>
      </div>
    </div>
  );
}
