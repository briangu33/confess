import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './components/Card'
import SourcePicker from './components/SourcePicker'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      confessions: [],
    }
  }

  componentDidMount () {
    fetch('/test').then(res => res.text()).then(text => console.log(text))
    fetch('/all').then(res => res.json()).then(data => {
      console.log(data)
      this.setState({
        confessions: data
      })
    })
  }

  render () {
    let listItems = []
    console.log(this.state.confessions.length)
    if (this.state.confessions.length > 0) {
      listItems = this.state.confessions.map((d, i) => (
        <Card
          key={i}
          source={d.source}
          text={d.text}
          date={d.timestamp}
          reactions={d.reactions}
          number={d.number}
          fbId={d.id}
        />
      ))
    }

    return (
      <div className="App">
        <Header>Confessions History Explorer</Header>
        <Body>
        <Navigation>
          This is where the navigation is
          <SourcePicker/>
        </Navigation>
        <div>{listItems}</div>
        </Body>
      </div>
    )
  }
}

export default App

const Navigation = styled.div`
  border-style: dashed;
  width: 300px;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
`

const Header = styled.div`
  justify-content: center;
  padding: 25px;
  background-color: black;
  color: white;
`
