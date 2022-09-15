/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid, Card, InputLabel, TextField, FormHelperText, Select, MenuItem,
  Checkbox, Button, Typography, FormControlLabel, FormControl, CardContent,
} from '@mui/material'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import './signupform.css'

function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div className="textinputcontainer">
      <Grid
        container
        direction="column"
      >
        <Grid
          container
          direction="row"
        >
          <TextField
            className="textinput"
            error={meta.touched && meta.error ? true : undefined}
            id="outlined-basic"
            label={label}
            variant="outlined"
            {...field}
            {...props}
          />
        </Grid>
      </Grid>

      {meta.touched && meta.error ? (
        <FormHelperText error={meta.touched && meta.error ? true : undefined} id="component-error-text">{meta.error}</FormHelperText>
      ) : null}
    </div>
  )
}

function MyCheckbox({ label, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div className="textinputcontainer">
      <FormControlLabel
        control={
          <Checkbox {...field} {...props} />
            }
        label={label}
      />
      {meta.touched && meta.error ? (
        <FormHelperText error={meta.touched && meta.error ? true : undefined} id="component-error-text">{meta.error}</FormHelperText>
      ) : null}
    </div>
  )
}

function MySelect({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div className="textinputcontainer">
      <FormControl>
        <InputLabel id={props.name}>{label}</InputLabel>
        <Select
          labelId={props.name}
          error={meta.touched && meta.error ? true : undefined}
          {...field}
          className="textinput"
          label={label}
        >
          <MenuItem value="designer">Designer</MenuItem>
          <MenuItem value="development">Developer</MenuItem>
          <MenuItem value="product">Product Manager</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
        {meta.touched && meta.error ? (
          <FormHelperText
            error={meta.touched && meta.error ? true : undefined}
          >
            {meta.error}
          </FormHelperText>
        ) : null}
      </FormControl>
    </div>
  )
}

MySelect.propTypes = {
  label: PropTypes.string.isRequired,
}

MyCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
}

MyTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
}

// And now we can use these
export default function SignUpForm() {
  return (
    <Card className="formcard" variant="outlined">
      <CardContent>
        <div className="textinputcontainer">
          <Typography variant="h3" gutterBottom>
            Sign Up
          </Typography>
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            acceptedTerms: false, // added for our checkbox
            jobType: '', // added for our select
          }}
          validationSchema={Yup.object({
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
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // eslint-disable-next-line no-console
              console.log('aaaa')
              setSubmitting(false)
            }, 400)
          }}
        >
          <Form>
            <Grid
              container
              direction="column"
            >
              <Grid
                container
                direction="row"
              >
                <MyTextInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                />
              </Grid>
              <Grid
                container
                direction="row"
              >
                <MyTextInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                />
              </Grid>
              <Grid
                container
                direction="row"
              >
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                />
              </Grid>
              <Grid
                container
                direction="row"
              >
                <MySelect label="Job Type" name="jobType" />
              </Grid>
              <Grid
                container
                direction="row"
              >
                <MyCheckbox name="acceptedTerms" label="I accept the terms and conditions" />
              </Grid>
              <Grid
                container
                direction="row"
              >
                <div className="textinputcontainer">
                  <Button variant="outlined" type="submit">Submit</Button>
                </div>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  )
}
