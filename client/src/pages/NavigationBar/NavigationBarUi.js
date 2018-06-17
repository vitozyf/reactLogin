import React, { Component } from 'react';
import { Layout, Menu, Input, Icon } from 'antd';
import RouterConfig from 'routers/router-config.json'
import { Link } from 'react-router-dom';

const { Header } = Layout;
const Menus = RouterConfig.Menus

class NavigationBarUi extends Component {
  render() {
    const {searchKeyword, onPressEnter, onChange, IsLogin, SetUserInfo, signOut} = this.props;
    const MenuItems = Menus.map(item => {
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
      return (
        <Menu.Item key = { item.name }>
          <Link title = { item.title } to = { item.path }>
            { item.title }
          </Link>
        </Menu.Item>
      )
    })


    if (IsLogin) {
      MenuItems.push(
        <Menu.Item key = { 'signout' }>
            <a title="退出登录" onClick = { () => {signOut(); SetUserInfo(false)} }>退出登录</a>
        </Menu.Item>
      )
    }

    return (
      <Layout>
        <Header>
          <div className="title">
            <Link to = "/">
              <img src = { require('assets/images/vito.jpg') } className = "logo" alt="Logo" />
            </Link>
            <div className="search">
              <Input
               prefix = { <Icon type="search" style={{ color: 'rgba(0,0,0,.25)'}}></Icon> }
               value = { searchKeyword }
               name = "searchKeyword"
               placeholder = "输入搜索条件"
               onPressEnter = { event => onPressEnter(event) }
               onChange = { event => {onChange(event)} }
               >
              </Input>
            </div>
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
          {
            MenuItems
          }
          </Menu>
        </Header>
      </Layout>
    )
  }
}

export default NavigationBarUi