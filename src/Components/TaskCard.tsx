import React from "react";

type Props = {};

const TaskCard = (props: Props) => {
  return (
    <label htmlFor="task-modal" className="cursor-pointer">
      <div className="w-80">
        <div className="card bg-base-100 shadow-lg compact">
          <div className="card-body">
            <h2 className="card-title text-lg text-slate-200">Task Title</h2>
            <p className="text-sm text-slate-500">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
        </div>
      </div>
    </label>
  );
};

export default TaskCard;
