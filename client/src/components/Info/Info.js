import React, {Component} from 'react';
import NoReplyTopic from 'components/NoReplyTopic/index';
import BlogRoll from 'components/BlogRoll/index';
import ReleaseTopic from 'components/ReleaseTopic/index';
import './style/index.css';

class Index extends Component {

  render() {
    const {releaseTopic} = this.props
    return (
      <div className="app-info">
        <NoReplyTopic />
        <ReleaseTopic releaseTopic={releaseTopic}/>
        <BlogRoll />
      </div>
    )
  }
}
export default Index