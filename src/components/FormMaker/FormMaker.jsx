/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid, Card, InputLabel, TextField, FormHelperText, Select, MenuItem,
  Checkbox, Typography, FormControlLabel, FormControl, CardContent,
} from '@mui/material'
import { Formik, Form, useField } from 'formik'
import './form.css'
import LoadingButton from '@mui/lab/LoadingButton'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

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

function MySelect({ label, options, ...props }) {
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
          {options.map((item) => (
            <MenuItem value={item.value} key={item.value}>{item.text}</MenuItem>
          ))}
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
  label: PropTypes.string.isRequired,
}

MyTextInput.propTypes = {
  label: PropTypes.string.isRequired,
}

export default function FormMaker({
  formTitle, initialFormValues, validationSchema, inputTextFields, selectFields,
  checkboxFields, handleSubmit,
}) {
  const [loading, setLoading] = React.useState(false)
  const submitting = async (values) => {
    handleSubmit(values).then((res) => {
      if (res) setLoading(false)
    }).catch((error) => {
      if (error) setLoading(false)
    })
  }
  return (
    <Card className="formcard" variant="outlined">
      <CardContent>
        <div className="textinputcontainer">
          <Typography variant="h3" gutterBottom>
            {formTitle}
          </Typography>
        </div>
        <Formik
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setLoading(true)
            submitting(values)
          }}
        >
          <Form>
            <Grid
              container
              direction="column"
            >
              {inputTextFields && (
                <>
                  {inputTextFields.map((item) => (
                    <Grid
                      container
                      direction="row"
                      key={item.name}
                    >
                      <MyTextInput
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        placeholder={item.placeholder}
                      />
                    </Grid>
                  ))}
                </>
              )}
              {selectFields && (
                <>
                  {selectFields.map((item) => (
                    <Grid
                      container
                      direction="row"
                      key={item.name}
                    >
                      <MySelect label={item.label} name={item.name} options={item.options} />
                    </Grid>
                  ))}
                </>
              )}
              {checkboxFields && (
                <>
                  {checkboxFields.map((item) => (
                    <Grid
                      container
                      direction="row"
                      key={item.name}
                    >
                      <MyCheckbox name={item.name} label={item.label} />
                    </Grid>
                  ))}
                </>
              )}
              <Grid
                container
                direction="row"
              >
                <div className="textinputcontainer">
                  <LoadingButton
                    variant="outlined"
                    type="submit"
                    loading={loading}
                    startIcon={<KeyboardDoubleArrowRightIcon />}
                  >
                    Submit
                  </LoadingButton>
                </div>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  )
}

FormMaker.propTypes = {
  formTitle: PropTypes.string.isRequired,
  initialFormValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
}
