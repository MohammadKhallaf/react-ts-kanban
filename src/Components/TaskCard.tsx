import React from "react";

type Props = {};

const TaskCard = (props: Props) => {
  return (
    <div className="w-80">
      <div className="card bg-base-100 shadow-lg compact">
        {/* <figure>
      <img src="https://placeimg.com/400/225/arch" />
    </figure> */}
        <div className="card-body">
          <h2 className="card-title text-lg">Shoes!</h2>
          <p className="text-sm text-slate-500">
            If a dog chews shoes whose shoes does he choose?
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
