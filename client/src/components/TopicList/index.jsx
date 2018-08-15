import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import notopic from '~assets/images/notopic.png';
import './style/index.scss';

class Index extends Component {
  render() {
    const {
      pageIndex,
      pageSize,
      total,
      topicList, 
      enterIntoTopic,
      onPageChange} = this.props
      let TopicListRN = null
      if (topicList.length > 0) {
        TopicListRN = (<div className="c-TopicList" onClick={event=>{enterIntoTopic(event)}}>
          {
            topicList.map((topic, index) => {
              let Plate = '';
              switch (topic.Plate) {
                case 0:
                  Plate = '分享'
                  break;
                case 1:
                  Plate = '问答'
                  break;
                case 2:
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
                    <span>发表于：{ topic.CreatedAtStr }</span>&nbsp;&nbsp;&nbsp;
                    <span>所属板块：{ Plate } </span>&nbsp;&nbsp;&nbsp;
                    <span>浏览：{ topic.TopicHits }</span>
                  </div>

                  <div className="content">
                  { topic.TopicContent }
                  </div>

                  <div 
                    className="read-more"
                    >
                    <span data-id={topic.Id}>
                      阅读全文>>
                    </span>
                  </div>
                </div>
              )
            })
          }
          <Pagination 
            current = { pageIndex }
            pageSize = { pageSize }
            total = { total } 
            onChange={onPageChange} />
        </div>)
      } else {
        TopicListRN = (<div className="c-noTopic">
          <div>
            <img src={notopic} alt="暂无话题"/>
          </div>
          <div className="text">
            暂无话题
          </div>
        </div>)
      }
      
    return TopicListRN
  }
}

Index.propTypes = {
  pageIndex: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
};

Index.defaultProps = {
  pageIndex: 1,
  pageSize: 10,
  total: 0
};

export default Index