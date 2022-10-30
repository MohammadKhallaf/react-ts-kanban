import React from "react";
import DarkToggle from "./DarkToggle";

type Props = {};

const Drawer = (props: Props) => {
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
          <li>All Boards (8)</li>
          <li>
            <a>Planning</a>
          </li>
          <li>
            <a>Studing</a>
          </li>
          <li>
            <a>Roadmap</a>
          </li>
          <li className="text-red-800">
            <a className="active">
              <b>+</b> create new board
            </a>
          </li>
        </ul>
        <DarkToggle />
      </div>
    </aside>
  );
};

export default Drawer;
