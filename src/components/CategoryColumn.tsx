import React from "react";
import { Category } from "../app/slices/categorySlice";
import { useAppSelector } from "../app/store";
import TaskCard from "./TaskCard";

const CategoryColumn = ({ category }: { category: Category }) => {
  const taskList = useAppSelector((state) => state.tasks);

  const renderedTaskList = taskList.filter(
    (task) => task.categoryId === category.id
  );
  return (
    <article className="">
      <h2>{category.title}</h2>
      <div className="flex flex-col gap-5">
        {renderedTaskList.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </article>
  );
};

export default CategoryColumn;
