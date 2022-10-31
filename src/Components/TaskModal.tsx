import React from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom/client";
import SubTaskCheckBox from "./SubTaskCheckBox";

type Props = {};

const TaskModal = (props: Props) => {
  return (
    <>
      <input type="checkbox" id="task-modal" className="modal-toggle" />
      <label htmlFor="task-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="task-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Task Title!</h3>
          <p className="py-4">Task Description</p>

          <form
            action="
            "
            className="flex flex-col gap-2"
          >
            <label className="label">
              <span className="label-text">Subtasks</span>
            </label>
            <SubTaskCheckBox />
            <SubTaskCheckBox />
            <SubTaskCheckBox />
            <SubTaskCheckBox />
          </form>
          <form action="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                className="select select-primary w-full max-w-xs"
                defaultValue="1"
              >
                <option disabled value="1">
                  What is the best TV show?
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default TaskModal;
