import React from "react";

import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href=""
                >
                  TouchDown Cabs
                </a>
              </li>
              <li>
                <a
                  href=""
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Shubham Allyan
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
