import React, { useContext } from "react";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "../../slices/modalSlice.js";
import { apiContext } from "../context/APIProvider.jsx";

export default () => {
  const { emitRenameChannel } = useContext(apiContext);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalStore.isOpen);
  const channelIdToRename = useSelector((state) => state.modalStore.extraData.channelId);
  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    validationSchema: Yup.object({
      channelName: Yup.string().required(),
    }),
    onSubmit: ({ channelName }) => {
      console.log(channelName);
      dispatch(setIsOpen({ type: 'NONE', isOpen: false }));
      emitRenameChannel(channelIdToRename, channelName);
    },
  });
  const handleClose = () => {
    dispatch(setIsOpen({ type: 'NONE', isOpen: false }));
  };
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Renaming channel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="d-flex" onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }}>
          <input
            id="channelName"
            name="channelName"
            paceholder="Enter your channel"
            value={formik.values.channelName}
            onChange={formik.handleChange}
            type="text"
            className="border-0 p-0 ps-2 form-control bg-light d-inline"
          />
          {/* <button type="button" className="btn maroon" onClick={handleClose}>
            Close
          </button> */}
          <button type="submit" className="d-inline btn btn-outline-maroon">
            Add channel
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};
