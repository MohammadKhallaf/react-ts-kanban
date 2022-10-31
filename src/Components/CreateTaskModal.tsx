import React from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom/client";
import SubTaskCheckBox from "./SubTaskCheckBox";

type Props = {};

const CreateTaskModal = (props: Props) => {
  return (
    <>
      <input type="checkbox" id="create-task-modal" className="modal-toggle" />
      <label htmlFor="create-task-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="create-task-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            action=""
            className="mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task Title</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task Description</span>
              </label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Subtasks</span>
              </label>
              <div className="form-control gap-3">
                <SubTaskCheckBox />
                <SubTaskCheckBox />
                <SubTaskCheckBox />
                <button className="btn btn-active btn-primary" type="button">
                  Add New Subtask
                </button>
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task Category</span>
              </label>
              <select className="select select-primary w-full" defaultValue={1}>
                <option disabled value={1}>
                  What is the best TV show?
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            <div className="divider mt-9"></div>
            <div className="form-control ">
              <button type="submit" className="btn">
                create task
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default CreateTaskModal;
