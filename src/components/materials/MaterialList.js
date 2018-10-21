import React from "react";
// import { Link } from "react-router-dom";
import { List, Avatar } from "antd";

const MaterialList = props => {
  const { material } = props;

  const data = [
    {
      id: material.id,
      title: material.name,
      subtitle:
        material.category.charAt(0).toUpperCase() + material.category.slice(1),
      number: material.item_number
    }
  ];
  return (
    <React.Fragment>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[<a>edit</a>, <a href={`/materials/${item.id}`}>more</a>]}
          >
            <List.Item.Meta
              avatar={
                <Avatar shape="square" size={64} icon="question" />
                // <Avatar
                //   size={64}
                //   src="https://api.meleven.de/out/unionknopf/h_355,w_355,m_limit,o_resize/63.68.74.001800100996111.png"
                // />
              }
              title={<a href={`/materials/${item.id}`}>{item.title}</a>}
              description={item.subtitle}
            />
            <div>Item# {item.number}</div>
          </List.Item>
        )}
      />
      {/* <List grid={{ gutter: 16, column: 4 }}>
        <List.Item>
          <Card
            title={material.item_number}
            style={{
              width: 180,
              margin: 5,
              display: "inline-block"
            }}
          >
            {material.name}
          </Card>
        </List.Item>
      </List> */}
    </React.Fragment>
  );
};

export default MaterialList;
