import React, {Component} from 'react';
import NoReplyTopicUI from './NoReplyTopicUI';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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

  refCb = (el) => {

  }

  enterIntoTopic = (event) => {
    const id = event.target.dataset.id
    if (typeof id !== 'undefined') {
      this.props.history.push(`/home/topicDetails/${id}`)
    }
  }

  render() {
    // console.log(123, this.props)
    const {topicList} = this.props;
    return (
      <NoReplyTopic 
        domref={this.refCb} 
        topicList={topicList}
        enterIntoTopic={this.enterIntoTopic}/>
    )
  }
}
export default withRouter(Index)