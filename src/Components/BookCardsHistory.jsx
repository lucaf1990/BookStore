import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import History from "../Assets/history.json";

class BookCardsHistory extends Component {
  render() {
    return History.map((cover) => {
      return (
        <div className=" mt-3">
          <Card
            className="d-flex flex-column justify-content-between h-100"
            key={`indice-${parseInt(cover.asin)} `}
            style={{ width: "14rem" }}
          >
            <Card.Img
              variant="top"
              style={{ height: "300px" }}
              src={cover.img}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{cover.title} </Card.Title>
              <Card.Text>{cover.category}</Card.Text>
              <Button variant="dark"> Buy Now {cover.price} $ </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default BookCardsHistory;
