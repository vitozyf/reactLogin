import React, { Component } from 'react';
import AboutUi from './About.jsx'
// import { Route } from 'react-router-dom';
// import TopicDetails from 'components/TopicDetails/index';
class About extends Component {
  componentWillMount () {
    // console.log(this)
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>about</h1>
        {/*<AboutUi></AboutUi>*/}
        {/*<Route path="/about/pro" component={TopicDetails} />*/}
      </div>
    );
  }
}

export default About;