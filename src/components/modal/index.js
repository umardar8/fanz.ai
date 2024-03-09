import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
// import PrimaryButton from "../button";
// import { Button, Modal } from "antd";

export default function PrimaryModal(props) {
  const { open, onCancel, Modalbody, styles } = props;

  return (
    <>
      <Modal title="Basic Modal" show={open} onhide={onCancel} style={styles}>
        {Modalbody}
      </Modal>
    </>
  );
}
