import React from 'react'
import {Carousel} from "react-bootstrap"
export default function Banner() {
    return (
        <div className="App">
            <Carousel className="Banner">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://live.staticflickr.com/4038/4686112993_9583daf5b4_b.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
    )
}
