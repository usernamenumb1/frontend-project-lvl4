import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { setIsOpen } from "../../slices/modalSlice";
import { apiContext } from "../context/APIProvider.jsx";

export default () => {
  const { removeChannel } = useContext(apiContext);
  const { t } = useTranslation();
  const isOpen = useSelector((state) => state.modalStore.isOpen);
  const channelIdToRemove = useSelector((state) => state.modalStore.extraData.channelId);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setIsOpen({ type: 'NONE', isOpen: false }));
  };
  const handleRemove = () => {
    console.log(channelIdToRemove);
    dispatch(setIsOpen({ type: 'NONE', isOpen: false }));
    removeChannel({ id: channelIdToRemove }).then(() => toast.success(t('toasts.successfull.channelRemoved'))).catch((err) => console.log(err));
  };
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.removeChannel.header')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('modals.removeChannel.body')}</p>
        <button type="button" className="d-inline btn btn-outline-maroon" onClick={handleRemove}>
          {t('modals.removeChannel.submitButton')}
        </button>
      </Modal.Body>
    </Modal>
  );
};
