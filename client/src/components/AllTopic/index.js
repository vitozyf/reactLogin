import React, {Component} from 'react';
import AllTopicUI from './AllTopic';
import {connect} from 'react-redux';
import http from 'utils/http';

const httpConfig = {
  search: '/topic/search'
}

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

const AllTopic = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllTopicUI) 

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      topicList: []
    }
  }

  componentWillMount(){
    http.$post(httpConfig.search).then(data => {
      this.setState({
        topicList: data.data || []
      })
    })
  }

  render() {
    return (
      <AllTopic topicList={this.state.topicList}/>
    )
  }
}
export default Index