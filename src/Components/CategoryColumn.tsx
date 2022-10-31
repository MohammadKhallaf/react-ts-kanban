import React from "react";
import TaskCard from "./TaskCard";

type Props = {};

const CategoryColumn = (props: Props) => {
  return (
    <article className="">
      <h2>title</h2>
      <div className="flex flex-col gap-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </article>
  );
};

export default CategoryColumn;
