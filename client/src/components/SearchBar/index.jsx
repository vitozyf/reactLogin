import React, {Component} from 'react';
import { Menu, Input, Icon, message } from 'antd';
import RouterConfig from 'routers/router-config.json'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import http from 'utils/http';

import './style/index.css';

const Menus = RouterConfig.Menus

const urlConfig = {
  signout: '/signout'
}

class SearchBarUi extends Component {
  constructor (props) {
    super(props);

    this.state = {
      searchKeyword: ''
    }
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
      if (!data) return message.error('退出失败')
      message.success('退出成功')
    })
  }

  render () {
    const { IsLogin, SetUserInfo } = this.props;
    let MenuItems = Menus.map(item => {
      if (item.name === 'Test') return null
      if (IsLogin) {
        if (item.name === 'Login' || item.name === 'Signin') {
          return null
        }
      } else {
        if (item.name === 'Personal') {
          return null
        }
      }
      let icon = ''
      switch (item.name) {
        case 'Index':
          icon = 'icon-home'
          break;
        case 'About':
          icon = 'icon-about'
          break;
        case 'Personal':
          icon = 'icon-personal-center'
          break;
        case 'Signin':
          icon = 'icon-register'
          break;
        case 'Login':
          icon = 'icon-login'
          break;
        default:
          break;
      }
      return (
        <Menu.Item key = { item.name }>
          <Link to = { item.path }>
            <i className={ `iconfont ${icon}` }></i>
            { item.title }
          </Link>
        </Menu.Item>
      )
    })
    if (IsLogin) {
      MenuItems.push(
        <Menu.Item key = { 'signout' }>
            <i className="iconfont icon-zhuxiaologout8"></i>
            <a title="退出登录" onClick = { () => {this.signOut(); SetUserInfo(false)} }>退出登录</a>
        </Menu.Item>
      )
    }
    return (
      <div className="vito-search-bar">
        <div className="vito-search-bar_box">
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['Index']}
              >
              {
                MenuItems
              }
            </Menu>
            <div className="search">
              <Input
                prefix = { <Icon type="search" style={{ color: 'rgba(0,0,0,.25)'}}></Icon> }
                value = { this.state.searchKeyword }
                name = "searchKeyword"
                placeholder = "输入搜索条件"
                onPressEnter = { event => this.onPressEnter(event) }
                onChange = { event => this.onChange(event) }
                >
              </Input>
            </div>
        </div>
      </div>
    )
  }
}

const SearchBar = connect((state, props) => {
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
})(SearchBarUi)

export default SearchBar