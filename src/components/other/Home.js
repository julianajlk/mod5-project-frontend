import React from "react";
import { Carousel, Button } from "antd";

const Home = () => {
  return (
    <div>
      <React.Fragment>
        <Carousel autoplay>
          <div>
            <h3>WELCOME TO APParel!</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Carousel>
      </React.Fragment>
      <React.Fragment>
        <div className="home-button-container">
          <Button type="primary" htmlType="submit" style={{ margin: 20 }}>
            SIGN UP
          </Button>
          <Button type="primary" htmlType="submit" style={{ margin: 20 }}>
            LOGIN
          </Button>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Home;
