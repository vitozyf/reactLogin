import React, {Component} from 'react';
import NavigationBarUi from './NavigationBarUi'
import { connect } from 'react-redux';
import http from 'utils/http';
import { message } from 'antd';

import './style/NavigationBar.css'

const urlConfig = {
  signout: '/signout'
}

const NavigationBarComnect = connect((state, props) => {
  return Object.assign({}, state.user, props) 
  }, dispatch => {
    return {
      SetUserInfo: (IsLogin) => {
        return dispatch({
          type: 'SetUserInfo',
          IsLogin: IsLogin
        })
      }
    }
})(NavigationBarUi)

let state = {
  searchKeyword: ''
}

class NavigationBar extends Component{

  constructor (props) {
    super(props); 
    this.state = state
  }

  onPressEnter = (event) => {
    console.log(this.state.searchKeyword)
  }

  onChange = event => {
    let data = {};
    data[event.target.name] = event.target.value;
    this.setState(data);
  }

  signOut = () => {
    http.$post(urlConfig.signout).then(data => {
      if (!data || data.Code !== 0) return message.error('退出失败')
      message.success('退出成功')
    })
  }

  render () {
    return (
      <NavigationBarComnect
      searchKeyword = {this.state.searchKeyword}
      onPressEnter = {this.onPressEnter}
      onChange = {this.onChange}
      signOut = { this.signOut }
      >

      </NavigationBarComnect>
    )
  }
}

export default NavigationBar;
