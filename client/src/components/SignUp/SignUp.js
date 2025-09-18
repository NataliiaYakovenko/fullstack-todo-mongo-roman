import React from "react";
import { Formik, Form, Field } from "formik";

const SignUp = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    birthday: new Date(),
    email: "",
    passwordHash: "",
  };

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <h2>SignUp</h2>;
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={""}
      >
        {(formikProps) => (
          <Form>
            <Field name="firstName" type="text" placeholder="your first name" />
            <Field name="lastName" type="text" placeholder="your last name" />
            <Field name="birthday" type="date"  />
            <Field name="email" type="email" placeholder="your@mail" />
            <Field name="passwordHash" type="password" placeholder="your password" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
