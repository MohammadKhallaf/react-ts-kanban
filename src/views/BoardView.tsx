import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { createCategory } from "../app/slices/categorySlice";
import { setBoard } from "../app/slices/layoutSlice";
import { useAppDispatch, useAppSelector } from "../app/store";

import CategoryColumn from "../components/CategoryColumn";

const BoardView = () => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);
  // const layout = useAppSelector((state) => state.layout);
  const boards = useAppSelector((state) => state.boards);
  const board = boards.find(({ id }) => id.toString() === boardId?.toString());
  useEffect(() => {
    dispatch(setBoard(board));
  }, [boardId]);
  const renderedCategories = categories
    .filter((category) => category.boardId == boardId)
    .map((category) => (
      <CategoryColumn category={category} key={category.id} />
    ));

  const newCategoryBtnHandler = () => {
    dispatch(createCategory(boardId, "New category"));
  };

  return (
    <div className="flex flex-row gap-9 justify-start mx-5">
      <Helmet>
        <title>{board?.title}</title>
      </Helmet>
      {renderedCategories}
      <button
        className="btn card bg-base-100 shadow-lg compact min-w-[20rem] h-16 max-h-96 mt-5 glass"
        onClick={newCategoryBtnHandler}
      >
        <div className="card-body grid place-items-center">
          <h1 className="text-xl font-bold text-slate-800 dark:text-slate-300">
            New Category
          </h1>
        </div>
      </button>
    </div>
  );
};

export default BoardView;
