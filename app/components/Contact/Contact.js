import React from 'react';
import { reset, Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

const afterSubmit = (result, dispatch) =>
  dispatch(reset('contact'));

const validate = function(values) {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiLine={true}
          rows={5}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'contact',
  validate,
  onSubmitSuccess: afterSubmit,
})(MaterialUiForm);
