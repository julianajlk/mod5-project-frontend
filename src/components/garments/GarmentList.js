import React from "react";

import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const GarmentList = props => {
  const { garment } = props;

  return (
    // <React.Fragment>
    //   <Card
    //     title={garment.name}
    //     extra={
    //       <Link className="item" to={`/garments/${garment.id}`}>
    //         More
    //       </Link>
    //     }
    //     cover={<img alt="example" src={garment.image_url} />}
    //     style={{ width: 300 }}
    //   >
    //     <p>Season: {garment.season}</p>
    //     {/* <img src={garment.image_url} /> */}
    //   </Card>
    // </React.Fragment>

    <Link className="item" to={`/garments/${garment.id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={garment.url} />}
      >
        <Meta
          title={garment.name}
          description={garment.season}
          extra={
            <Link className="item" to={`/garments/${garment.id}`}>
              More
            </Link>
          }
        />
      </Card>
    </Link>
  );
};

export default GarmentList;
