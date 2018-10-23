import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon, Input, Select } from "antd";

const { Meta } = Card;
const { Option, OptGroup } = Select;
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

  //not working yet!!
  sortGarments = garments => {
    if (this.state.sortBy === "season") {
      return garments.sort((a, b) => a.season.localeCompare(b.season));
    } else if (this.state.sortBy === "category") {
      return garments.sort((a, b) => b.category.localeCompare(b.category));
    } else {
      return garments;
    }
  };

  render() {
    console.log(this.props.garments);
    // debugger;
    return (
      <React.Fragment>
        <Search
          value={this.state.search}
          placeholder="Search"
          onChange={event => this.handleOnSearch(event)}
          style={{ width: 200, marginBottom: 20, display: "block" }}
        />
        <Select
          placeholder="Sort by"
          // defaultValue="lucy"
          style={{ width: 200, marginBottom: 20, display: "block" }}
          onChange={this.handleChange}
        >
          <OptGroup label="Season">
            <Option value="season">season</Option>
            {/* <Option value="Spring 2019">Spring 2019</Option>
            <Option value="Fall 2019">Fall 2019</Option>
            <Option value="Cruise 2020">Cruise 2020</Option>
            <Option value="Spring 2020">Spring 2020</Option> */}
          </OptGroup>
          <OptGroup label="Category">
            <Option value="category">category</Option>
            {/* <Option value="Bottoms">Bottoms</Option>
            <Option value="Outerwear">Outerwear</Option>
            <Option value="Dresses">Dresses</Option> */}
          </OptGroup>
        </Select>

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

        {/* {this.props.garments
          ? this.props.garments
              .filter(garment =>
                garment.name
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              )
              .map(garment => (
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
          : null} */}

        {/* {this.props.garments.map(garment => (
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
        ))} */}

        {/* <Row>
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
          </Row> */}
      </React.Fragment>
    );
  }
}

export default GarmentList;
