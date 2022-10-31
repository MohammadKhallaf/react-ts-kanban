import React from "react";
import CategoryColumn from "../Components/CategoryColumn";
import TaskCard from "../Components/TaskCard";
import Navbar from "../Layout/Navbar";

type Props = {};

const BoardView = (props: Props) => {
  return (
    <section className="flex flex-row gap-9 justify-start">
      <CategoryColumn />
      <CategoryColumn />
      <CategoryColumn />
      <CategoryColumn />
      <div className="card bg-base-100 shadow-lg compact min-w-[20rem] max-h-96 mt-5 glass">
        <div className="card-body grid place-items-center">
          <h1 className="text-xl font-bold">New Column</h1>
        </div>
      </div>
    </section>
    
  );
};

export default BoardView;
