import React from "react";
import CategoryColumn from "../Components/CategoryColumn";
import TaskCard from "../Components/TaskCard";
import Navbar from "../Layout/Navbar";

type Props = {};

const BoardView = (props: Props) => {
  return (
    <section className="flex flex-row gap-9 justify-start">
      {/* <label
        htmlFor="site-drawer"
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </label> */}

      <CategoryColumn />
      <CategoryColumn />
      <CategoryColumn />
      <CategoryColumn />
      <div className="card bg-base-100 shadow-lg compact min-w-[20rem] glass">
        <div className="card-body grid place-items-center">
          <h1 className="text-xl font-bold">New Column</h1>
        </div>
      </div>
    </section>
  );
};

export default BoardView;
