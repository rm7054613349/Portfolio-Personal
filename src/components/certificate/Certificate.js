import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import a1 from "../../images/1_page-0001.jpg";
import a2 from "../../images/2_page-0001.jpg";
import a3 from "../../images/3_page-0001";
import a4 from "../../images/4.png";
import a5 from "../../images/5.png";
import a6 from "../../images/6.png";
import a7 from "../../images/7.png";
import a8 from "../../images/8.jpg";
import mern from "../../images/MernCertificate.png";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={a1}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img
                src={a2}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img
                src={a8}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={a3}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={a4}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img src={a5} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>

            <Col md={4}>
              <img
                src={a6}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img src={a7} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={mern}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
          
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}
