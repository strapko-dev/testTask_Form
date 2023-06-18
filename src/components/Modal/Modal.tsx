import React from "react";
import s from "./Modal.module.scss";
import { Button, CircularProgress } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  response: any;
  navigate: any;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  response,
  navigate,
}) => {
  if (!isOpen) {
    return null;
  }

  console.log(response?.status);

  if (response?.status === "success") {
    return (
      <div className={s.modalOverlay}>
        <div className={s.modal}>
          <div className={s.modalHeader}>
            <h2>{response?.message}</h2>
          </div>
          <div className={s.modalContent}>
            <img
              src={require("../../icons/Succes.png")}
              alt="successIcon"
              width={"80px"}
              height={"80px"}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: "white",
                textTransform: "none",
                width: "110px",
                height: "44px",
              }}
              onClick={() => navigate("/main")}
            >
              На главную
            </Button>
          </div>
        </div>
      </div>
    );
  } else if (response?.status === "rejected") {
    return (
      <div className={s.modalOverlay}>
        <div className={s.modal}>
          <div className={s.modalHeader}>
            <h2>{response?.message}</h2>
          </div>
          <div className={s.modalContent}>
            <img
              src={require("../../icons/Error.png")}
              alt="errorIcon"
              width={"80px"}
              height={"80px"}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: "white",
                textTransform: "none",
                width: "110px",
                height: "44px",
              }}
              onClick={onClose}
            >
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <CircularProgress size={100} color="secondary" />
      </div>
    </div>
  );
};

export default Modal;
