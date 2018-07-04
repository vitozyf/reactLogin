import React, { Component } from 'react';
class About extends Component {

  componentWillMount () {
    console.log(this)
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>about</h1>
      </div>
    );
  }
}

export default About;