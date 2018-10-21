import React, { Component } from "react";
import { Divider, Table, Tag } from "antd";

class GarmentMaterials extends Component {
  render() {
    const { material } = this.props;

    return (
      <div>
        {/* <Table columns={columns} dataSource={data} /> */}
        <h4>{material.name}</h4>
        <h5>Item# {material.item_number}</h5>
        <p>Category: {material.category}</p>
        <p>Size: {material.size}</p>
        <p>Color: {material.color}</p>
        <p>Usage: {material.usage}</p>
        <p>Price: {material.price}</p>
        <p>Comment: {material.comment}</p>
      </div>
    );
  }
}

export default GarmentMaterials;
