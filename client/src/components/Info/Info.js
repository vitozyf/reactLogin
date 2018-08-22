import React, {Component} from 'react';
import NoReplyTopicUi from 'components/Info/NoReplyTopic/index';
import PersonInfo from 'components/Info/PersonInfo/index';
import BlogRoll from 'components/Info/BlogRoll/index';
import ReleaseTopic from 'components/Info/ReleaseTopic/index';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './style/index.scss';


const mapStateToProps = (state, props) => {
  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeTopicDetail : (topicDetail) => {
      return dispatch({
        type: 'ChangeTopicDetail',
        topicDetail: topicDetail
      })
    }
  }
}
const NoReplyTopic = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoReplyTopicUi) 
class Index extends Component {

  render() {
    const {topicList, router} = this.props
    return (
      <div className="app-info">
        <PersonInfo />
        {
          router.pathname !== '/home/release' ? <ReleaseTopic /> : null
        }
        <NoReplyTopic topicList={topicList} />
        <BlogRoll />
      </div>
    )
  }
}
export default withRouter(Index)