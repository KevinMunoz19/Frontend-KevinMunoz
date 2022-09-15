import React from 'react'
import * as Yup from 'yup'
import FormMaker from '../FormMaker/FormMaker'

function LoginForm() {
  const initialFormValues = {
    email: '',
    password: '',
  }
  const validationSchema = Yup.object({
    password: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
  })
  const inputTextFields = [
    {
      label: 'Email Address',
      name: 'email',
      type: 'email',
      placeholder: 'jane@formik.com',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
    },
  ]

  return (
    <FormMaker
      formTitle="Login"
      initialFormValues={initialFormValues}
      validationSchema={validationSchema}
      inputTextFields={inputTextFields}
    />
  )
}

export default LoginForm
