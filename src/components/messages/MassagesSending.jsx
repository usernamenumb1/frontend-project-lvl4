import React, { useContext, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { BsArrowRightSquare } from 'react-icons/bs';
import { apiContext } from "../context/APIProvider.jsx";

export default () => {
  const { sendMessage } = useContext(apiContext);
  const username = localStorage.getItem("username");
  const inputRef = useRef();
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: Yup.object({
      message: Yup.string().required(),
    }),
    onSubmit: ({ message }, actions) => {
      console.log(message);
      sendMessage({ body: message, username });
      console.log(inputRef.current.value);
      actions.resetForm();
      inputRef.current.focus();
    },
  });
  return (
    <div className="mt-auto px-5 py-3">
      <form className="py-1 border rounded bg-light" onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }}>
        <div className="input-group">
          <input
            ref={inputRef}
            id="message"
            name="message"
            paceholder="Enter your message"
            value={formik.values.message}
            onChange={formik.handleChange}
            type="text"
            className="border-0 p-0 ps-2 form-control bg-light"
          />
          <button type="submit" aria-label="Send" className="btn btn-group-vertical mx-1 p-0"><BsArrowRightSquare size="2em" /></button>
        </div>
      </form>
    </div>
  );
};
