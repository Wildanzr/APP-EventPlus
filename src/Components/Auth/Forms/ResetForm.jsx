import React from 'react'
import { Form, Input, Button, message } from 'antd'

const ResetForm = () => {
  const onFinish = (values) => {
    const { password, confirm } = values
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    // Loop through values and check if key is empty
    for (const key in values) {
      if (values[key] === undefined) {
        message.error(`Please fill out ${key} field`)
        return
      }
    }

    // Check password
    if (!passwordRegex.test(password)) {
      return message.error(
        'Password must be at least 8 characters containing at least one number, one uppercase and one lowercase letter'
      )
    } else if (password !== confirm) {
      return message.error('Password does not match')
    }

    return message.success(`Password is ${password}, confirm is ${confirm}`)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="flex flex-col w-full px-10 py-5 my-28 items-center justify-center font-nunito">
      <div className="flex flex-col items-center w-10/12">
        <h2 className="text-2xl font-bold text-center pb-5">Create a new password <br /> for your account</h2>
      </div>

      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="w-10/12"
        layout="vertical"
      >
        <div className="flex flex-col justify-center my-0 py-0">
          <Form.Item name="password" className="w-full">
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="confirm" className="w-full">
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </div>

        <div className="flex justify-center my-0 py-0">
          <Button type="primary" htmlType="submit">
            Save New Password
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default ResetForm
