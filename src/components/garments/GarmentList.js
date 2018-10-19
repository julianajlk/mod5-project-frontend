import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon, Row, Col } from "antd";

const { Meta } = Card;

const GarmentList = props => {
  const { garment } = props;

  return (
    <React.Fragment>
      <Card
        // hoverable (changes the cursor to click on hover)
        style={{
          width: 240,
          margin: 10,
          display: "inline-block"
        }}
        cover={
          <img
            alt="cover_image"
            src={garment.url}
            style={{
              width: 200,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20
            }}
          />
        }
      >
        <Meta
          title={garment.name}
          description={garment.season}
          style={{ marginBottom: 0 }}
        />
        <Row>
          <Col span={8}>
            <Link className="item" to={`/garments/${garment.id}`}>
              <Button
                type="dashed"
                size="small"
                style={{
                  marginBottom: 5,
                  marginTop: 10,
                  color: "#ffa154",
                  fontSize: "11px"
                }}
              >
                EDIT
                <Icon type="edit" theme="outlined" />
              </Button>
            </Link>
          </Col>
          <Col span={16}>
            <Link className="item" to={`/garments/${garment.id}`}>
              <Button
                type="dashed"
                size="small"
                style={{
                  marginBottom: 5,
                  marginTop: 10,
                  color: "#ffa154",
                  fontSize: "11px"
                }}
              >
                SEE MORE
                <Icon type="right" />
              </Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default GarmentList;
