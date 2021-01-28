import React from "react";

import { Row, Container } from "reactstrap";
import {Button, Card} from 'react-bootstrap'

import img1 from '../assets/hondacity.jpg'

const CarsCard = () => {
    return (
        <div className="">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default CarsCard;
