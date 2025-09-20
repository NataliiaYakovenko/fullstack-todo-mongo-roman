import React from "react";
import { Formik, Form, Field } from "formik";
import { format } from "date-fns";

const SignUp = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    birthday: format(new Date(), "yyyy-MM-dd"),
    email: "",
    passwordHash: "",
  };

  const onSubmit = (values, actions) => {
    props.sendData(values);
    actions.resetForm();
  };

  return (
    <>
      <h2>SignUp</h2>
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
              name="passwordHash"
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

export default SignUp;
