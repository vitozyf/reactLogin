import React, { Component } from 'react';
import { Layout } from 'antd';

import { Link } from 'react-router-dom';

const { Header } = Layout;

class NavigationBarUi extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <div className="title">
            <Link to = "/">
              <img src = { require('assets/images/js-logo.png') } className = "logo" alt="Logo" />
            </Link>
          </div>

          <div className="title-text">
            个性化的IT技术学习社区
          </div>
          
        </Header>
      </Layout>
    )
  }
}

export default NavigationBarUi