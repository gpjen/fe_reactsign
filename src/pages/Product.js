import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

//import components
import CardProduct from "../components/CardProduct";

export default function Product() {
  const [books, seBooks] = useState({});

  // useEffect()

  return (
    <Container>
      <h1 className="text-center pt-5 mb-5"> THIS IS PRODUCT</h1>
      <Row>
        <Col md={3} className="mb-3">
          <CardProduct />
        </Col>
        <Col md={3} className="mb-3">
          <CardProduct />
        </Col>
        <Col md={3} className="mb-3">
          <CardProduct />
        </Col>
        <Col md={3} className="mb-3">
          <CardProduct />
        </Col>
        <Col md={3} className="mb-3">
          <CardProduct />
        </Col>
        <Col md={3} className="mb-3">
          <CardProduct />
        </Col>
      </Row>
    </Container>
  );
}
