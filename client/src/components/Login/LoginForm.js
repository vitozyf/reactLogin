import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import http from 'utils/http'
import {removeCookie} from 'src/utils/cookie';
import Configs from 'src/utils/config';
import './style/login-form.css'

const FormItem = Form.Item;

const config = {
  search: 'getAllUsers',
  login: 'login'
}

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    // console.log(this)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        http.$post(config.login, values).then((res) => {
          if (res && res.Code === 0) {
            this.props.SetUserInfo(true)
            this.props.history.push('/') 
          } else {
            removeCookie(Configs.SessionIdName)
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const { toSignin } = this.props

    return (
      // <Spin size="large" tip="加载中，请稍后..." spinning = {pageLoading} >
        <Form 
          onSubmit={this.handleSubmit} 
          className="login-form">
          <FormItem>
            {getFieldDecorator('UserName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input autoComplete="off" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('PassWord', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <a className="login-form-forgot" onClick = { toSignin }>去注册</a>
          </FormItem>
          <FormItem>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
      // </Spin>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm