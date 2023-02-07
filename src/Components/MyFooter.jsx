import { Component } from "react";

import Card from "react-bootstrap/Card";

class MyFooter extends Component {
  render() {
    return (
      <Card className="text-center">
        <Card.Header>Books for everyone</Card.Header>
        <Card.Body>
          <Card.Title>Luca's Book Shop</Card.Title>
          <Card.Text>All generes..</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default MyFooter;
