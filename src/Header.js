import React from "react";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//font-awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  return (
    <div>
      <header>
        <Row className="header-block">
          <Col className="text-left" xs={8} md={8} lg={6}>
            <div className="web-header">
              <a
                href="mailto:help.blask@gmail.com"
                title="Email us on help.blask@gmail.com"
              >
                <FontAwesomeIcon icon="envelope" size="lg" />
                help.blask@gmail.com
              </a>
              <a
                href="tel:+918160375737"
                title="Call us on +91 8160375737"
                className="ml-15"
              >
                <FontAwesomeIcon icon="phone" size="lg" /> +91 8160375737
              </a>
            </div>
            <div className="mobile-header">
              <a
                href="help.blask@gmail.com"
                title="Email us on help.blask@gmail.com"
              >
                <FontAwesomeIcon icon="envelope" size="lg" />
              </a>
              <a
                href="tel:+918160375737"
                title="Call us on +91 8160375737"
                className="ml-15"
              >
                <FontAwesomeIcon icon="phone" size="lg" />
              </a>
            </div>
          </Col>
          <Col className="text-right" xs={4} md={4} lg={6}>
            <a
              href="https://www.facebook.com/blask.official/"
              title="Follow us on Facebook"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/blask.official"
              title="Follow us on Instagram"
              target="_blank"
              className="ml-15"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
            </a>
          </Col>
        </Row>
      </header>
      <div className="header">
        <img
          src={props.logo}
          alt="Blask - Brilliance Achieved"
          title="Blask - Brilliance Achieved"
          className="logo"
        />
      </div>
    </div>
  );
}

export default Header;
