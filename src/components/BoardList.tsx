import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Board, createBoard, updateBoard } from "../app/slices/boardSlice";
import { useAppDispatch, useAppSelector } from "../app/store";

type Props = {};

const BoardList = (props: Props) => {
  const dispatch = useAppDispatch();
  const boardsList = useAppSelector((state) => state.boards);

  return (
    <div>
      <p className="text-lg font-semibold">All Boards ({boardsList.length})</p>
      <ul className="flex flex-col gap-3 max-h-[50vh] overflow-y-auto">
        {/* <!-- Sidebar content here --> */}
        {boardsList.map((board) => (
          <BoardListItem board={board} key={board.id} />
        ))}
      </ul>
      <li className="text-red-800 mt-5" onClick={() => dispatch(createBoard())}>
        <a className="active">
          <b>+</b> create new board
        </a>
      </li>
    </div>
  );
};

const BoardListItem = ({ board }: { board: Board }) => {
  const dispatch = useAppDispatch();
  const [readOnly, setReadOnly] = useState(true);
  const toggleEdit = () => setReadOnly((state) => !state);
  return (
    <li data-id={board.id} className="select-none">
      <NavLink to={`board/${board.id}`}>
        <input
          value={board.title}
          readOnly={readOnly}
          disabled={readOnly}
          className="bg-transparent border border-transparent focus:border-primary read-only:focus:border-transparent focus:caret-primary hover:cursor-pointer"
          onChange={(e) => {
            dispatch(
              updateBoard({ id: board.id, title: e.currentTarget.value })
            );
          }}
          onBlur={() => setReadOnly(true)}
        />
        <button onClick={toggleEdit}>edit</button>
      </NavLink>
    </li>
  );
};

export default BoardList;
