import React, {Component} from 'react';
import './style/index.scss';

class Index extends Component {
  render() {
    const {topicList, enterIntoTopic} = this.props
    return (
      <div className="AllTopic topic_list" onClick={event=>{enterIntoTopic(event)}}>
        {
          topicList.map((topic, index) => {
            let Plate = '';
            switch (topic.Plate) {
              case 1:
                Plate = '分享'
                break;
              case 2:
                Plate = '问答'
                break;
              case 3:
                Plate = '测试'
                break;
              default:
                break;
            }
            return (
              <div className="cell" key={index}>
                <h3>
                  { topic.TopicName }
                </h3>

                <div className="subhead">
                  <span>发表于： { topic.CreatedAtStr }</span>
                  <span>标签：{ Plate } </span>
                  <span>浏览：{ topic.TopicHits }</span>
                </div>

                <div className="content">
                {/* dangerouslySetInnerHTML={{__html: topic.TopicContent}} */}
                { topic.TopicContent }
                </div>

                <div 
                  className="read-more"
                  data-id={topic.ID}>
                  阅读全文>>
                </div>
              </div>
            )
          })
        }
      </div>
      
    )
  }
}
export default Index