import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import routes from "../routes.js";
import { AuthContext } from "./context/AuthProvider.jsx";

export default () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required'),
      password: Yup.string()
        .required('Required'),
      confirmPassword: Yup.string()
        .required('Required').oneOf([Yup.ref('password'), null], 'Should match password!'),
    }),
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src="https://i.ibb.co/s3LZHBB/login.jpg" alt="Log in" />
              </div>
              <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }} className="col-12 col-md-6 mt-3 mt-mb-0">
                <h1 className="text-center mb-4">Registration</h1>
                <div className="form-floating mb-3">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <label htmlFor="password" className="form-label">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Confirm password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  <label htmlFor="password" className="form-label">Confirm password</label>
                </div>
                <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
