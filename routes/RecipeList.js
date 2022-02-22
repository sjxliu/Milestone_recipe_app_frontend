import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
// import Recipes from "./Recipes"



function RecipeList() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
      <Card.Body>
        <Card.Title>
            {Recipe.Title}
        </Card.Title>
        <Card.Text>
         {Recipe.Summary}
        </Card.Text>
        <Button variant="primary">Go to recipe!</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeList;