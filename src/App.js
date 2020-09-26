import React from "react";
import "./assets/css/App.css";
import logo from "./assets/images/logo.png";

// Bootstrap
import Container from "react-bootstrap/Container";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone, faUserClock, faClock, faTruck } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faFacebookF,
  faInstagramSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faPhone,
  faUserClock,
  faClock,
  faTruck,
  faFacebookSquare,
  faInstagramSquare,
  faInstagram,
  faFacebookF,
);

//JSX
import Header from "./Header.js";
import Banner from "./Banner.js";
import Product from "./Product.js";
import Imgbanner from "./Imgbanner.js";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teaTreeAmazon: "https://www.amazon.in/dp/B08FC12DTQ/ref=cm_sw_r_wa_api_i_CkktFbTT0A1CJ",
      teaTreeFlipkart: "https://www.flipkart.com/blask-tree-charcoal-best-pimple-acne-oily-skin-aloevera-activated-beads-face-wash/p/itm5e8816cfdc1b7?pid=FCWFUGDADTRRUQUC&cmpid=product.share.pp",
      neemAmazon: "https://www.amazon.in/dp/B08FBJMVD5/ref=cm_sw_r_wa_api_i_1kktFb698CNV1",
      neemFlipkart: "https://www.flipkart.com/blask-anti-acne-pimple-clear-oil-neem-face-wash/p/itmc7b58c0038c23?pid=FCWFUGCKEW4D9D4E&cmpid=product.share.pp",
      amazonLink: "https://www.amazon.in/dp/B08FC12DTQ/ref=cm_sw_r_wa_api_i_CkktFbTT0A1CJ",
      flipkartLink: "https://www.flipkart.com/beauty-and-grooming/body-face-skin-care/body-and-face-care/face-wash/blask~brand/pr?sid=g9b,ema,5la,jav&marketplace=FLIPKART&otracker=product_breadCrumbs_Blask+Face+Wash",
    };
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Header logo={logo}></Header>
        </Container>
        <Banner
          amazonLink={this.state.amazonLink}
          flipkartLink={this.state.flipkartLink}
        ></Banner>
        <Product
          teaTreeAmazon={this.state.teaTreeAmazon}
          teaTreeFlipkart={this.state.teaTreeFlipkart}
          neemAmazon={this.state.neemAmazon}
          neemFlipkart={this.state.neemFlipkart}
        ></Product>
        <Imgbanner></Imgbanner>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
