import React, {Component} from 'react';
import BlogRollUI from './BlogRollUI';
import {connect} from 'react-redux';
// import http from 'utils/http';

// const httpConfig = {
//   search: '/topic/search'
// }

const mapStateToProps = (state, props) => {
  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    xxx : () => {
      return {}
    }
  }
}

const BlogRoll = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogRollUI) 

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount(){

  }

  render() {
    return (
      <BlogRoll/>
    )
  }
}
export default Index