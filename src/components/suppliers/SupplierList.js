import React from "react";
import { Link } from "react-router-dom";
import { Card, Meta, Avatar } from "antd";

const SupplierList = props => {
  const { supplier } = props;

  const { Meta } = Card;

  const materialsCategoryArray = supplier.materials.map(
    material => material.category
  );

  // removeDuplicates = array => {
  //   [...new Set(array)];
  // };

  return (
    <Card
      title={supplier.name}
      extra={<Link to={`/suppliers/${supplier.id}`}>More</Link>}
      style={{ width: 300, marginBottom: 20 }}
    >
      <Meta
        avatar={
          <Avatar
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf"
            }}
          >
            {supplier.name.charAt(0)}
          </Avatar>
        }
        title={supplier.location}
        description={[...new Set(materialsCategoryArray)]}
      />
      {/* Materials:
      {supplier.materials.map(material => (
        <p>{material.name}</p>
      ))} */}
    </Card>
  );
};

export default SupplierList;
