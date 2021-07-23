import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Offercarousal.css';
const OfferSlider = () => {
    return <Carousel className={'offercarousal'}>
        <Carousel.Item className={'offercarousal'}>
            <img
                className="o-img"
                src="https://cdn.pixabay.com/photo/2016/12/03/01/35/black-friday-1878945__340.png"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={'offercarousal'}>
            <img
                className="o-img"
                src="https://cdn.pixabay.com/photo/2016/03/07/10/32/color-1241879__340.jpg"
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}
export default OfferSlider