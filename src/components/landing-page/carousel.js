import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../../css/landing-page/landing-page.css"

class LandingCarousel extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Carousel width="50vw" dynamicHeight>
                <div>
                    <img src="https://maxcdn.icons8.com/app/uploads/2016/03/material-1-1000x563.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://maxcdn.icons8.com/app/uploads/2016/03/material-1-1000x563.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://maxcdn.icons8.com/app/uploads/2016/03/material-1-1000x563.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default LandingCarousel;