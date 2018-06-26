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
    http.$post(httpConfig.search, {
      type: 'All'
    }).then(data => {
      this.setState({
        topicList: data ? data.Data : []
      })
    })
  }

  enterIntoTopic = (event) => {
    const {releaseTopic} = this.props
    releaseTopic('topicLine', event.target.dataset.id)
  }

  render() {
    return (
      <AllTopic topicList={this.state.topicList} enterIntoTopic={this.enterIntoTopic}/>
    )
  }
}
export default Index