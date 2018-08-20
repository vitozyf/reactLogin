import React, {Component} from 'react';
import {Card} from 'antd';
import PropTypes from 'prop-types';
import './style/index.scss';

class Index extends Component {
  render() {
    return (
      <Card title = {this.props.title} className = {`app-info_common ${this.props.className}`}>
        {
          this.props.children
        }
      </Card>
    )
  }
}

Index.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};
export default Index