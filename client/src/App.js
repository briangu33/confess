import React, { Component } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import SourcePicker from "./components/SourcePicker";
import "./App.css";

const data = [
  {
    source: "MIT Timely Confessions",
    date: "today",
    text: "This is a confession.",
    reactions: "126",
    number: "4241",
    id: "UID1"
  },
  {
    source: "MIT Confessions",
    date: "yesterday",
    text: "This is another confession",
    reactions: "129",
    number: "4242",
    id: "UID2"
  }
];

const ListItems = data.map(d => (
  <Card
    key={d.id}
    source={d.source}
    text={d.text}
    date={d.date}
    reactions={d.reactions}
    number={d.number}
  />
));

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("/test")
      .then(res => res.text())
      .then(text => console.log(text));
  }

  render() {
    return (
      <div className="App">
        <Header>Confessions History Explorer</Header>
        <Body>
          <Navigation>
            This is where the navigation is
            <SourcePicker />
          </Navigation>
          <div>{ListItems}</div>
        </Body>
      </div>
    );
  }
}

export default App;

const Navigation = styled.div`
  border-style: dashed;
  width: 300px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled.div`
  justify-content: center;
  padding: 25px;
  background-color: black;
  color: white;
`;
