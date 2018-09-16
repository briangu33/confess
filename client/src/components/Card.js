import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          borderStyle: "dashed",
          width: "500px",
          padding: "10px"
        }}
      >
        <div style={{ textAlign: "left", fontSize: "1.2em" }}>
          {this.props.title} #{this.props.number}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div style={{ textAlign: "left", fontSize: "0.8em" }}>
            {this.props.date}
          </div>
          <div style={{ textAlign: "left", fontSize: "0.8em" }}>
            {this.props.reactions} reactions
          </div>
        </div>
        <div style={{ textAlign: "left", fontSize: "1.2em" }}>
          {this.props.text}
        </div>
      </div>
    );
  }
}
