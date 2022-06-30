import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../slices/modalSlice";
import { apiContext } from "../context/APIProvider.jsx";

export default () => {
  const { emitRemoveChannel } = useContext(apiContext);
  const isOpen = useSelector((state) => state.modalStore.isOpen);
  const channelIdToRemove = useSelector((state) => state.modalStore.extraData.channelId);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setIsOpen({ type: 'NONE', isOpen: false }));
  };
  const handleRemove = () => {
    console.log(channelIdToRemove);
    dispatch(setIsOpen({ type: 'NONE', isOpen: false }));
    emitRemoveChannel({ id: channelIdToRemove });
  };
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Removing channel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure? It will be totally destroyed. Absolutely.</p>
        <button type="button" className="d-inline btn btn-outline-maroon" onClick={handleRemove}>
          Remove channel
        </button>
      </Modal.Body>
    </Modal>
  );
};
