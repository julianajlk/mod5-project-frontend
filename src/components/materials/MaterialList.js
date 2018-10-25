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
    if (this.state.sortBy === "trim") {
      return this.filterSearch(materials).sort((a, b) =>
        a.trim.localeCompare(b.trim)
      );
    } else if (this.state.sortBy === "fabric") {
      return this.filterSearch(materials).sort((a, b) =>
        a.fabric.localeCompare(b.fabric)
      );
    } else {
      return this.filterSearch(materials);
    }
  };

  filterSearch = materials => {
    if (this.state.search) {
      return materials.filter(material =>
        material.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    } else {
      return materials;
    }
  };

  render() {
    const { materials } = this.props;

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
            placeholder="Sort by type"
            style={{ width: 200, marginBottom: 20, display: "inline-block" }}
            onChange={this.handleChange}
          >
            <Option value="trim">Trim</Option>
            <Option value="fabric">Fabric</Option>
          </Select>
        </div>

        {materials
          ? materials.map(material => (
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
                    <Avatar
                      style={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf"
                      }}
                    >
                      {material.name.charAt(0)}
                    </Avatar>
                  }
                  title={material.category}
                  description={material.supplier.name}
                />
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
