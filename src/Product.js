import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import charcoal from "./assets/images/tea-tree-charcoal-the-blask.png";
import neem from "./assets/images/neem-facewash-the-blask.png";

function Product(props) {
  return (
    <div>
      <Container fluid className="spacerCls">
        <Row>
          <Col xs={12} md={6} lg={6} className="text-center">
            <div className="quick-banner-left quick-banner">
              <Row className="vcenter">
                <Col xs={12} md={12} lg={6}>
                  <img
                    src={charcoal}
                    className="ml-15"
                    alt="Tea Tree & Charcoal Facewash - The Blask"
                    title="Tea Tree & Charcoal Facewash - The Blask"
                  ></img>
                </Col>
                <Col xs={12} md={12} lg={6}>
                  <h2>
                    Tea Tree & Charcoal
                  </h2>
                  <br />
                  <a
                    href={props.teaTreeAmazon}
                    title="SHOP ON AMAZON"
                    className="btnLink btnLinkShop first"
                    target="_blank"
                  >
                    SHOP ON AMAZON
                  </a>
                  <br />
                  <a
                    href={props.teaTreeFlipkart}
                    title="SHOP ON AMAZON"
                    className="btnLink btnLinkShop"
                    target="_blank"
                  >
                    SHOP ON FLIPKART
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="text-center">
            <div className="quick-banner-right quick-banner">
              <Row className="vcenter">
                <Col xs={12} md={12} lg={6}>
                  <img
                    src={neem}
                    className="ml-15"
                    alt="Neem Facewash - The Blask"
                    title="Neem Facewash - The Blask"
                  ></img>
                </Col>
                <Col xs={12} md={12} lg={6} >
                  <h2>
                    Neem
                  </h2>
                  <br />
                  <a
                    href={props.neemAmazon}
                    title="SHOP ON AMAZON"
                    className="btnLink btnLinkShop first"
                    target="_blank"
                  >
                    SHOP ON AMAZON
                  </a>
                  <br />
                  <a
                    href={props.neemFlipkart}
                    title="SHOP ON AMAZON"
                    className="btnLink btnLinkShop"
                    target="_blank"
                  >
                    SHOP ON FLIPKART
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
