import React, {Component} from 'react';
import NoReplyTopicUI from './NoReplyTopicUI';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import http from 'utils/http';

const Config = {
  getTopicDetails: '/topic/getTopicDetails'
}

const mapStateToProps = (state, props) => {
  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    // xxx : () => {
    //   return {}
    // }
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

  enterIntoTopic = (event) => {
    const id = event.target.dataset.id
    if (typeof id !== 'undefined') {
      this.props.history.push(`/home/topicDetails/${id}`)
      http.$post(Config.getTopicDetails, {
        TopicId: id
      }).then(data => {
        if (data && data.TopicDetail) {
          this.props.ChangeTopicDetail(data.TopicDetail)
        }
      })
    }
  }

  render() {
    const {topicList} = this.props;
    return (
      <NoReplyTopic 
        topicList = { topicList }
        enterIntoTopic = { this.enterIntoTopic }/>
    )
  }
}
export default withRouter(Index)