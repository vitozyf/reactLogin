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
      if (data) {
        this.setState({
          topicDetail: data.TopicDetail
        })
      }
    })
  }

  operateHandler = (event) => {
    const type = event.target.dataset.name
    switch (type) {
      case 'edit':
        this.editTopic()
        break;

      case 'delete':
        this.deleteTopic()
        break;
    
      default:
        break;
    }
  }

  editTopic = () => {
    console.log('edit', this.props)
  }

  deleteTopic = () => {
    console.log('delete')
  }

  render () {
    const topicDetail = this.state.topicDetail
    let fromPlate = ''
    switch (topicDetail.Plate) {
      case 2:
        fromPlate = '问答'
        break;

      case 3:
        fromPlate = '测试'
        break;
    
      default:
        fromPlate = '分享'
        break;
    }
    return (
      <div className = "m-TopicDetails">
        {/* 标题 */}
        <div className="header bottom-line">
          <div className = "title">
            <span className = "state">置顶</span>
            <h2>{topicDetail.TopicName}</h2>

            <div className="operate" onClick={this.operateHandler}>
              <i className="iconfont icon-edit" title="编辑" data-name="edit"></i>
              <i className="iconfont icon-delete" title="删除" data-name="delete"></i>
            </div>
          </div>

          <div className="topic-info">
            <span className="info"><i className="iconfont icon-dot1"></i>发布于 {topicDetail.CreateTimeStr}</span>
            <span className="info"><i className="iconfont icon-dot1"></i>作者 <a>{topicDetail.UserName}</a></span>
            <span className="info"><i className="iconfont icon-dot1"></i>{topicDetail.TopicHits} 次浏览</span>
            <span className="info"><i className="iconfont icon-dot1"></i>最后一次编辑是 1 个月前</span>
            <span className="info"><i className="iconfont icon-dot1"></i>来自 {fromPlate}</span>
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