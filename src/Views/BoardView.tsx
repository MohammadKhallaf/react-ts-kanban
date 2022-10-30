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
    </section>
  );
};

export default BoardView;
