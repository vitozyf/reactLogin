import React, {Component} from 'react';
import TopicList from 'components/TopicList';
import {connect} from 'react-redux';
import {withGetdata} from 'components/HOC';

const httpConfig = {
  search: '/topic/search'
}

const mapStateToProps = (state, props) => {
  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    xxx : () => {
      return {}
    }
  }
}

const AskTopic = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList) 

class Index extends Component {
  render() {
    return (
      <AskTopic 
        pageIndex = { this.props.pageIndex }
        pageSize = { this.props.pageSize }
        total = { this.props.total }
        topicList={this.props.topicList}
        onPageChange = {this.props.getData}
        enterIntoTopic={this.props.enterIntoTopic}/>
    )
  }
}
export default withGetdata(Index, {
  type: 'Ask',
  httpConfig: httpConfig
})