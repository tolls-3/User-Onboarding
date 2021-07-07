import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function TeamForm({ validationSchema, initialTeamForm, onSubmit }) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialTeamForm}
      onSubmit={onSubmit}
      render={props => {
        return (
          <Form>
            {!props.dirty && <div>time to start typing!!</div>}
            <div>
              <label>
                Name:
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
              </label>
            </div>
            <div>
              <label>
                Email:
                <Field name="email" type="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" />
              </label>
            </div>
            <div>
              <label>
                Password:
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />
              </label>
            </div>
            <div>
              <label>
                Terms:
                <Field name="terms" type="checkbox" value="1" />
                <ErrorMessage name="terms" component="div" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    />
  );
}

export default TeamForm;
