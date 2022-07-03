import React from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";
const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} onClose={() => handleCloseModal()}>
      <>Modal</>
    </MuiModal>
  );
};

export default Modal;
