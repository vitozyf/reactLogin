import React, {Component} from 'react';
import './style/index.scss';

class Index extends Component {
  // constructor (props) {
  //   super(props);

  // }

  render() {
    const {domref, topicList} = this.props;
    // console.log(topicList)
    return (
      <div className="app-info_NoReplyTopicUI app-info_model"  ref={domref}>
        <div className="title">无人回复的话题</div>
        <div className="body">
          {
            topicList.map(item => {
              return (
                <div className="row" key={item.ID}>
                  <a>{item.TopicName}</a>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default Index