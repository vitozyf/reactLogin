import React from 'react';
import http from 'utils/http';
import {withRouter} from 'react-router-dom';
import { Spin } from 'antd';

const Config = {
  getTopicDetails: '/topic/getTopicDetails'
}

// This function takes a component...
function withGetdata(WrappedComponent, params) {
  // ...and returns another component...
  let getDataHOC =  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        topicList: [],
        loading: false
      };
    }

    cleatLoading = () => {
      let timeid = setTimeout(() => {
        this.setState({
          loading: false
        })
        clearTimeout(timeid)
      }, 200);
    }

    getData = (index = 1) => {
      this.setState({
        loading: true
      })
      http.$post(params.httpConfig.search, {
        type: params.type,
        PageIndex: index,
        PageSize: this.state.pageSize
      }).then(data => {
        data && this.setState({
          pageIndex: data.PageIndex,
          pageSize: data.PageSize,
          total: data.TotalCount,
          topicList: data ? data.TopicList : []
        })
        this.cleatLoading()
      }).catch(() => {
        this.cleatLoading()
      })
    }

    componentWillMount(){
      this.getData()
    }

    enterIntoTopic = (event) => {
      const id = event.target.dataset.id
      if (typeof id !== 'undefined') {
        this.props.history.push(`/home/topicDetails/${id}`)
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
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <Spin 
          spinning={this.state.loading} 
          size="large"
          tip="数据加载中,请稍后..."
          wrapperClassName="vito-getdata-loading">
          <WrappedComponent 
            pageIndex = { this.state.pageIndex }
            pageSize = { this.state.pageSize }
            total = { this.state.total }
            topicList={this.state.topicList}
            getData={this.getData}
            enterIntoTopic={this.enterIntoTopic}
            {...this.props} />
        </Spin>
      )
    }
  };

  return withRouter(getDataHOC)
}

export {
  withGetdata
}