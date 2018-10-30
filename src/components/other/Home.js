import React from "react";
import { Carousel, Button } from "antd";
import sliderImg1 from "../../images/slider_1.jpg";
import sliderImg2 from "../../images/slider_2.jpg";
import sliderImg3 from "../../images/slider_3.jpg";
import apparelLogoGif from "../../images/apparelogo.gif";

const Home = () => {
  return (
    <div>
      <React.Fragment>
        <img src={apparelLogoGif} alt="apparel" />
        <Carousel autoplay>
          <div>
            <img src={sliderImg1} alt="img" />
          </div>
          <div>
            <img src={sliderImg2} alt="img" />
          </div>
          <div>
            <img src={sliderImg3} alt="img" />
          </div>
        </Carousel>
      </React.Fragment>
    </div>
  );
};

export default Home;
