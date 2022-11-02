import { createPortal } from "react-dom";

import CreateTaskModal from "./components/CreateTaskModal";
import TaskModal from "./components/TaskModal";

const modalRoot = document.getElementById("modal-root") as HTMLElement;
const Modal = () => {
  return createPortal(
    <>
      <TaskModal />
      <CreateTaskModal />
    </>,
    modalRoot
  );
};

export default Modal;
