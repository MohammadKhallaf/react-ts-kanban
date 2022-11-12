import React from "react";
import { Subtask, updateSubTask } from "../app/slices/taskSlice";
import { useAppDispatch } from "../app/store";

type Props = {
  subTask: Subtask;
  taskId: string | number;
};

const SubTaskCheckBox = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="form-control bg-base-300 rounded-lg">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          defaultChecked={props.subTask.done}
          onChange={(e) =>
            dispatch(
              updateSubTask({
                taskId: props.taskId,
                subTaskId: props.subTask.id,
                subTaskItem: { ...props.subTask, done: e.target.checked },
              })
            )
          }
        />
        <span className="label-text mr-auto ml-3">{props.subTask.title}</span>
      </label>
    </div>
  );
};

export default SubTaskCheckBox;
