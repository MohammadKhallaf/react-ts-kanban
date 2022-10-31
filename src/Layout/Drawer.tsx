import React from "react";
import { createBoard } from "../app/slices/boardSlice";
import { setBoard } from "../app/slices/layoutSlice";
import { useAppDispatch, useAppSelector } from "../app/store";
import DarkToggle from "./DarkToggle";

type Props = {};

const Drawer = (props: Props) => {
  const dispatch = useAppDispatch();
  const boardsList = useAppSelector((state) => state.board.boards);

  return (
    <aside className="drawer-side">
      <label htmlFor="site-drawer" className="drawer-overlay"></label>
      <div className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
        {/* Drawer Header */}
        <span className="flex flex-row items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
          </svg>

          <h1 className="ml-3 my-3 text-lg font-bold">Kanban Site</h1>
        </span>
        <ul>
          {/* <!-- Sidebar content here --> */}
          <li>All Boards ({boardsList.length})</li>
          {boardsList.map((board) => (
            <li
              key={board.id}
              data-id={board.id}
              onClick={() => dispatch(setBoard(board))}
            >
              <a>{board.title}</a>
            </li>
          ))}
          <li className="text-red-800" onClick={() => dispatch(createBoard())}>
            <a className="active">
              <b>+</b> create new board
            </a>
          </li>
        </ul>
        <DarkToggle />
        <label
          className="btn btn-circle swap swap-rotate"
          htmlFor="site-drawer"
        >
          {/* <!-- this hidden checkbox controls the state --> */}
          <input type="checkbox" />

          {/* <!-- hamburger icon --> */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* <!-- close icon --> */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </aside>
  );
};

export default Drawer;
