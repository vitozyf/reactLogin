import React, { Component } from 'react';
import { Button } from 'antd';
import http from 'utils/http';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReplyList from 'components/ReplyList';

import './style/index.scss';

const Config = {
  getTopicDetails: '/topic/getTopicDetails'
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, { topicDetail: state.topicDetail, user: state.user }, props);
}

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeTopicDetail: (topicDetail) => {
      return dispatch({
        type: 'ChangeTopicDetail',
        topicDetail: topicDetail
      })
    }
  }
}

class TopicDetails extends Component {
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

  skipToAuthor = () => {
    console.log('跳转到作者页')
  }

  componentWillMount() {
    if (!this.props.topicDetail.TopicName) {
      const id = this.props.match.params.id
      http.$post(Config.getTopicDetails, {
        TopicId: id
      }).then(data => {
        if (data && data.TopicDetail) {
          this.props.ChangeTopicDetail(data.TopicDetail)
        }
      })
    }
  }

  render() {
    const topicDetail = this.props.topicDetail || {}

    let fromPlate = ''
    switch (topicDetail.Plate) {
      case 1:
        fromPlate = '问答'
        break;

      case 2:
        fromPlate = '测试'
        break;

      default:
        fromPlate = '分享'
        break;
    }

    const TopicLabel = () => {
      return topicDetail.TopicLabel === 0
        ? <span className="state">置顶</span>
        : topicDetail.TopicLabel === 1
          ? <span className="state">加精</span> : null
    }
    return (
      <div className="m-TopicDetails">
        {/* 标题 */}
        <div className="header bottom-line">
          <div className="title">
            <h2>
              <TopicLabel />
              {topicDetail.TopicName}
            </h2>

            <div className="operate" onClick={this.operateHandler}>
              <i className="iconfont icon-edit" title="编辑" data-name="edit"></i>
              <i className="iconfont icon-delete" title="删除" data-name="delete"></i>
            </div>
          </div>

          <div className="topic-info">
            <span className="info"><i className="iconfont icon-dot1"></i>发布于: {topicDetail.CreatedAtStr}</span>&nbsp;
            <span className="info"><i className="iconfont icon-dot1"></i>作者:
              <a onClick={this.skipToAuthor}>{topicDetail.User ? topicDetail.User.UserName : ''}</a>
            </span>&nbsp;
            <span className="info"><i className="iconfont icon-dot1"></i>{topicDetail.TopicHits}次浏览</span>&nbsp;
            <span className="info"><i className="iconfont icon-dot1"></i>最后一次编辑是: {topicDetail.EditAt}</span>&nbsp;
            <span className="info"><i className="iconfont icon-dot1"></i>来自: {fromPlate}</span>&nbsp;
            <Button type="primary" className="collect" size="small">收藏</Button>
          </div>
        </div>

        {/* 内容 */}
        <div className="topic-content bottom-line" dangerouslySetInnerHTML={{ __html: topicDetail.TopicContent }}>
        </div>

        {/* 回复 */}
        <div className="replylist bottom-line">
          <ReplyList comments={topicDetail.Comments} user={this.props.user} />
        </div>

        {/* 添加回复 */}
        <div className="addrevert bottom-line">

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopicDetails))