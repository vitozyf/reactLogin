import React, {Component} from 'react';
import { Layout, Menu, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RouterConfig from 'routers/router-config.json'
import Logo from 'assets/images/vito.jpg'
import './style/NavigationBar.css'

const { Header } = Layout;
const Menus = RouterConfig.Menus

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

  render () {
    return (
      <Layout>
        <Header>
          <div className="title">
            <Link to = "/">
              <img src = { Logo } className = "logo" alt="Logo" />
            </Link>
            <div className="search">
              <Input
               prefix = { <Icon type="search" style={{ color: 'rgba(0,0,0,.25)'}}></Icon> }
               value = { this.state.searchKeyword }
               name = "searchKeyword"
               placeholder = "输入搜索条件"
               onPressEnter = { event => this.onPressEnter(event) }
               onChange = { event => {this.onChange(event)} }
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
            Menus.map(item => {
              return (
                <Menu.Item key = { item.name }>
                  <Link to = { item.path }>
                    { item.title }
                  </Link>
                </Menu.Item>
              )
            })
          }
          </Menu>
        </Header>
      </Layout>
    )
  }

}

NavigationBar.propTypes = {
  user: PropTypes.object
}

export default NavigationBar;
