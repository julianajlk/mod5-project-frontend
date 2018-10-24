import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import {
  Divider,
  Collapse,
  Drawer,
  Button,
  Icon,
  Rate,
  Table,
  Alert,
  Form,
  Input,
  Avatar,
  Spin
} from "antd";

import { fetchMaterials, updateGarmentRate } from "../actions/actions";

import GarmentForm from "./GarmentForm";
import GarmentFormEdit from "./GarmentFormEdit";
import GarmentMaterials from "./GarmentMaterials";

const Panel = Collapse.Panel;
const { TextArea } = Input;

class Garment extends Component {
  state = {
    visible: false,
    visibleEdit: false,
    top: 10,
    fullView: false,
    value: this.props.selectedGarment.rate,
    comment: ""
  };

  //need to fetch materials in order for garment to have access to it. Cannot just send materials from MaterialsComponent (/materials)
  componentDidMount() {
    this.props.fetchMaterials();
    // this.setState({ value: this.props.selectedGarment.rate });
  }

  //FIX when click to undo, rate goes to zero
  handleChange = value => {
    this.setState({ value });
    console.log(this.props.selectedGarment.id, value);
    this.props.updateGarmentRate(this.props.selectedGarment.id, value);
  };

  //create drawer
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onCloseDrawer = () => {
    this.setState({
      visible: false
    });
  };

  //edit drawer
  showDrawerEdit = () => {
    this.setState({
      visibleEdit: true
    });
  };

  onCloseEdit = () => {
    this.setState({
      visibleEdit: false
    });
  };

  //full view
  toggleFullView = () => {
    this.setState({
      fullView: !this.state.fullView
    });
  };

  //comment/post NOT FUNCTIONAL
  handleOnSubmit = event => {
    console.log(event.target);
    event.preventDefault();
    this.props.createComment();
    this.setState({
      comment: ""
    });
  };

  handleComment = event => {
    console.log(event.target.value);
    this.setState({
      comment: event.target.value
    });
  };

  //   const text = (
  //   <p style={{ paddingLeft: 24 }}>
  //     A dog is a type of domesticated animal.
  //     Known for its loyalty and faithfulness,
  //     it can be found as a welcome guest in many households across the world.
  //   </p>
  // );

  render() {
    // console.log("garment page PROPS", this.props.selectedGarment.rate);
    // console.log("materials", this.props.materials);

    const garmentId = parseInt(window.location.href.split("/")[4]);

    const { value } = this.state;

    const columns = [
      {
        title: "Measurements",
        dataIndex: "measurement",
        key: "measurement",
        fixed: "left"
      },
      {
        title: "Inches",
        dataIndex: "inches",
        key: "inches"
      },
      {
        title: "Notes",
        dataIndex: "notes",
        key: "notes"
      }
    ];

    const data = this.props.selectedGarment
      ? [
          {
            key: "1",
            measurement: this.props.selectedGarment.measurement
              .split(",")[0]
              .split(":")[0],
            inches: this.props.selectedGarment.measurement
              .split(",")[0]
              .split(": ")[1],
            notes: "From Center Back"
          },
          {
            key: "2",
            measurement: this.props.selectedGarment.measurement
              .split(",")[1]
              .split(": ")[0],
            inches: this.props.selectedGarment.measurement
              .split(",")[1]
              .split(": ")[1],
            notes: "Armhole at 2 inches"
          },
          {
            key: "3",
            measurement: this.props.selectedGarment.measurement
              .split(",")[2]
              .split(": ")[0],
            inches: this.props.selectedGarment.measurement
              .split(",")[2]
              .split(": ")[1],
            notes: "Waist at Center Front"
          },
          {
            key: "4",
            measurement: this.props.selectedGarment.measurement
              .split(",")[3]
              .split(": ")[0],
            inches: this.props.selectedGarment.measurement
              .split(",")[3]
              .split(": ")[1],
            notes: "From Inner Collar"
          }
        ]
      : null;

    const loadingIcon = (
      <Icon
        type="loading"
        theme="outlined"
        style={{ fontSize: 30, marginBottom: 30 }}
        spin
      />
    );

    return (
      <div className="main-div">
        <React.Fragment>
          <Button onClick={this.showDrawer}>Create New Garment</Button>
          <Drawer
            title="New Garment"
            placement="left"
            closable={true}
            onClose={this.onCloseDrawer}
            visible={this.state.visible}
            width={720}
          >
            <GarmentForm materials={this.props.materials} />
          </Drawer>
        </React.Fragment>
        <React.Fragment>
          <Button onClick={this.showDrawerEdit} style={{ marginLeft: 15 }}>
            <Icon type="edit" theme="outlined" />
            Edit This Garment
          </Button>
          <Drawer
            title="Update Garment"
            placement="left"
            closable={true}
            onClose={this.onCloseEdit}
            visible={this.state.visibleEdit}
            width={720}
          >
            {this.props.selectedGarment ? (
              <GarmentFormEdit selectedGarment={this.props.selectedGarment} />
            ) : null}
          </Drawer>
        </React.Fragment>

        {this.props.loading ? (
          <div className="loading-div">
            <Spin indicator={loadingIcon} />
            <h4>l o a d i n g ...</h4>
          </div>
        ) : null}

        {this.props.selectedGarment ? (
          this.state.fullView ? (
            //full view
            <React.Fragment>
              <img
                alt="example"
                src={this.props.selectedGarment.url}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 30,
                  marginBottom: 30,
                  width: 300,
                  display: "block"
                }}
              />
              <Button
                size="small"
                style={{
                  color: "#ffa154",
                  fontSize: "12px",
                  float: "right"
                }}
                onClick={this.toggleFullView}
              >
                Collapse View
                <Icon type="minus" theme="outlined" />
              </Button>
              <h2>Item Name: {this.props.selectedGarment.name}</h2>

              <h3>Season: {this.props.selectedGarment.season}</h3>
              <p>Brand: {this.props.selectedGarment.brand.name}</p>
              <span>
                <Rate
                  onChange={this.handleChange}
                  value={value}
                  character={<Icon type="check-circle" theme="outlined" />}
                  allowClear
                />
                {value && (
                  <span className="ant-rate-text">
                    {value} samples approved{" "}
                  </span>
                )}
              </span>

              <Divider orientation="left">General Info</Divider>
              <p>Location: {this.props.selectedGarment.location}</p>
              <p>Status: {this.props.selectedGarment.status}</p>
              <Divider orientation="left">Materials Info</Divider>
              <p>Fabrication: {this.props.selectedGarment.fabrication}</p>

              <GarmentMaterials selectedGarment={this.props.selectedGarment} />

              {/* <p>Trims Quantity: </p>
              <li>Buttons - {this.props.selectedGarment.trim_button}</li>
              <li>Zippers - {this.props.selectedGarment.trim_zipper}</li>
              <li>Labels - {this.props.selectedGarment.trim_label}</li>
              <li>Hantags - {this.props.selectedGarment.trim_hangtag}</li> */}

              <Divider orientation="left">Sizing Info</Divider>
              <p>Size Range Available: {this.props.selectedGarment.sizing}</p>

              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ x: 350 }}
              />

              <Divider orientation="left">Observations</Divider>
              <p>Fit Observations:</p>
              <Alert
                type="warning"
                style={{
                  margin: "16px 0",
                  border: "1px solid #f5f5f5",
                  backgroundColor: "#fafafa"
                }}
                message={this.props.selectedGarment.fit_comment}
              />

              <p>Other Observations:</p>
              <Alert
                type="warning"
                style={{
                  margin: "16px 0",
                  border: "1px solid #f5f5f5",
                  backgroundColor: "#fafafa"
                }}
                message={this.props.selectedGarment.comment}
              />

              {/* post comments not functional yet */}
              <Divider orientation="left">Comments</Divider>
              <Form onSubmit={event => this.handleOnSubmit(event)}>
                <TextArea
                  name="comment"
                  rows={4}
                  value={this.state.comment}
                  placeholder="Write your comment here..."
                  style={{ marginBottom: 16 }}
                  onChange={event => this.handleComment(event)}
                />
                {/* <div style={{ marginTop: 16,  }}> */}
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginBottom: 30, float: "right" }}
                >
                  Post Comment
                </Button>
                {/* </div> */}
              </Form>

              <p style={{ display: "block" }}>
                <Avatar style={{ backgroundColor: "#ffc89c" }} icon="user" />
                Comment by: Marcela | Date: 24/10/2018{" "}
              </p>
              <Alert
                type="warning"
                style={{
                  margin: "16px 0",
                  border: "1px solid #f5f5f5",
                  backgroundColor: "#fafafa"
                }}
                message={this.props.selectedGarment.fit_comment}
              />
            </React.Fragment>
          ) : (
            // collapsed view
            <React.Fragment>
              <img
                alt="example"
                src={this.props.selectedGarment.url}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 30,
                  marginBottom: 30,
                  width: 300,
                  display: "block"
                }}
              />
              <Button
                size="small"
                style={{
                  color: "#ffa154",
                  fontSize: "12px",
                  float: "right"
                }}
                onClick={this.toggleFullView}
              >
                Expand All
                <Icon type="plus" theme="outlined" />
              </Button>
              <h2>Item Name: {this.props.selectedGarment.name}</h2>
              <h3>Season: {this.props.selectedGarment.season}</h3>
              <p>Brand: {this.props.selectedGarment.brand.name}</p>

              <span>
                <Rate
                  onChange={this.handleChange}
                  value={value}
                  character={<Icon type="check-circle" theme="outlined" />}
                  allowClear
                />
                {value && (
                  <span className="ant-rate-text">
                    {value} samples approved{" "}
                  </span>
                )}
              </span>

              <Collapse
                // defaultActiveKey={["1"]}
                bordered={false}
              >
                <Panel header="General Info" key="1">
                  {/* {text} */}
                  <p>Location: {this.props.selectedGarment.location}</p>
                  <p>Status: {this.props.selectedGarment.status}</p>
                </Panel>
                <Panel header="Materials Info" key="2">
                  <p>Fabrication: {this.props.selectedGarment.fabrication}</p>
                  <GarmentMaterials
                    selectedGarment={this.props.selectedGarment}
                  />
                </Panel>
                <Panel header="Sizing Info" key="3">
                  <p>
                    Size Range Available: {this.props.selectedGarment.sizing}
                  </p>

                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{ x: 350 }}
                  />
                </Panel>
                <Panel header="Comments" key="4">
                  <p>Fit Comments: {this.props.selectedGarment.fit_comment}</p>
                  <p>Other Comments: {this.props.selectedGarment.comment}</p>
                </Panel>
              </Collapse>
            </React.Fragment>
          )
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
    garmentId: ownProps.garmentId,
    selectedGarment: selectedGarment,
    garments: state.garments,
    materials: state.materials,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchMaterials, updateGarmentRate }
)(Garment);
