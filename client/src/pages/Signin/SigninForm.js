import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import http from 'utils/http'
import { message } from 'antd';

const FormItem = Form.Item;

const config = {
  search: 'getAllUsers',
  signin: 'signin'
}

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        http.$post(config.signin, values).then((res) => {
          if (!res || res.Code !== 0) return message.error('注册失败，请稍后再试');
          message.success('注册成功');
          this.props.history.push('/login');
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
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input autoComplete="off" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('PassWord', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="login-form-button">
            注册
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm