import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { SetCookie, GetCookie, RemoveCookie, user, changeName } = this.props;
    return (
      <div className="App">
        <div>登录状态： { user.IsLogin ? '已登录' : '未登录' }</div>
        <div>Name { user.Name }</div>
        <Button onClick = { () => {SetCookie(); changeName('vito')} }>设置</Button>
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



export default App;