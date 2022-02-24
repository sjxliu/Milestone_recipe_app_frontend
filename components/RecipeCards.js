import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardGroup } from "react-bootstrap";

function RecipeCards(props) {
  return (
    <div className="card-container">
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.summary}</Card.Text>
            <Button variant="primary" href={props.link}>
              Go to recipe!
            </Button>
            <Button variant="success">Add to Favs</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.summary}</Card.Text>
            <Button variant="primary" href={props.link}>
              Go to recipe!
            </Button>
            <Button variant="success">Add to Favs</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.summary}</Card.Text>
            <Button variant="primary" href={props.link}>
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
