/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React from 'react'
import { Form, Input, Checkbox, message } from 'antd'

const SignUpForm = ({ selectedRole, roleState }) => {
  const onFinish = (values) => {
    const { address, email, firstname, lastname, password, phone, confirm } =
      values

    // Loop through values and check if key is empty
    for (const key in values) {
      if (values[key] === undefined) {
        message.error(`Please fill out ${key} fields`)
        return
      }
    }

    // Regex
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,7})$/

    if (!emailRegex.test(email)) {
      message.error('Please enter a valid email address')
    } else if (!phoneRegex.test(phone)) {
      message.error('Please enter a valid phone number')
    } else if (!passwordRegex.test(password)) {
      message.error('Password must be at least 8 characters containing at least one number, one uppercase and one lowercase letter')
    } else if (password !== confirm) {
      message.error('Password does not match')
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
        <div className="flex flex-row justify-between my-0 py-0">
          <Form.Item label="Firstname" name="firstname" className="w-5/12">
            <Input />
          </Form.Item>

          <Form.Item label="Lastname" name="lastname" className="w-5/12">
            <Input />
          </Form.Item>
        </div>

        <div className="flex justify-center my-0 py-0">
          <Form.Item label="Email" name="email" className="w-full">
            <Input />
          </Form.Item>
        </div>

        <div className="flex justify-center my-0 py-0">
          <Form.Item label="Phone" name="phone" className="w-full">
            <Input />
          </Form.Item>
        </div>

        <div className="flex justify-center my-0 py-0">
          <Form.Item label="Address" name="address" className="w-full">
            <Input />
          </Form.Item>
        </div>

        <div className="flex flex-col justify-center my-0 py-0">
          <Form.Item label="Password" name="password" className="w-full">
            <Input.Password />
          </Form.Item>

          <Form.Item label="Confirm Password" name="confirm" className="w-full">
            <Input.Password />
          </Form.Item>
        </div>

        <div className="flex justify-between my-5 py-0">
          <button
            className="bg-[#3d4853] hover:opacity-90 text-white font-bold py-2 px-2 w-2/12 rounded"
            onClick={() => roleState()}
          >
            Back
          </button>
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

export default SignUpForm
