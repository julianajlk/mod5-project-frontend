import React, { Component } from "react";

import { connect } from "react-redux";
import { updateGarment } from "../actions/actions";

// import { showDrawerEdit } from "./Garment";

import {
  Form,
  Input,
  InputNumber,
  Slider,
  Button,
  // Upload,
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
    name: this.props.selectedGarment.name,
    file_upload: "",
    category: this.props.selectedGarment.category,
    season: "Spring",
    year: "2019",
    location: this.props.selectedGarment.location,
    status: this.props.selectedGarment.status,
    fabrication: this.props.selectedGarment.fabrication,
    trim_button: 1,
    trim_label: 1,
    trim_zipper: 1,
    trim_hangtag: 1,
    sizing: "XS",
    measurement: this.props.selectedGarment.measurement,
    fit_comment: this.props.selectedGarment.fit_comment,
    comment: this.props.selectedGarment.comment
  };

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
      trim_button: this.state.trim_button,
      trim_label: this.state.trim_label,
      trim_zipper: this.state.trim_zipper,
      trim_hangtag: this.state.trim_hangtag,
      sizing: this.state.sizing,
      measurement: this.state.measurement,
      fit_comment: this.state.fit_comment,
      comment: this.state.comment
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

    let file = {
      file_upload: this.state.file_upload
    };

    this.props.updateGarment(
      newGarment,
      this.props.selectedGarment.id,
      // this.props.history.push,
      // this.state.file_upload,
      file
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
      trim_button: "",
      trim_label: "",
      trim_zipper: "",
      trim_hangtag: "",
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

  //InputNumber doesn't take a name= so need a separate function for each number input
  handleTrimButton = value => {
    this.setState({
      trim_button: value
    });
  };

  handleTrimLabel = value => {
    this.setState({
      trim_label: value
    });
  };

  handleTrimZipper = value => {
    this.setState({
      trim_zipper: value
    });
  };

  handleTrimHangtag = value => {
    this.setState({
      trim_hangtag: value
    });
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

  render() {
    const pStyle = {
      marginBottom: 16
    };
    console.log("garment edit", this.props.selectedGarment);

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
          <Input
            name="category"
            value={this.state.category}
            placeholder="Category"
            style={pStyle}
            onChange={event => this.handleOnChange(event)}
          />
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
          <FormItem label="Trims">
            <InputNumber
              min={1}
              max={15}
              defaultValue={this.props.selectedGarment.trim_button}
              onChange={this.handleTrimButton}
            />
            <span className="ant-form-text"> buttons</span>
            <InputNumber
              min={1}
              max={15}
              defaultValue={this.props.selectedGarment.trim_label}
              onChange={this.handleTrimLabel}
            />
            <span className="ant-form-text"> labels</span>
            <InputNumber
              min={1}
              max={15}
              defaultValue={this.props.selectedGarment.trim_zipper}
              onChange={this.handleTrimZipper}
            />
            <span className="ant-form-text"> zippers</span>
            <InputNumber
              min={1}
              max={15}
              defaultValue={this.props.selectedGarment.trim_hangtag}
              onChange={this.handleTrimHangtag}
            />
            <span className="ant-form-text"> hangtags</span>
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
              style={{ marginLeft: 10 }}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { updateGarment }
)(GarmentFormEdit);
