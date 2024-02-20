import { Fragment, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default ({
  modalState = false,
  onRequestClose = () => {},
  children = null,
}) => {
  return (
    <Fragment>
      <Modal
        isOpen={modalState}
        closeTimeoutMS={250}
        onRequestClose={onRequestClose}
        shouldCloseOnEsc={true}
        onAfterOpen={() => {
          document.body.style.overflow = "hidden";
        }}
        onAfterClose={() => {
          document.body.style.overflow = "unset";
        }}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 10000,
          },
          content: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            border: "none",
            background: "transparent",
            padding: 0,
            inset: 0,
            alignItems: "center",
          },
        }}
        contentLabel="Modal"
      >
        {children}
      </Modal>
    </Fragment>
  );
};
