import React, {Component} from 'react';
import InfoUI from './Info';
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

const Info = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoUI) 

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
      <Info/>
    )
  }
}
export default Index