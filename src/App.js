import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'

export default class App extends Component {
  state = {
    title: "React Crud with Redux"
  };

  render() {
    const {title} = this.state;
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={title} />
        <p>Test</p>
      </div>
    )
  }
}
