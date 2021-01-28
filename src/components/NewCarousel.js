import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

import img1 from '../assets/hondacity.jpg'

const NewCarousel = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    Row 1 Col 1
                </div>
                <div className="col">
                    Row 1 Col 2
                </div>
            </div>
            <div className="row">
            <div className="col">
                    Row 2 Col 1
                </div>
            </div>
        </div>
    )
}

export default NewCarousel