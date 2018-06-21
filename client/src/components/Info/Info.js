import React, {Component} from 'react';
import NoReplyTopic from 'components/NoReplyTopic/index';
import BlogRoll from 'components/BlogRoll/index';
import ReleaseTopic from 'components/ReleaseTopic/index';
import './style/index.css';

class Index extends Component {

  render() {
    // console.log(this.props)
    const {releaseTopic, componentType, topicList} = this.props
    return (
      <div className="app-info">
        <NoReplyTopic topicList={topicList} />
        {
          componentType === 'topics' ?  <ReleaseTopic releaseTopic={releaseTopic}/> : null
        }
        <BlogRoll />
      </div>
    )
  }
}
export default Index