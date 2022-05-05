import React from "react";
import { Card } from "react-bootstrap";

export default function CardProduct() {
  return (
    <Card className="shadow-lg">
      <Card.Img
        variant="top"
        src="https://cdn.dribbble.com/userupload/2644935/file/original-c17150a1afc270c583b61a134964177a.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200"
      />
      <Card.Body>
        <Card.Title>book title</Card.Title>
        <Card.Text>
          desc is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Added By{" "}
          <img
            className="rounded"
            src="https://cdn.dribbble.com/userupload/2669446/file/original-ee4e7360a209eda6a4517eced70b0a0e.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200"
            alt="Risman22"
            height={20}
          />
        </small>
      </Card.Footer>
    </Card>
  );
}
