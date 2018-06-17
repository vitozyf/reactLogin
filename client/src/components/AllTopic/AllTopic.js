import React, {Component} from 'react';
import './style/index.css';

class Index extends Component {
  render() {
    console.log(this.props)
    const {topicList} = this.props
    return (
      topicList.map((topic, index) => {
        return (
          <div className="AllTopic topic_list" key={index}>
            <div className="cell">

              <a className="user_avatar">
                <img src={topic.UserHeaderPortrait} alt="userName"/>
              </a>

              <span className="reply_count ">
                <span className="count_of_replies" title="回复数">
                  {topic.TopicReplies}
                </span>
                <span className="count_seperator">/</span>
                <span className="count_of_visits" title="点击数">
                  {topic.TopicHits}
                </span>
              </span>

              <div className="topic_title_wrapper">
                <span className={`put_${topic.TopicLabel===0?'top':topic.TopicLabel===1?'share':'ask'}`}>
                  {topic.TopicLabel===0?'置顶':topic.TopicLabel===1?'分享':'问答'}
                </span>

                <a className="topic_title"  title={topic.TopicName}>
                  {topic.TopicName}
                </a>
              </div>

              <a className="last_time" href="/topic/5b04dbe55cd02be640900dd7#5b24e4ee5cd02be6409014ec">
                <img className="user_small_avatar" src="https://avatars2.githubusercontent.com/u/18753430?v=4&amp;s=120" alt="userName"/>
                <span className="last_active_time">{topic.LastReplyTime}</span>
              </a>
            </div>
          </div>
        )
      })
      
    )
  }
}
export default Index