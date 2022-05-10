import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import components
import CardProduct from "../components/CardProduct";

export default function Product() {
  // const [books, seBooks] = useState({});

  // useEffect()

  return (
    <Container>
      <h1 className="text-center pt-5 mb-5"> THIS IS PRODUCT</h1>
      <div className="d-flex flex-wrap">
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
        <div>
          <CardProduct />
        </div>
      </div>
    </Container>
  );
}
