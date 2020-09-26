import React from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//font-awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import banner_01 from "./assets/images/banner_01.jpg";
import banner_02 from "./assets/images/banner_02.jpg";
import banner_03 from "./assets/images/banner_03.jpg";

import partner_01 from "./assets/images/partner_01.png";
import partner_02 from "./assets/images/partner_02.png";

function Imgbanner(props) {
  return (
    <div>
      <Container fluid>
        <Row className="Imgbanner">
          <Col xs={12} md={4} lg={4}>
            <img src={banner_01} alt="Tea Tree" title="Tea Tree"></img>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img src={banner_02} alt="Charcoal" title="Charcoal"></img>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img src={banner_03} alt="Neem" title="Neem"></img>
          </Col>
        </Row>
        <Row className="text-center partner spacerCls vcenter">
          {/* <Col xs={12} md={9} lg={6} className="leftPartner">
            <span><FontAwesomeIcon icon="truck" size="lg" /> DELIVERY ON TIME | </span>
            <FontAwesomeIcon icon="truck" size="lg" /> DELIVERY ON TIME |
            <FontAwesomeIcon icon="truck" size="lg" /> DELIVERY ON TIME
          </Col>
          <Col xs={12} md={3} lg={6} className="rightPartner"> */}
          <Col>
            <img src={partner_01} alt="Vegan" title="Vegan"></img>
            <img
              src={partner_02}
              className="ml-15"
              alt="100% Natural Organic"
              title="100% Natural Organic"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Imgbanner;
