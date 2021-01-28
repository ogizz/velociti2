import React from 'react'

import CarCard from '../components/CarCard'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const IndexPageComponent = () => {
  return (
    <div className="main">
      <div className="section text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">The TD Cars Advantage</h2>
              <h5 className="description">
                We simplified car rentals, so you can focus on what's important to you.
                </h5>
              <br />
              <Button
                className="btn-round"
                color="info"
                href=""
                onClick={(e) => e.preventDefault()}
              >
                See Details
                </Button>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-album-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Fuel Cost Included</h4>
                  <p className="description">
                    Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!
                    </p>
                  <Button className="btn-link" color="info" href="#shubh">
                    See more
                    </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">No Hidden Charges</h4>
                  <p>
                    Our prices include taxes and insurance. What you see is what you really pay!
                    </p>
                  <Button className="btn-link" color="info" href="#shubh">
                    See more
                    </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                  <h4 className="info-title">Flexi Pricing Packages</h4>
                  <p>
                    One size never fits all, choose a balance of time and kilometers that work best for you.
                    </p>
                  <Button className="btn-link" color="info" href="#Shubh">
                    See more
                    </Button>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-sun-fog-29" />
                </div>
                <div className="description">
                  <h4 className="info-title">Go Anywhere</h4>
                  <p>
                    Our cars have all India permits, just remember to pay state tolls and entry taxes
                    </p>
                  <Button className="btn-link" color="info" href="#shubh">
                    See more
                    </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section section-dark text-center">
        <Container>
          <h2 className="title">What our customers say</h2>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#shubh" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#shubh" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Avinash Shah</CardTitle>
                      <h6 className="card-category">Next Event where</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    This is test testomonial for Touchdown, I really appreciate their work and this and that and this and that.
                    </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#shubh" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/joe-gardner-2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#shubh" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Simona agarwal</CardTitle>
                      <h6 className="card-category">NH7 Weekender</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    This is test testomonial for Touchdown, I really appreciate their work and this and that and this and that.                   </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#shubh" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/erik-lucatero-2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#shubh" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Justin Chaurasiya</CardTitle>
                      <h6 className="card-category">OML</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    This is test testomonial for Touchdown, I really appreciate their work and this and that and this and that.                    </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#shubh"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section landing-section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">Keep in touch?</h2>
              <Form className="contact-form">
                <Row>
                  <Col md="6">
                    <label>Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text" />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label>Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="text" />
                    </InputGroup>
                  </Col>
                </Row>
                <label>Message</label>
                <Input
                  placeholder="Tell us your thoughts and feelings..."
                  type="textarea"
                  rows="4"
                />
                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button className="btn-fill" color="danger" size="lg">
                      Send Message
                      </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

  )
}

export default IndexPageComponent