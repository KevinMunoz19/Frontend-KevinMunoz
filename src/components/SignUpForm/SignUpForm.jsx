import React from 'react'
import * as Yup from 'yup'
import FormMaker from '../FormMaker/FormMaker'

function SignUpForm() {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    acceptedTerms: false,
    jobType: '',
  }

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    acceptedTerms: Yup.boolean()
      .required('Required')
      .oneOf([true], 'You must accept the terms and conditions.'),
    jobType: Yup.string()
      .oneOf(
        ['designer', 'development', 'product', 'other'],
        'Invalid Job Type',
      )
      .required('Required'),
  })

  const inputTextFields = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      placeholder: 'Jane',
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      placeholder: 'Doe',
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'email',
      placeholder: 'jane@formik.com',
    },
  ]

  const selectFields = [
    {
      label: 'Job Type',
      name: 'jobType',
      options: [
        {
          value: 'designer',
          text: 'Designer',
        },
        {
          value: 'development',
          text: 'Developer',
        },
        {
          value: 'product',
          text: 'Product Manager',
        },
        {
          value: 'other',
          text: 'Other',
        },
      ],
    },
  ]

  const checkboxFields = [
    {
      label: 'I accept the terms and conditions',
      name: 'acceptedTerms',
    },
  ]

  return (
    <FormMaker
      formTitle="Sign Up"
      initialFormValues={initialFormValues}
      validationSchema={validationSchema}
      inputTextFields={inputTextFields}
      selectFields={selectFields}
      checkboxFields={checkboxFields}
    />
  )
}

export default SignUpForm
