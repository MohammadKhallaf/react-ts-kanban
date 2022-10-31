import React from "react";
import { createPortal } from "react-dom";
import CreateTaskModal from "./Components/CreateTaskModal";
import TaskModal from "./Components/TaskModal";

type Props = {};

const modalRoot = document.getElementById("modal-root") as HTMLElement;
const Modal = (props: Props) => {
  return createPortal(
    <>
      <TaskModal />
      <CreateTaskModal />
    </>,
    modalRoot
  );
};

export default Modal;
