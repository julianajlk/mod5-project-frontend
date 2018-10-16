import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "antd";

const { Meta } = Card;

class Garment extends Component {
  state = {
    isEditing: false
  };

  render() {
    return (
      <Link className="item" to={`/garments/${this.props.selectedGarment.id}`}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img alt="example" src={this.props.selectedGarment.image_url} />
          }
        >
          <Meta
            title={this.props.selectedGarment.name}
            description={this.props.selectedGarment.season}
          />
        </Card>
      </Link>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("Garment", state, state.garments, ownProps, ownProps.garmentId);
  let selectedGarment = state.garments.find(
    garment => garment.id === parseInt(ownProps.garmentId)
  );
  // console.log("selectedGarment", selectedGarment);
  return {
    selectedGarment: selectedGarment
  };
};

export default connect(mapStateToProps)(Garment);
