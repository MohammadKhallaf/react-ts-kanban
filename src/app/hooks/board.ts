import { removeBoard } from "../slices/boardSlice";
import { removeBoardCategories } from "../slices/categorySlice";
import { removeBoardTasks } from "../slices/taskSlice";
import { useAppDispatch } from "../store";

export const useBoardRemover = (boardId: string | number) => {
  const dispatch = useAppDispatch();
  const removeHandler = () => {
    dispatch(removeBoard({ id: boardId }));
    dispatch(removeBoardCategories({ boardId }));
    dispatch(removeBoardTasks({ boardId }));
  };
  return removeHandler;
};
