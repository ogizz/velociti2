import React from 'react'
import NavBar from '../components/NavBar'

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


const VehiclesScreen = () => {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url(" + require("assets/images/vehicles.jpg") + ")",
                }}
                className="page-header page-header-xs"
                data-parallax={true}
                ref={pageHeader}
            >

            </div>
            <div className="main">
                <div className="section text-center">
                    <Container>
                        
                        <br />
                        <br />
                        <Row>
                            <Col md="4">
                                <CarCard />
                            </Col>
                            <Col md="4">
                                <CarCard />
                            </Col>
                            <Col md="3">
                                <CarCard />
                            </Col>
                            <Col md="4">
                                <CarCard />
                            </Col>
                            <Col md="4">
                                <CarCard />
                            </Col>
                            <Col md="4">
                                <CarCard />
                            </Col>
                            <Col md="4">
                                <CarCard />
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </div>

        </>

    )
}

export default VehiclesScreen

