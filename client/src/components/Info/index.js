import React, {Component} from 'react';
import InfoUI from './Info';
import {connect} from 'react-redux';
import http from 'utils/http';

const httpConfig = {
  search: '/topic/search'
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, {showSendBtn: state.showSendBtn}, props)
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSendState : (state) => {
      return dispatch({
        type: 'ChangeSendState',
        State: state
      })
    }
  }
}

const Info = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoUI) 

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      topicList: []
    }
  }

   componentWillMount(){
    http.$post(httpConfig.search, {
      type: 'NoRevert'
    }).then(data => {
      this.setState({
        topicList: data ? data.Data : []
      })
    })
  }

  render() {
    return (
      <Info topicList={this.state.topicList} />
    )
  }
}
export default Index