import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import http from 'utils/http'

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
        console.log('Received values of form: ', values);
        http.$post(config.signin, values, (res) => {
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
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
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