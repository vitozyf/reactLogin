import React, {Component} from 'react';
import InfoUI from './Info';
import {connect} from 'react-redux';
import http from 'utils/http';

const httpConfig = {
  search: '/topic/search'
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, {router: state.router}, props)
}

const Info = connect(
  mapStateToProps
)(InfoUI) 

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pageIndex: 1,
      pageSize: 30,
      total: 0,
      topicList: []
    }
  }

  getData = (index = 1) => {
    http.$post(httpConfig.search, {
      type: 'NoRevert',
      PageIndex: index,
      PageSize: this.state.pageSize
    }).then(data => {
      data && this.setState({
        pageIndex: data.PageIndex,
        pageSize: data.PageSize,
        total: data.TotalCount,
        topicList: data ? data.TopicList : []
      })
    })
  }

   componentWillMount(){
    this.getData()
  }

  render() {
    return (
      <Info 
        pageIndex = { this.state.pageIndex }
        pageSize = { this.state.pageSize }
        total = { this.state.total }
        onPageChange = {this.getData}
        topicList={this.state.topicList} />
    )
  }
}
export default Index