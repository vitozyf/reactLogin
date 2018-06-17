import React, {Component} from 'react';
import NoReplyTopic from 'components/NoReplyTopic/index';
import BlogRoll from 'components/BlogRoll/index';
import './style/index.css';

class Index extends Component {
  render() {
    return (
      <div className="app-info">
        <NoReplyTopic />
        <BlogRoll />
      </div>
    )
  }
}
export default Index