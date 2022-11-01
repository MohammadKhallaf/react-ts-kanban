import React, { useState } from "react";
import { Board, createBoard, updateBoard } from "../app/slices/boardSlice";
import { setBoard } from "../app/slices/layoutSlice";
import { useAppDispatch, useAppSelector } from "../app/store";

type Props = {};

const BoardList = (props: Props) => {
  const dispatch = useAppDispatch();
  const boardsList = useAppSelector((state) => state.boards);

  return (
    <ul className="flex flex-col gap-3">
      {/* <!-- Sidebar content here --> */}
      <li>All Boards ({boardsList.length})</li>
      {boardsList.map((board) => (
        <BoardListItem board={board} key={board.id} />
      ))}
      <li className="text-red-800" onClick={() => dispatch(createBoard())}>
        <a className="active">
          <b>+</b> create new board
        </a>
      </li>
    </ul>
  );
};

const BoardListItem = ({ board }: { board: Board }) => {
  const dispatch = useAppDispatch();
  const [readOnly, setReadOnly] = useState(true);
  const toggleEdit = () => setReadOnly((state) => !state);
  return (
    <li
      data-id={board.id}
      onClick={() => dispatch(setBoard(board))}
      className="select-none"
    >
      <input
        value={board.title}
        readOnly={readOnly}
        className="bg-transparent hover:bg-base-200 border border-transparent focus:border-primary read-only:focus:border-transparent focus:caret-primary "
        onClick={toggleEdit}
        onChange={(e) => {
          dispatch(updateBoard({ id: board.id, title: e.currentTarget.value }));
        }}
        onBlur={() => setReadOnly(true)}
      />
    </li>
  );
};

export default BoardList;
