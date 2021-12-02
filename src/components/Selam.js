import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export function Selam({ isim }) {
  return <>{isim}</>;
}

export function Naber() {
  const divStyle = {
    color: "blue",
    backgroundColor: "purple",
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2" style={divStyle}>
          1 of 3
        </Col>
        <Col xs lg="6">
          Variable width content
        </Col>
        <Col xs lg="3">
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}
