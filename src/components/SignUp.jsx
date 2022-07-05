import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";
import routes from "../routes.js";
import { AuthContext } from "./context/AuthProvider.jsx";

export default () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { logIn } = useContext(AuthContext);
  const setIsAuthorised = ({ data }) => {
    logIn(data);
    navigate(routes.mainChatPage());
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, 'take it easy big boy! 20 tops')
        .required('Required'),
      password: Yup.string()
        .min(6, 'to short')
        .required('Required'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Should match password!'),
    }),
    onSubmit: ({ username, password }) => {
      console.log(formik.errors);
      axios.post('api/v1/signup', { username, password })
        .then(setIsAuthorised)
        .catch(({ response }) => {
          if (response.status === 409) formik.errors.username = response.statusText;
          console.log(formik.errors.username);
        });
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
                <h1 className="text-center mb-4">{t('signupPage.header')}</h1>
                <div className="form-floating pb-3">
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
                  <label htmlFor="name" className="form-label">{t('signupPage.labels.name')}</label>
                  {formik.errors.username && <div className="text-danger">{formik.errors.username}</div>}
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
                  <label htmlFor="password" className="form-label">{t('signupPage.labels.password')}</label>
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
                  <label htmlFor="password" className="form-label">{t('signupPage.labels.confirmPassword')}</label>
                </div>
                <button type="submit" className="w-100 mb-3 btn btn-outline-maroon">{t('signupPage.submitButton')}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
