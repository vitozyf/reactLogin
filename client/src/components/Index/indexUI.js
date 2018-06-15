import React, { Component } from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { SetCookie, GetCookie, RemoveCookie, user } = this.props;
    console.log(user)
    return (
      <div className="App">
        <div>登录状态： { user.IsLogin ? '已登录' : '未登录' }</div>
        <Button onClick = { SetCookie }>设置</Button>
        <Button onClick = { GetCookie }>获取</Button>
        <Button onClick = { RemoveCookie }>删除</Button>
      </div>
    );
  }
}

App.propTypes = {
  SetCookie: PropTypes.func,
  GetCookie: PropTypes.func,
  RemoveCookie: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state, ownProps)
}

const mapDispatchToProps = (dispatch) => {
  return {
    SetCookie: () => {
      return dispatch({type: 'SetLogin'})
    },
    RemoveCookie: () => dispatch({type: 'SetLogout'})
  }
}

const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppComponent;