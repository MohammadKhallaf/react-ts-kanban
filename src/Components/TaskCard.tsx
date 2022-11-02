import React from "react";
import { Task } from "../app/slices/taskSlice";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <label htmlFor="task-modal" className="cursor-pointer">
      <div className="w-80">
        <div className="card bg-base-100 shadow-lg compact">
          <div className="card-body">
            <h2 className="card-title text-lg text-base-1200">{task.title}</h2>
            <p className="text-sm text-base-500">{task.description}</p>
          </div>
        </div>
      </div>
    </label>
  );
};

export default TaskCard;
