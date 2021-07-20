import Navbar from "./common/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const myValidationSchema = yup.object().shape({
  email: yup.string().required("Email is Required Field"),
  password: yup.string().required("Password is Required Field")
});

function Login() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={myValidationSchema}
      onSubmit={values => console.log(values)}
    >
      {formikProps => {
        const { values, errors, touched, setFieldValue, handleSubmit } = formikProps;
        return (
          <div className="dark:bg-dark bg-light min-h-screen">
            <Navbar />
            <div className="border w-1/3 mt-20 mx-auto rounded-3xl py-12 px-10">
              <h1 className="mx-10 pb-4 text-4xl text-white font-bold border-b">Sign in to Cons</h1>
              <Form>
                <div className="mt-20 ml-10">
                  <label htmlFor="" className="text-white text-lg">
                    Email
                  </label>
                  <div className="py-1">
                    <Field
                      name="email"
                      type="text"
                      className={`${
                        errors.email && touched.email ? "border-2 border-red-600" : ""
                      } block w-4/6 py-2.5 sm:text-sm px-2 bg-light focus:outline-none rounded-md`}
                    />
                  </div>
                  {/* 
                  {errors.email && touched.email ? (
                    <div className="text-sm text-red-600">Required Field</div>
                  ) : null} */}
                  <ErrorMessage component="div" name="email" className="text-sm text-red-600" />
                </div>
                <div className="mt-10 ml-10">
                  <label htmlFor="" className="text-white text-lg">
                    Password
                  </label>
                  <div className="py-1">
                    <Field
                      name="password"
                      type="password"
                      className={`${
                        errors.password && touched.password ? "border-2 border-red-600" : ""
                      } block w-4/6 py-2.5 sm:text-sm px-2 bg-light focus:outline-none rounded-md`}
                    />
                  </div>
                  <ErrorMessage component="div" name="password" className="text-sm text-red-600" />
                </div>
                <div className="mt-60 flex justify-between">
                  <a href="" className="text-blue-600 text-xl underline px-10">
                    I dont have an account
                  </a>
                  <button
                    type="submit"
                    className="mr-8 bg-blue-600 px-8 py-1.5 rounded-xl text-white font-medium"
                  >
                    Login
                  </button>
                  {/* <button
                    type="reset"
                    className="mr-8 bg-blue-600 px-8 py-1.5 rounded-xl text-white font-medium"
                  >
                    reset
                  </button> */}
                  {/* <button
                  onClick={() => setFieldValue("email", "Santheep")}
                  className="mr-8 bg-blue-600 px-8 py-1.5 rounded-xl text-white font-medium"
                >
                  change it
                </button> */}
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default Login;
