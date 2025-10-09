import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { format } from "date-fns";
import { registerUserRequest } from "../../actions/actionCreater";

const SignUp = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    birthday: format(new Date(), "yyyy-MM-dd"),
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
props.registerUserRequest(values)
    actions.resetForm();
  };

  return (
    <>
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={""}
      >
        {(formikProps) => (
          <Form>
            <Field name="firstName" type="text" placeholder="your first name" />
            <Field name="lastName" type="text" placeholder="your last name" />
            <Field name="birthday" type="date" />
            <Field name="email" type="email" placeholder="your@mail" />
            <Field
              name="password"
              type="password"
              placeholder="your password"
            />
            <button type="submit">SEND FORM</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapDispatchToProps = {
  registerUserRequest,
};

export default connect(null,mapDispatchToProps)(SignUp);
