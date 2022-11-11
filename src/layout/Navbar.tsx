import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/store";
import { Helmet } from "react-helmet-async";
const Navbar = () => {
  const boardTitle = useAppSelector((state) => state.layout.board.title);

  const { boardId } = useParams();

  return (
    <div className="w-full navbar bg-base-200">
      
      
      <div className="flex-none lg:hidden">
        <label htmlFor="site-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <h1 className="flex-1 px-2 mx-2 text-lg font-bold uppercase">
        {boardTitle}
      </h1>
      {/* <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">

          <li>
            <a>Navbar Item 1</a>
          </li>
          <li>
            <a>Navbar Item 2</a>
          </li>
        </ul>
      </div> */}

      <label
        htmlFor="create-task-modal"
        className="cursor-pointer btn rounded-full my-0 py-0"
      >
        add new task
      </label>

      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;