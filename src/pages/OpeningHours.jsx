import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-router-dom";

export default function OpeningHours() {
  return (
    <div className="mt-4 openingHoursSec">
      <Container fluid>
        <Col sm={12}>
          <Card>
            <Card.Header style={{ background: "#ffff" }}>
              <Card.Title as="p">Opening Hours</Card.Title>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}
