import React from "react";
import { Formik, Form, Field } from "formik";
import { logiUser } from "../../api/userApi";

const SignIn = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    props.sendData({
      callback: logiUser,
      values,
    });
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

export default SignIn;
