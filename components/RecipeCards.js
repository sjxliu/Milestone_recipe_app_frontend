import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardGroup } from "react-bootstrap";
import RecipeDescription from "./RecipeDescription";

function RecipeCards({ image, link, id }) {
  return (
    <div className="card-container">
      <CardGroup>
        <Card style={{ width: "5rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body key={id}>
            <RecipeDescription title={RecipeDescription.title} />
            <Button variant="primary" href={link}>
              Go to recipe!
            </Button>
            <Button variant="success">Add to Favs</Button>
          </Card.Body>
        </Card>
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <RecipeDescription title={RecipeDescription.title} />
            <Button variant="primary" href={link}>
              Go to recipe!
            </Button>
            <Button variant="success">Add to Favs</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <RecipeDescription title={RecipeDescription.title}/>
            <Button variant="primary" href={link}>
              Go to recipe!
            </Button>
            <Button variant="success">Add to Favs</Button>
          </Card.Body>
        </Card> */}
      </CardGroup>
    </div>
  );
}

export default RecipeCards;
