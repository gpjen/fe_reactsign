import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CardProduct() {
  return (
    <Card className="shadow-lg zoomHover">
      <div className="detailCard">
        <Card.Img
          variant="top"
          src="https://cdn.dribbble.com/userupload/2644935/file/original-c17150a1afc270c583b61a134964177a.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200"
        />
      </div>
      <Card.Body>
        <Card.Title>book title</Card.Title>
        <Card.Text className="fs-5">
          desc is a wider card with supporting text below as a natural lead-in
          to additional content...
        </Card.Text>
        <div className="d-grid gap-2">
          <Button variant="primary" size="sm">
            Read
          </Button>
          <Button variant="secondary" size="sm">
            Add
          </Button>
        </div>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <p>Added by</p>
        </small>
      </Card.Footer>
    </Card>
  );
}
