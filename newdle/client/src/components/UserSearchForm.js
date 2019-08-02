import React from 'react';
import PropTypes from 'prop-types';
import {FORM_ERROR} from 'final-form';
import {Form as FinalForm, Field} from 'react-final-form';
import {Button, Form} from 'semantic-ui-react';

function validateForm({name, email}) {
  if (!name && !email) {
    return {[FORM_ERROR]: 'Missing search criteria'};
  }
  return {};
}

export default function UserSearchForm({onSearch}) {
  return (
    <FinalForm
      onSubmit={onSearch}
      validate={validateForm}
      subscription={{
        values: true,
        pristine: true,
        submitting: true,
        hasValidationErrors: true,
      }}
      render={fprops => (
        <Form onSubmit={fprops.handleSubmit}>
          <Field
            name="name"
            type="text"
            component={Form.Input}
            label="Name"
            disabled={fprops.submitting}
          />
          <Field
            name="email"
            type="text"
            component={Form.Input}
            label="Email address"
            disabled={fprops.submitting}
          />
          <Button
            type="submit"
            disabled={fprops.pristine || fprops.submitting || fprops.hasValidationErrors}
            loading={fprops.submitting}
          >
            Search
          </Button>
        </Form>
      )}
    />
  );
}

UserSearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
