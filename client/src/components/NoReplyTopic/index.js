import React, {Component} from 'react';
import NoReplyTopicUI from './NoReplyTopicUI';
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

const NoReplyTopic = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoReplyTopicUI) 

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
      <NoReplyTopic/>
    )
  }
}
export default Index