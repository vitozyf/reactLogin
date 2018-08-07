import React, {Component} from 'react';
import AllTopicUI from './AllTopic';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
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
      type: 'All',
      PageIndex: 1,
      PageSize: 10
    }).then(data => {
      console.log(123, data)
      data && this.setState({
        topicList: data ? data.TopicList : []
      })
    })
  }

  enterIntoTopic = (event) => {
    const id = event.target.dataset.id
    if (typeof id !== 'undefined') {
      this.props.history.push(`/home/topicDetails/${id}`)
    }
  }

  render() {
    return (
      <AllTopic topicList={this.state.topicList} enterIntoTopic={this.enterIntoTopic}/>
    )
  }
}
export default withRouter(Index)