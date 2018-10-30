import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createGarment, fetchMaterials } from "../actions/actions";

import { Form, Input, Slider, Button, message, Icon, Select } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

class GarmentForm extends Component {
  state = {
    name: "",
    file_upload: "",
    category: "",
    season: "Spring",
    year: "2019",
    location: "",
    status: "",
    fabrication: "",
    materialsIds: "",
    sizing: "XS",
    measurement: "",
    fit_comment: "",
    comment: ""
  };

  //need to fetch materials in order for garment to have access to it. Cannot just send materials from MaterialsComponent (/materials)
  componentDidMount() {
    this.props.fetchMaterials();
  }

  handleOnSubmit = event => {
    console.log("submit", this.state.materialsIds);
    // console.log("submit", this.state.materials);
    event.preventDefault();
    let newGarment = {
      brand_id: 1,
      name: this.state.name,
      category: this.state.category,
      season: this.state.season + " " + this.state.year,
      location: this.state.location,
      status: this.state.status,
      fabrication: this.state.fabrication,
      materialsIds: this.state.materialsIds,
      sizing: this.state.sizing,
      measurement: this.state.measurement,
      fit_comment: this.state.fit_comment,
      comment: this.state.comment,
      file_upload: this.state.file_upload
    };

    let materialsIdArray = this.state.materialsIds;
    // let file = {
    //   file_upload: this.state.file_upload
    // };
    this.props.createGarment(this.props.history.push, newGarment);
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
      comment: "",
      file_upload: ""
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
        sizing: "XS-XL"
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

  handleMaterialChange = value => {
    console.log(`selected ${value}`);
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
    console.log("materials", this.props.materials);

    const pStyle = {
      marginBottom: 16
    };

    //Materials multiple selection-dropdown values
    const children = [];
    let materialNames = this.props.materials.map(material => (
      <Option key={material.id}>{material.name}</Option>
    ));
    children.push(materialNames);

    return (
      <div>
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
              placeholder="Select a Category"
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
                defaultValue="Spring"
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
                defaultValue="2019"
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
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Select all Materials"
              onChange={this.handleMaterialChange}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {children}
            </Select>
          </FormItem>

          <FormItem label="Sizing">
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
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.props.onClose}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { createGarment, fetchMaterials }
  )(GarmentForm)
);
