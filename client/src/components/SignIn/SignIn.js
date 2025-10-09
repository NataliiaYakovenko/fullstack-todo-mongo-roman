import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { loginUserRequest } from "../../actions/actionCreater";

const SignIn = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    props.loginUserRequest(values);
    actions.resetForm();
  };

  return (
    <>
      <h2>Sign In</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={""}
      >
        {(formikProps) => (
          <Form>
            <Field name="email" type="email" placeholder="email@gmail.com" />
            <Field name="password" type="password" />

            <button type="submit">SIGN IN</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapDispatchToProps = {
  loginUserRequest,
};

export default connect(null, mapDispatchToProps)(SignIn);
