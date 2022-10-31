import React from "react";

type Props = {};

const SubTaskCheckBox = (props: Props) => {
  return (
    <div className="form-control bg-base-300 rounded-lg">
      <label className="label cursor-pointer">
        <input type="checkbox" checked className="checkbox  checkbox-primary" />
        <span className="label-text mr-auto ml-3">Remember me</span>
      </label>
    </div>
  );
};

export default SubTaskCheckBox;
