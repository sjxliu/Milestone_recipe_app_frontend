import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardGroup } from "react-bootstrap";
import RecipeDescription from "./RecipeDescription";

function RecipeCards({ img, link }) {

  
  return (
    <div className="card-container">
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <RecipeDescription />
            <Button variant="primary" href={link}>
              Go to recipe!
            </Button>
            <Button variant="success">Add to Favs</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <RecipeDescription />
            <Button variant="primary" href={link}>
              Go to recipe!
            </Button>
            <Button variant="success">Add to Favs</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <RecipeDescription />
            <Button variant="primary" href={link}>
              Go to recipe!
            </Button>
            <Button variant="success">Add to Favs</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default RecipeCards;
