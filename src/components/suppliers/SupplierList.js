import React from "react";
import { Link } from "react-router-dom";
import { Card, Meta, Avatar, List } from "antd";

const SupplierList = props => {
  const { supplier } = props;

  const { Meta } = Card;

  const materialsCategoryArray = supplier.materials.map(
    material => material.category
  );

  const data = [
    {
      id: supplier.id,
      title: supplier.name,
      subtitle: supplier.location,
      category: supplier.category
    }
  ];

  return (
    <React.Fragment>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<Link to={`/suppliers/${item.id}`}>more</Link>]}>
            <List.Item.Meta
              avatar={
                <Link to={`/suppliers/${item.id}`}>
                  <Avatar
                    shape="square"
                    size={80}
                    style={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                      marginBottom: 20
                    }}
                  >
                    {item.title.charAt(0)}
                  </Avatar>
                </Link>
              }
              title={<Link to={`/suppliers/${item.id}`}>{item.title}</Link>}
              description={item.subtitle}
            />
            <div>Category: {item.category}</div>
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default SupplierList;
