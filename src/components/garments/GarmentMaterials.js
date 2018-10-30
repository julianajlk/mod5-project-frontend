import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Divider, Table, Icon } from "antd";

class GarmentMaterials extends Component {
  render() {
    // const { selectedGarment } = this.props;

    const columns = [
      {
        title: "Material",
        width: 120,
        dataIndex: "material",
        key: "material",
        fixed: "left",
        // FIX -- should be id from clicked
        render: text => <Link to={`/materials/${data[0].key}`}>{text}</Link>
      },
      {
        title: "Item#",
        width: 100,
        dataIndex: "item_number",
        key: "item_number"
        // fixed: "left"
      },
      {
        title: "Category",
        width: 100,
        dataIndex: "category",
        key: "category"
      },
      {
        title: "Price",
        width: 150,
        dataIndex: "price",
        key: "price"
      },
      {
        title: "Size",
        dataIndex: "size",
        key: "size"
      },
      {
        title: "Color",
        dataIndex: "color",
        key: "color"
      },
      {
        title: "Usage",
        dataIndex: "usage",
        key: "usage"
      },
      {
        title: "Comment",
        dataIndex: "comment",
        key: "comment"
      },
      // {
      //   title: "Tags",
      //   key: "tags",
      //   dataIndex: "tags",
      //   render: tags => (
      //     <span>
      //       {tags.map(tag => (
      //         <Tag color="blue" key={tag}>
      //           {tag}
      //         </Tag>
      //       ))}
      //     </span>
      //   )
      // },
      {
        title: "Remove",
        key: "operation",
        // fixed: "right",
        width: 100,
        render: () => (
          <span>
            {/* <a href="/">
              <Icon type="edit" theme="outlined" />
            </a>
            <Divider type="vertical" /> */}
            <a href="/">
              <Icon type="delete" theme="outlined" />
            </a>
          </span>
        )
      }
    ];
    console.log(this.props.selectedGarment);

    const data = this.props.selectedGarment.materials.map(material => ({
      key: material.id,
      material: material.name,
      item_number: material.item_number,
      category: material.category,
      price: material.price,
      size: material.size,
      color: material.color,
      usage: material.usage,
      comment: material.comment
    }));

    console.log("data", data);

    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          //horizontal scroll only
          // scroll={{ x: 1300}}
          scroll={{ x: 1300, y: 300 }}
          pagination={false}
          style={{ marginBottom: 40 }}
        />
      </div>
    );
  }
}

export default GarmentMaterials;
