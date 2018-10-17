import React, { Component } from "react";

import {
  Form,
  Input,
  InputNumber,
  Slider,
  Button,
  Upload,
  message,
  Icon,
  Select
} from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

class GarmentForm extends Component {
  state = {
    name: "",
    image_url: "",
    category: "",
    season: "",
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
  };

  handleOnSubmit = event => {
    event.preventDefault();
    // this.props.createGarment({
    //   name: this.state.name,
    //   image_url: this.state.image_url,
    //   category: this.state.category,
    //   season: this.state.season,
    //   location: this.state.location,
    //   status: this.state.status,
    //   fabrication: this.state.fabrication,
    //   trim_button: this.state.trim_button,
    //   trim_label: this.state.trim_label,
    //   trim_zipper: this.state.trim_zipper,
    //   trim_hangtag: this.state.trim_hangtag,
    //   sizing: this.state.sizing,
    //   measurement: this.state.measurement,
    //   fit_comment: this.state.fit_comment,
    //   comment: this.state.comment
    // });
    // // this.props.history.push("/garments/" + this.props.garment.id);
    // this.setState({
    //   name: "",
    //   image_url: "",
    //   category: "",
    //   season: "",
    //   location: "",
    //   status: "",
    //   fabrication: "",
    //   trim_button: "",
    //   trim_label: "",
    //   trim_zipper: "",
    //   trim_hangtag: "",
    //   sizing: "",
    //   measurement: "",
    //   fit_comment: "",
    //   comment: ""
    // });
  };

  //not working yet
  handleNumberInput = event => {
    console.log(event.target);
    // this.setState({
    //   [event.target.name]: event.target.value
    // });
  };

  handlePictureUpload = info => {
    console.log("Upload", info, info.file.name);
    this.setState({
      picture: info.file.name
    });
  };

  handleOnChange = event => {
    // console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //not working yet
  handleSelectChange = value => {
    console.log("garment form", value);
    this.setState({
      season: value
    });
  };

  //not working yet
  handleSliderSizing = value => {
    console.log(value);
    this.setState({
      sizing: value
    });
  };

  render() {
    const pStyle = {
      marginBottom: 16
    };

    //picture upload
    const props = {
      name: "file",
      action: "//jsonplaceholder.typicode.com/posts/",
      headers: {
        authorization: "authorization-text"
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.file.name, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

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
          <FormItem label="Season" name="season">
            <InputGroup onChange={this.handleSelectChange} compact>
              <Select defaultValue="Spring">
                <Option value="Spring">Spring</Option>
                <Option value="Summer">Summer</Option>
                <Option value="Fall">Fall</Option>
                <Option value="Winter">Winter</Option>
                <Option value="Cruise">Cruise</Option>
              </Select>
              <Select defaultValue="2019">
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
            <Upload {...props} onChange={this.handlePictureUpload}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </FormItem>
          <FormItem label="Trims">
            <InputNumber
              name="trim_button"
              min={1}
              max={15}
              defaultValue={1}
              onChange={this.handleNumberInput}
            />
            <span className="ant-form-text"> buttons</span>
            <InputNumber
              name="trim_label"
              min={1}
              max={15}
              defaultValue={1}
              onChange={this.handleNumberInput}
            />
            <span className="ant-form-text"> labels</span>
            <InputNumber
              name="trim_zipper"
              min={1}
              max={15}
              defaultValue={1}
              onChange={this.handleNumberInput}
            />
            <span className="ant-form-text"> zippers</span>
            <InputNumber
              name="trim_hangtag"
              min={1}
              max={15}
              defaultValue={1}
              onChange={this.handleNumberInput}
            />
            <span className="ant-form-text"> hangtags</span>
          </FormItem>
          <FormItem label="Sizing" onChange={this.handleSliderSizing}>
            <Slider
              marks={{
                0: "XS",
                20: "S",
                40: "M",
                60: "L",
                80: "XL",
                100: "XXL"
              }}
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
          </div>
        </Form>
      </div>
    );
  }
}

// :name, :image_url, :category, :season, :location, :status, :fabrication, :trim, :sizing, :measurement, :fit_comment, :comment, :brand_id
export default GarmentForm;
