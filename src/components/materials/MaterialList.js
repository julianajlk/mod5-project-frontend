import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, Avatar, Select, Input, Card } from "antd";

const { Meta } = Card;

const { Option } = Select;
const Search = Input.Search;

class MaterialList extends Component {
  state = {
    search: "",
    sortBy: ""
  };

  handleOnSearch = event => {
    console.log(event.target.value);
    this.setState({
      search: event.target.value
    });
  };

  handleChange = value => {
    console.log(`selected ${value}`);
    this.setState({
      sortBy: value
    });
  };

  sortMaterials = materials => {
    if (this.state.sortBy === "category") {
      return this.filterSearch(materials).sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    } else if (this.state.sortBy === "price") {
      return this.filterSearch(materials).sort((a, b) =>
        a.price.localeCompare(b.price)
      );
    } else if (this.state.sortBy === "supplier") {
      return this.filterSearch(materials).sort((a, b) =>
        a.supplier.name.localeCompare(b.supplier.name)
      );
    } else {
      return this.filterSearch(materials);
    }
  };

  filterSearch = materials => {
    if (this.state.search) {
      return materials.filter(
        material =>
          material.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          material.category
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
      );
    } else {
      return materials;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ display: "block" }}>
          <Search
            value={this.state.search}
            placeholder="Search"
            onChange={event => this.handleOnSearch(event)}
            style={{
              width: 200,
              marginBottom: 20,
              marginRight: 15,
              display: "inline-block"
            }}
          />
          <Select
            placeholder="Sort by"
            style={{ width: 200, marginBottom: 20, display: "inline-block" }}
            onChange={this.handleChange}
          >
            <Option value="category">Category</Option>
            <Option value="price">Price</Option>
            <Option value="supplier">Supplier</Option>
          </Select>
        </div>

        {this.props.materials
          ? this.sortMaterials(this.props.materials).map(material => (
              <Card
                title={material.name}
                extra={<Link to={`/materials/${material.id}`}>More</Link>}
                style={{
                  width: 300,
                  marginBottom: 20,
                  marginRight: 20,
                  display: "inline-block"
                }}
              >
                <Meta
                  avatar={
                    <Avatar shape="square" size={64} src={material.image_url} />
                    // <Avatar
                    //   style={{
                    //     color: "#f56a00",
                    //     backgroundColor: "#fde3cf"
                    //   }}
                    // >
                    //   {material.name.charAt(0)}
                    // </Avatar>
                  }
                  title={material.supplier.name}
                  description={material.supplier.location}
                />
                <p
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    color: "rgba(0, 0, 0, 0.45)",
                    fontSize: "14px"
                  }}
                >
                  {material.category}
                </p>
              </Card>
            ))
          : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    materials: state.materials,
    garments: state.garments
  };
};

export default MaterialList;
