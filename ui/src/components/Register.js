import Navbar from "./common/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const myValidationSchema = yup.object().shape({
  email: yup.string().label("Email").required(),
  username: yup.string().label("Username").required(),
  password: yup.string().label("Password").required(),
  confirmPassword: yup.string().label("Confirm Password").required()
});

const myInitialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

function Register() {
  return (
    <Formik
      initialValues={myInitialValues}
      validationSchema={myValidationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {formikProps => {
        const { values, errors, touched } = formikProps;
        return (
          <div className="dark:bg-dark bg-light min-h-screen pb-10">
            <Navbar />
            <div className="border w-1/3 mt-20 mx-auto rounded-3xl py-12 px-10">
              <h1 className="mx-10 pb-4 text-4xl text-white font-bold border-b">
                Create your account
              </h1>
              <Form>
                <div className="mt-20 ml-10">
                  <label htmlFor="" className="text-white text-lg ">
                    Email
                  </label>
                  <div className="py-1">
                    <Field
                      type="text"
                      name="email"
                      className={`${
                        errors.email && touched.email ? "border-2 border-red-600" : ""
                      } block w-4/6 py-2.5 sm:text-sm px-2 bg-light focus:outline-none rounded-md`}
                    />
                  </div>
                  <ErrorMessage component="div" name="email" className="text-sm text-red-600" />
                </div>
                <div className="mt-2 ml-10">
                  <label htmlFor="" className="text-white text-lg">
                    Username
                  </label>
                  <div className="py-1">
                    <Field
                      type="text"
                      name="username"
                      className={`${
                        errors.username && touched.username ? "border-2 border-red-600" : ""
                      } block w-4/6 py-2.5 sm:text-sm px-2 bg-light focus:outline-none rounded-md`}
                    />
                  </div>
                  <ErrorMessage component="div" name="username" className="text-sm text-red-600" />
                </div>
                <div className="mt-2 ml-10">
                  <label htmlFor="" className="text-white text-lg">
                    Password
                  </label>
                  <div className="py-1">
                    <Field
                      type="text"
                      name="password"
                      className={`${
                        errors.password && touched.password ? "border-2 border-red-600" : ""
                      } block w-4/6 py-2.5 sm:text-sm px-2 bg-light focus:outline-none rounded-md`}
                    />
                  </div>
                  <ErrorMessage component="div" name="password" className="text-sm text-red-600" />
                </div>
                <div className="mt-2 ml-10">
                  <label htmlFor="" className="text-white text-lg">
                    Confirm password
                  </label>
                  <div className="py-1">
                    <Field
                      type="text"
                      name="confirmPassword"
                      className={`${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-2 border-red-600"
                          : ""
                      } block w-4/6 py-2.5 sm:text-sm px-2 bg-light focus:outline-none rounded-md`}
                    />
                  </div>
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="text-sm text-red-600"
                  />
                </div>
                <div className="mt-28 flex justify-between">
                  <a href="" className="text-blue-600 text-xl underline px-10">
                    Already have an account
                  </a>
                  <button
                    type="submit"
                    className="focus:outline-none mr-8 bg-blue-600 px-8 py-1.5 rounded-xl text-white font-medium"
                  >
                    Register
                  </button>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default Register;
