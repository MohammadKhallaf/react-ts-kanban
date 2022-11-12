import React from "react";
import { addSubTask, taskSlice } from "../app/slices/taskSlice";
import { useAppDispatch, useAppSelector } from "../app/store";
import SubTaskCheckBox from "./SubTaskCheckBox";

type Props = {};

const TaskModal = (props: Props) => {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.modal);
  const tasks = useAppSelector((state) => state.tasks);
  const categories = useAppSelector((state) => state.categories);
  const currentTask = tasks.find((task) => task.id === modalState.taskId);
  const renderedSubTasks = currentTask?.subtasks?.map((sub) => (
    <SubTaskCheckBox key={sub.id} subTask={sub} taskId={currentTask.id} />
  ));
  const renderedCategories = categories
    .filter((cat) => cat.boardId === modalState.boardId)
    .map((category) => {
      if (category.id === modalState.categoryId) {
        return (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        );
      } else {
        return (
          <option key={category.id} value={category.id}>
            {category.title}
          </option>
        );
      }
    });

  const categoryChangehandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      taskSlice.actions.updateTask({
        id: modalState.taskId,
        categoryId: +e.target.value,
      })
    );
  };
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

          <h3 className="font-bold text-lg">{currentTask?.title}</h3>
          <p className="py-4">{currentTask?.description}</p>

          <form action="" className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text">Subtasks</span>
            </label>
            <div className="max-h-[300px] flex flex-col gap-2 overflow-y-auto">
              {renderedSubTasks}
            </div>
            <button
              className="btn"
              type="button"
              onClick={() =>
                dispatch(addSubTask({ id: currentTask?.id || "NULL" }))
              }
            >
              Add new subtask
            </button>
          </form>
          <form action="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                className="select select-primary w-full max-w-xs"
                defaultValue={modalState.categoryId}
                onChange={categoryChangehandler}
              >
                {renderedCategories}
              </select>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default TaskModal;
