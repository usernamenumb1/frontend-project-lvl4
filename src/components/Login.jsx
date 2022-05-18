import React from "react";
//import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";


const Login = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        // validationSchema: Yup.object({
        //     username: Yup.string()
        //       .required('Required'),
        //     password: Yup.string()
        //       .required('Required'),
        //   }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
        }
    })
    return (<div className="container-fluid h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-xxl-6">
                        <div className="card shadow-sm">
                            <div className="card-body row p-5">
                                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                    <img src="https://i.ibb.co/s3LZHBB/login.jpg" alt="Log in" />
                                </div>
                            <form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                                <h1 className="text-center mb-4">Log in</h1>
                                <div className="form-floating mb-3">
                                    <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            required
                                            placeholder="Name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
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
                                <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Log in</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
};

export default Login;
