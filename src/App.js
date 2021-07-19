import React, { Component } from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default App
