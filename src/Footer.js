import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer(props) {
  return (
    <div>
      <header>
        <Container fluid>
          <Row className="header-block">
            <Col className="text-center footerText">
              Copyright © 2020 Blask - All Rights Reserved.
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Footer;
