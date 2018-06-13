import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import http from 'utils/http'
import './style/login-form.css'

const FormItem = Form.Item;

const config = {
  search: 'getAllUsers',
  login: 'login'
}

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        http.$post(config.login, values, (res) => {
          console.log(123, res)
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
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
          <a className="login-form-forgot" href="">忘记密码</a>
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
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm