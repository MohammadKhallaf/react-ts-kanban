import { Category } from "../app/slices/categorySlice";
import { useAppSelector } from "../app/store";
import TaskCard from "./TaskCard";

const CategoryColumn = ({ category }: { category: Category }) => {
  const taskList = useAppSelector((state) => state.tasks);

  const renderedTaskList = taskList.filter(
    (task) => task.categoryId === category.id
  );
  return (
    <article className="w-[20rem] min-w-[20rem] dark:bg-slate-700 bg-slate-400 h-fit p-4 rounded-2xl hover:shadow-md transition-all duration-300">
      <h2 className="font-semibold mb-5 text-lg">{category.title}</h2>
      <div className="flex flex-col gap-5">
        {renderedTaskList.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </article>
  );
};

export default CategoryColumn;
