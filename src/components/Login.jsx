import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import routes from "../routes.js";
import { AuthContext } from "./context/AuthProvider.jsx";

const Login = () => {
  // const [isInputValid, setInputValid] = useState('valid');
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const setIsAuthorised = ({ data }) => {
    logIn(data);
    navigate(routes.mainChatPage());
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required'),
      password: Yup.string()
        .min(5, 'to short')
        .required('Required'),
    }),
    onSubmit: ({ username, password }) => {
      console.log(formik.errors);
      axios.post('api/v1/login', { username, password })
        .then(setIsAuthorised)
        .catch(({ response }) => {
          console.log(response);
          if (response.status === 401) formik.errors.password = response.statusText;
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
              <form onSubmit={(e) => { e.stopPropagation(); e.preventDefault(); formik.handleSubmit(e); }} className="col-12 col-md-6 mt-3 mt-mb-0 needs-validation" noValidate>
                <h1 className="text-center mb-4">Log in</h1>
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
                  <div className="invalid-tooltip">{formik.errors.password}</div>
                </div>
                <button type="submit" className="w-100 mb-3 btn btn-outline-primary" onClick={console.log(formik.touched)}>Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
