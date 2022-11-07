import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/store";

import CategoryColumn from "../components/CategoryColumn";

const BoardView = () => {
  const { boardId } = useParams();
  const categories = useAppSelector((state) => state.categories);

  const renderedCategories = categories
    .filter((category) => category.boardId == boardId)
    .map((category) => (
      <CategoryColumn category={category} key={category.id} />
    ));

  return (
    <div className="flex flex-row gap-9 justify-start">
      {renderedCategories}
      <div className="card bg-base-100 shadow-lg compact min-w-[20rem] max-h-96 mt-5 glass">
        <div className="card-body grid place-items-center">
          <h1 className="text-xl font-bold">New Column</h1>
        </div>
      </div>
    </div>
  );
};

export default BoardView;
