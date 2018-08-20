import React, {Component} from 'react';
import InfoCommon from 'components/InfoCommon';
import './style/index.scss';

class Index extends Component {
  render() {
    const {topicList, enterIntoTopic} = this.props;
    return (
      <InfoCommon title = "无人回复的话题" className="app-info_NoReplyTopicUI">
        <div  onClick={enterIntoTopic}>
          {
            topicList.map(item => {
              return (
                <p key={item.Id}>
                  <a data-id={item.Id}>{item.TopicName}</a>
                </p>
              )
            })
          }
        </div>
      </InfoCommon>
    )
  }
}
export default Index