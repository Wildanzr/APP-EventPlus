/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Select, Modal, message } from 'antd'
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'
import './PhoneInput.css'

const SignUpForm = ({ selectedRole, roleState }) => {
  // Destructure Select
  const { Option } = Select

  // Local state
  const [agreed, setAgreed] = useState(false)
  const [interest] = useState([
    'Business',
    'Education',
    'Concert',
    'Conference',
    'Competition',
    'Webinar',
    'Social Talk',
    'Technology',
    'Fashion',
    'Health',
    'Blockchain',
    'Marketing'
  ])

  // Map interest to interestList with Option component
  const interestList = interest.map((interest) => (
    <Option key={interest} value={interest}>
      {interest}
    </Option>
  ))

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const onFinish = (values) => {
    const { email, password, phone, confirm } = values

    // Loop through values and check if key is empty
    for (const key in values) {
      if (values[key] === undefined) {
        message.error(`Please fill out ${key} field`)
        return
      }
    }

    // Regex
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if (!emailRegex.test(email)) {
      return message.error('Please enter a valid email address')
    } else if (phone.length < 11) {
      return message.error('Please enter a valid phone number')
    } else if (!passwordRegex.test(password)) {
      return message.error(
        'Password must be at least 8 characters containing at least one number, one uppercase and one lowercase letter'
      )
    } else if (password !== confirm) {
      return message.error('Password does not match')
    }

    console.log(values)
    return message.success('Form submitted successfully')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const showTerms = () => {
    Modal.info({
      title: 'EventPlus Terms and Conditions',
      width: '80%',
      centered: true,
      content: (
        <div className="flex flex-col">
          <p>
          We agree to provide you with the Instagram Service. The Service includes all of the Instagram products, features, applications, services, technologies and software that we provide to advance Instagram&apos;s mission: To bring you closer to the people and things you love. The Service is made up of the following aspects:
          <br/>
          <br/>
          People are different. We want to strengthen your relationships through shared experiences that you actually care about. So we build systems that try to understand who and what you and others care about, and use that information to help you create, find, join and share in experiences that matter to you. Part of that is highlighting content, features, offers and accounts that you might be interested in, and offering ways for you to experience Instagram, based on things that you and others do on and off Instagram.
          <br/>
          <br/>
          We develop and use tools and offer resources to our community members that help to make their experiences positive and inclusive, including when we think they might need help. We also have teams and systems that work to combat abuse and breaches of our Terms and Policies, as well as harmful and deceptive behaviour. We use all the information we have – including your information – to try to keep our platform secure. We may also share information about misuse or harmful content with other Meta Companies or law enforcement.
          <br/>
          <br/>
          Organising and analysing information for our growing community is central to our Service. A big part of our Service is creating and using cutting-edge technologies that help us personalise, protect and improve our Service on an incredibly large scale for a broad global community. Technologies such as artificial intelligence and machine learning give us the power to apply complex processes across our Service. Automated technologies also help us to ensure the functionality and integrity of our Service
          </p>
        </div>
      ),

      onOk () {}
    })
  }

  return (
    <div className="flex w-full px-10 py-5 justify-center font-nunito">
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
          <Form.Item name="email" className="w-7/12">
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="username" className="w-4/12">
            <Input placeholder="Username" />
          </Form.Item>
        </div>

        <div className="flex justify-center my-0 py-0">
          <Form.Item name="phone" className="w-full">
            <PhoneInput country={'id'} />
          </Form.Item>
        </div>

        <div className="flex flex-col justify-center my-0 py-0">
          <Form.Item name="password" className="w-full">
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="confirm" className="w-full">
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </div>

        <div className="flex justify-center my-0 py-0">
          <Form.Item name="interest" className="w-full">
            <Select
              mode="multiple"
              allowClear
              placeholder="Select your preferred interest"
              onChange={handleChange}
            >
              {interestList}
            </Select>
          </Form.Item>
        </div>

        <Form.Item name="agreement" valuePropName="checked">
          <Checkbox defaultChecked={agreed} onChange={() => {
            setAgreed(!agreed)
          }}>
            I have read and agree to the <a onClick={() => showTerms()}>terms and condition</a>
          </Checkbox>
        </Form.Item>

        <div className="flex justify-between my-5 py-0">
          <Button
            type="default"
            onClick={() => {
              roleState()
            }}
          >
            Back
          </Button>

          <Button type="primary" htmlType="submit" disabled={!agreed}>
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default SignUpForm
