import React from "react";
import { useAppSelector } from "../app/store";
import CategoryColumn from "../Components/CategoryColumn";
import TaskCard from "../Components/TaskCard";
import Navbar from "../Layout/Navbar";

type Props = {};

const BoardView = (props: Props) => {
  const categories = useAppSelector((state) => state.categories);
  const renderedCategories = categories.map((category) => (
    <CategoryColumn category={category} key={category.id} />
  ));
  return (
    <main className="flex flex-row gap-9 justify-start">
      {renderedCategories}
      <div className="card bg-base-100 shadow-lg compact min-w-[20rem] max-h-96 mt-5 glass">
        <div className="card-body grid place-items-center">
          <h1 className="text-xl font-bold">New Column</h1>
        </div>
      </div>
    </main>
  );
};

export default BoardView;
