import React, {Component} from 'react';
import NoReplyTopic from 'components/NoReplyTopic/index';
import BlogRoll from 'components/BlogRoll/index';
import ReleaseTopic from 'components/ReleaseTopic/index';
import {withRouter} from 'react-router-dom';
import './style/index.css';

class Index extends Component {
  componentWillMount() {
    const {changeSendState, location} = this.props
    changeSendState(location.pathname === '/home' || location.pathname === '/')
    this.props.history.listen((route) => {
      changeSendState(route.pathname === '/home' || route.pathname === '/')
    })
  }

  render() {
    const {topicList, showSendBtn} = this.props

    return (
      <div className="app-info">
        <NoReplyTopic topicList={topicList} />
        {
          showSendBtn ? <ReleaseTopic /> : null
        }
        <BlogRoll />
      </div>
    )
  }
}
export default withRouter(Index)