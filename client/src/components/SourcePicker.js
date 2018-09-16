import React, { Component } from "react";

export default class SourcePicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          borderStyle: "dashed",
          padding: "10px"
        }}
      >
        Pages
        <div style={{ textAlign: "left", fontSize: "1.2em" }}>
          MIT Confessions
        </div>
      </div>
    );
  }
}

class Source extends Component {}
