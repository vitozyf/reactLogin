import React, {Component} from 'react';
import {Button} from 'antd';
import http from 'utils/http';
import {withRouter} from 'react-router-dom';
import './style/index.css';

const httpConfig = {
  getTopicDetails: '/topic/getTopicDetails'
}

class TopicDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topicDetail: {}
    }
  }
  componentWillMount () {
    const TopicId = this.props.match.params.id
    http.$post(httpConfig.getTopicDetails, {
      TopicId: TopicId
    }).then(data => {
      if (data.Code === 0) {
        // console.log(data.Data.TopicDetail)
        this.setState({
          topicDetail: data.Data.TopicDetail
        })
      }
    })
  }

  render () {
    const topicDetail = this.state.topicDetail
    return (
      <div className = "m-TopicDetails">
        {/* 标题 */}
        <div className="header bottom-line">
          <div className = "title">
            <span className = "state">置顶</span>
            <h2>{topicDetail.TopicName}</h2>
          </div>

          <div className="topic-info">
            <span className="info"><i className="iconfont icon-dot1"></i>发布于 4 个月前</span>
            <span className="info"><i className="iconfont icon-dot1"></i>作者 <a>nswbmw</a></span>
            <span className="info"><i className="iconfont icon-dot1"></i>13426 次浏览</span>
            <span className="info"><i className="iconfont icon-dot1"></i>最后一次编辑是 1 个月前</span>
            <span className="info"><i className="iconfont icon-dot1"></i>来自 分享</span>
            <Button type="primary" className="collect" size="small">收藏</Button>
          </div>
        </div>

        {/* 内容 */}
        <div className="topic-content bottom-line" dangerouslySetInnerHTML={{__html: topicDetail.TopicContent}}>
        </div>

        {/* 回复 */}
        <div className="revert bottom-line">

        </div>

        {/* 添加回复 */}
        <div className="addrevert bottom-line">
        
        </div>
      </div>
    )
  }
}

export default withRouter(TopicDetails)