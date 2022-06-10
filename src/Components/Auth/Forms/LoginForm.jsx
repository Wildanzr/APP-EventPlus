/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React from 'react'
import { Form, Input, Checkbox, message } from 'antd'

const LoginForm = () => {
  const onFinish = (values) => {
    const { email, password, remember } = values

    // Verify payload
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(email)) {
      message.error('Please enter a valid email address')
    } else if (password.length < 8) {
      message.error('Password must be at least 8 characters long')
    } else {
      console.log(
        `Email is ${email} and password is ${password} and remember is ${remember}`
      )
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="flex w-full px-10 py-5 justify-center font-josefin">
      <Form
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="w-10/12"
        layout="vertical"
      >
        <div className="flex justify-center my-0 py-0">
          <Form.Item label="Email" name="email" className="w-full">
            <Input />
          </Form.Item>
        </div>

        <div className="flex justify-center my-0 py-0">
          <Form.Item label="Password" name="password" className="w-full">
            <Input.Password />
          </Form.Item>
        </div>

        <div className="flex my-0 py-0">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </div>

        <div className="flex my-0 py-0">
          <input
            type="submit"
            className="bg-[#003366] hover:opacity-90 text-white font-bold py-2 px-2 w-2/12 rounded"
            value="Sign In"
          />
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
