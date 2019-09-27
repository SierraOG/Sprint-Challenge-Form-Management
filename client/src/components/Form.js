import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <div className='login'>
    <Form>
        <div style={{width: '47%'}}>
            {touched.username && errors.username && <p data-testid = 'username-error'>{errors.username}</p>}
            <Field name="username" placeholder="User Name" data-testid='username'/>
        </div>
        <div data-testid = 'password'>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
        </div>
      <button type='submit' data-testid='submitRefButton' className="btn btn-primary btn-block btn-large" disabled={isSubmitting}>Submit</button>
    </Form>
    </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .max(50, 'Too long, 50 character maximum reached')
      .required("User name is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Password is required"),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // if (values.email === "waffle@syrup.com") {
    //   setErrors({ email: "That email is already taken" });
    // } else {
        console.log(values)
      axios
        .post("http://localhost:5000/api/register", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          window.alert(`${res.data.message} `)
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
//   }
})(LoginForm);

export default FormikLoginForm;