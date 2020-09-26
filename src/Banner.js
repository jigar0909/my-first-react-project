import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ban from "./assets/images/dow_img.png";
// import flipkartLogo from "./assets/images/flipkart.png";
// import amazonLogo from "./assets/images/amazon.png";

function Banner(props) {
  return (
    <div className="banner-container">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className="text-center">
            <h2 className="title">Available on <br/> Amazon and Flipkart</h2>
            <a
              href={props.amazonLink}
              title="SHOP NOW ON AMAZON"
              className="btnLink first"
              target="_blank"
            >
              SHOP NOW ON AMAZON
            </a>
            <br />
            <a
              href={props.flipkartLink}
              title="SHOP NOW ON FLIPKART"
              className="btnLink"
              target="_blank"
            >
              SHOP NOW ON FLIPKART
            </a>

            <h3 className="mtop">100% Natural Face Wash</h3>
            
          </Col>
          <Col xs={12} md={6} lg={6} className="text-center bnr">
            <img
              src={ban}
              title="Charcoal & Neem Facewash"
              alt="Charcoal & Neem Facewash"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
