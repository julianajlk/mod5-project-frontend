import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon, Input, Select, Spin } from "antd";

const { Meta } = Card;
const { Option } = Select;
const Search = Input.Search;

class GarmentList extends Component {
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

  sortGarments = garments => {
    if (this.state.sortBy === "name") {
      return this.filterSearch(garments).sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (this.state.sortBy === "season") {
      return this.filterSearch(garments).sort((a, b) =>
        a.season.localeCompare(b.season)
      );
    } else if (this.state.sortBy === "category") {
      return this.filterSearch(garments).sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    } else {
      return this.filterSearch(garments);
    }
  };

  filterSearch = garments => {
    if (this.state.search) {
      return garments.filter(garment =>
        garment.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    } else {
      return garments;
    }
  };

  render() {
    // console.log(this.props.garments);

    const loadingIcon = (
      <Icon
        type="loading"
        theme="outlined"
        style={{ fontSize: 30, marginBottom: 30 }}
        spin
      />
    );

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
            // defaultValue="lucy"
            style={{ width: 200, marginBottom: 20, display: "inline-block" }}
            onChange={this.handleChange}
          >
            <Option value="name">Name</Option>
            <Option value="season">Season</Option>
            <Option value="category">Category</Option>
          </Select>
        </div>

        {this.props.loading ? (
          <div className="loading-div">
            <Spin indicator={loadingIcon} />
            <h4>l o a d i n g ...</h4>
          </div>
        ) : null}

        {this.props.garments
          ? this.sortGarments(this.props.garments).map(garment => (
              <Card
                // hoverable (changes the cursor to click on hover)
                key={garment.id}
                style={{
                  width: 240,
                  marginRight: 20,
                  marginBottom: 20,
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
              </Card>
            ))
          : null}
      </React.Fragment>
    );
  }
}

export default GarmentList;
