import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateGarment, fetchMaterials } from "../actions/actions";

import {
  Form,
  Input,
  InputNumber,
  Slider,
  Button,
  Checkbox,
  Row,
  Col,
  message,
  Icon,
  Select
} from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

class GarmentFormEdit extends Component {
  state = {
    name: "",
    file_upload: "",
    category: "",
    season: "Spring",
    year: "2019",
    location: "",
    status: "",
    fabrication: "",
    materials: "",
    sizing: "XS",
    measurement: "",
    fit_comment: "",
    comment: "",
    materialsIds: ""
  };

  //need to fetch materials in order for garment to have access to it. Cannot just send materials from MaterialsComponent (/materials)
  componentDidMount() {
    //if condition fixes "this.props is undefined" on load of garment/id page
    if (this.props.selectedGarment) {
      this.setState({
        name: this.props.selectedGarment.name,
        file_upload: "",
        category: this.props.selectedGarment.category,
        season: "Spring",
        year: "2019",
        location: this.props.selectedGarment.location,
        status: this.props.selectedGarment.status,
        fabrication: this.props.selectedGarment.fabrication,
        materials: this.props.selectedGarment.materials,
        sizing: "XS",
        measurement: this.props.selectedGarment.measurement,
        fit_comment: this.props.selectedGarment.fit_comment,
        comment: this.props.selectedGarment.comment
      });
    }

    this.props.fetchMaterials();
  }

  handleOnSubmit = event => {
    event.preventDefault();
    let newGarment = {
      brand_id: 1,
      name: this.state.name,
      category: this.state.category,
      season: this.state.season + " " + this.state.year,
      location: this.state.location,
      status: this.state.status,
      fabrication: this.state.fabrication,
      sizing: this.state.sizing,
      measurement: this.state.measurement,
      fit_comment: this.state.fit_comment,
      comment: this.state.comment,
      materialsIds: this.state.materialsIds,
      file_upload: this.state.file_upload
    };

    // if (this.state.file_upload === "") {
    //   const file = {
    //     file_upload: null
    //   };
    // } else {
    //   const file = {
    //     file_upload: this.state.file_upload
    //   };
    // }

    //if there is a file_upload
    // if (this.state.file_upload) {
    //   const file = {
    //     file_upload: this.state.file_upload
    //   };
    // } else {
    //   const file = null;
    // }

    // let file = {
    //   file_upload: this.state.file_upload
    // };

    this.props.updateGarment(
      newGarment,
      this.props.selectedGarment.id
      // this.state.file_upload,
      // file
    );
    // // this.props.history.push("/garments/" + this.props.garment.id);
    this.setState({
      name: "",
      file_upload: "",
      category: "",
      season: "Spring",
      year: "2019",
      location: "",
      status: "",
      fabrication: "",
      sizing: "",
      measurement: "",
      fit_comment: "",
      comment: ""
    });
  };

  handleSliderSizing = marks => {
    console.log(marks);
    //REFACTOR THIS LATER
    if (marks[0] === 0 && marks[1] === 0) {
      this.setState({
        sizing: "XS"
      });
    } else if (marks[0] === 25 && marks[1] === 25) {
      this.setState({
        sizing: "S"
      });
    } else if (marks[0] === 50 && marks[1] === 50) {
      this.setState({
        sizing: "M"
      });
    } else if (marks[0] === 75 && marks[1] === 75) {
      this.setState({
        sizing: "L"
      });
    } else if (marks[0] === 100 && marks[1] === 100) {
      this.setState({
        sizing: "XL"
      });
    } else if (marks[0] === 0 && marks[1] === 25) {
      this.setState({
        sizing: "XS-S"
      });
    } else if (marks[0] === 0 && marks[1] === 50) {
      this.setState({
        sizing: "XS-M"
      });
    } else if (marks[0] === 0 && marks[1] === 75) {
      this.setState({
        sizing: "XS-L"
      });
    } else if (marks[0] === 0 && marks[1] === 100) {
      this.setState({
        sizing: "SX-XL"
      });
    } else if (marks[0] === 25 && marks[1] === 50) {
      this.setState({
        sizing: "S-M"
      });
    } else if (marks[0] === 25 && marks[1] === 75) {
      this.setState({
        sizing: "S-L"
      });
    } else if (marks[0] === 25 && marks[1] === 100) {
      this.setState({
        sizing: "S-XL"
      });
    } else if (marks[0] === 50 && marks[1] === 75) {
      this.setState({
        sizing: "M-L"
      });
    } else if (marks[0] === 50 && marks[1] === 100) {
      this.setState({
        sizing: "M-XL"
      });
    } else if (marks[0] === 75 && marks[1] === 100) {
      this.setState({
        sizing: "L-XL"
      });
    } else {
      this.setState({
        sizing: "XS-XL"
      });
    }
  };

  handlePictureUpload = event => {
    console.log("upload", event.target.files, event.target.info);
    if (event.target.files) {
      message.success(
        `${event.target.files[0].name} file uploaded successfully`
      );
    } else if (event.target.files === false) {
      message.error(`File upload failed.`);
    }
    this.setState({
      file_upload: event.target.files[0]
    });
  };

  handleOnChange = event => {
    // console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSelectSeason = value => {
    this.setState({
      season: value
    });
  };

  handleSelectYear = value => {
    this.setState({
      year: value
    });
  };

  //Material checkboxes
  handleMaterialChange = value => {
    console.log("checked = ", value);
    this.setState({
      materialsIds: value
    });
  };

  //Category selection/search
  handleCategoryChange = value => {
    console.log(`selected ${value}`);
    this.setState({
      category: value
    });
  };

  handleBlur = () => {
    console.log("blur");
  };

  handleFocus = () => {
    console.log("focus");
  };

  render() {
    console.log("garment edit", this.props.selectedGarment);
    console.log("materials", this.props.materials);

    const pStyle = {
      marginBottom: 16
    };

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    return (
      <div>
        <h2 style={{ marginTop: 30, marginBottom: 10 }}>Edit this Garment</h2>
        {this.props.selectedGarment ? (
          <Form onSubmit={event => this.handleOnSubmit(event)}>
            <Input
              name="name"
              value={this.state.name}
              placeholder="Item Name"
              style={pStyle}
              onChange={event => this.handleOnChange(event)}
            />
            <FormItem label="Category">
              <Select
                showSearch
                style={{ width: 200 }}
                value={this.state.category}
                // placeholder="Select a Category"
                optionFilterProp="children"
                onChange={this.handleCategoryChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="Tops">Tops</Option>
                <Option value="Bottoms">Bottoms</Option>
                <Option value="Dresses">Dresses</Option>
                <Option value="Outerwear">Outerwear</Option>
              </Select>
            </FormItem>
            <FormItem label="Season">
              <InputGroup compact>
                <Select
                  name="season"
                  defaultValue={this.props.selectedGarment.season.split(" ")[0]}
                  onChange={this.handleSelectSeason}
                >
                  <Option value="Spring">Spring</Option>
                  <Option value="Summer">Summer</Option>
                  <Option value="Fall">Fall</Option>
                  <Option value="Winter">Winter</Option>
                  <Option value="Cruise">Cruise</Option>
                </Select>
                <Select
                  name="year"
                  defaultValue={this.props.selectedGarment.season.split(" ")[1]}
                  onChange={this.handleSelectYear}
                >
                  <Option value="2019">2019</Option>
                  <Option value="2020">2020</Option>
                  <Option value="2021">2021</Option>
                  <Option value="2022">2022</Option>
                </Select>
              </InputGroup>
            </FormItem>
            <Input
              name="location"
              value={this.state.location}
              placeholder="Location"
              style={pStyle}
              onChange={event => this.handleOnChange(event)}
            />
            <Input
              name="status"
              value={this.state.status}
              placeholder="Status"
              style={pStyle}
              onChange={event => this.handleOnChange(event)}
            />
            <Input
              name="fabrication"
              value={this.state.fabrication}
              placeholder="Fabrication"
              style={pStyle}
              onChange={event => this.handleOnChange(event)}
            />
            <FormItem label="Technical Sketch">
              <Button>
                <label>
                  <Icon type="upload" />
                  {this.state.file_upload !== ""
                    ? " Picture Uploaded"
                    : " Click to Upload"}
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    onChange={event => this.handlePictureUpload(event)}
                  />
                </label>
              </Button>
              {this.state.file_upload !== "" ? (
                <p>
                  <Icon type="paper-clip" theme="outlined" />{" "}
                  {this.state.file_upload.name}
                </p>
              ) : null}
            </FormItem>

            <FormItem label="Materials">
              <Checkbox.Group
                style={{ width: "100%" }}
                onChange={this.handleMaterialChange}
              >
                <Row>
                  {this.props.selectedGarment.materials.map(material => (
                    <Col span={8}>
                      <Checkbox value={material.name}>{material.name}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </FormItem>

            <FormItem label="Sizing">
              <p>{this.props.selectedGarment.sizing}</p>
              <p>Select New Sizing:</p>
              <Slider
                range
                marks={{
                  0: "XS",
                  25: "S",
                  50: "M",
                  75: "L",
                  100: "XL"
                }}
                step={25}
                onChange={this.handleSliderSizing}
              />
            </FormItem>
            <TextArea
              placeholder="Measurements"
              rows={4}
              style={pStyle}
              name="measurement"
              value={this.state.measurement}
              onChange={event => this.handleOnChange(event)}
            />
            <TextArea
              placeholder="Fit Comments"
              rows={4}
              style={pStyle}
              name="fit_comment"
              value={this.state.fit_comment}
              onChange={event => this.handleOnChange(event)}
            />
            <TextArea
              placeholder="Comments"
              rows={4}
              style={pStyle}
              name="comment"
              value={this.state.comment}
              onChange={event => this.handleOnChange(event)}
            />
            <div style={{ marginTop: 16 }}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.props.showDrawerEdit}
                style={{ marginLeft: 10, marginBottom: 20 }}
              >
                Cancel
              </Button>
            </div>
          </Form>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("Garment", state, state.garments, ownProps, ownProps.garmentId);
  let selectedGarment = state.garments.find(
    garment => garment.id === parseInt(ownProps.garmentId)
  );
  // console.log("selectedGarment", selectedGarment);
  // debugger;
  return {
    selectedGarment: selectedGarment,
    garments: state.garments,
    materials: state.materials
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { updateGarment, fetchMaterials }
  )(GarmentFormEdit)
);
