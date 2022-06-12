import React from 'react'
import { Form, Input, Button, Divider, message } from 'antd'
import { Link } from 'react-router-dom'

const ForgotForm = () => {
  const onFinish = (values) => {
    const { email } = values

    if (!email) return message.error('Please enter your email or username')

    message.success(`Email is ${email}`)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="flex flex-col w-full px-10 py-5 my-28 items-center justify-center font-nunito">
      <div className="flex flex-col items-center w-10/12">
        <h2 className="text-2xl font-bold">Trouble Logging In?</h2>
        <p className="text-center text-sm">
          Enter your email or username and we&apos;ll send you a link to get
          back into your account.
        </p>
      </div>

      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="w-10/12"
        layout="vertical"
      >
        <div className="flex justify-center my-0 py-0">
          <Form.Item name="email" className="w-full">
            <Input placeholder="Email or Username" />
          </Form.Item>
        </div>

        <div className="flex flex-col justify-center my-0 py-0">
          <Button type="primary" htmlType="submit">
            Send me a recovery link
          </Button>
          <Divider />
          <Link to='/auth' className='flex justify-center'>
            <Button type='link'>Back to Login</Button>
          </Link>
        </div>
      </Form>
    </div>
  )
}

export default ForgotForm
