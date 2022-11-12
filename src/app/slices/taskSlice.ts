import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Subtask {
  id: number | string;
  title: string;
  done: boolean;
}

export interface Task {
  id: number | string;
  boardId: number | string;
  categoryId: number | string;
  title: string;
  description?: string;
  subtasks?: Subtask[];
}

const initialState: Task[] = [
  {
    id: nanoid(),
    boardId: 1,
    categoryId: 1,
    title: "new task cat1 board1",
    description: "some dummy",
    subtasks: [
      {
        id: 1,
        title: "subtitile1",
        done: false,
      },
      {
        id: 2,
        title: "subtitile2",
        done: true,
      },
      {
        id: 3,
        title: "subtitile3",
        done: false,
      },
      {
        id: 5,
        title: "subtitile4",
        done: false,
      },
    ],
  },
  { id: nanoid(), boardId: 1, categoryId: 2, title: "new task" },
  { id: nanoid(), boardId: 1, categoryId: 3, title: "new task" },
  { id: nanoid(), boardId: 2, categoryId: 1, title: "new task" },
  { id: nanoid(), boardId: 2, categoryId: 2, title: "new task" },
];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: {
      reducer: (state, { payload }: PayloadAction<Task>) => {
        state.push(payload);
      },
      prepare: (boardId, categoryId, title = "new task") => {
        return {
          payload: { id: nanoid(), title, categoryId, boardId } as Task,
        };
      },
    },
    updateTask: (
      state,
      action: PayloadAction<Partial<Task> & { id: number | string }>
    ) => {
      const taskIdx = state.findIndex((task) => task.id === action.payload.id);

      state[taskIdx] = {
        ...state[taskIdx],
        ...action.payload,
      };
    },
    removeTask: (state, { payload }) => {
      state.filter((task) => task.id !== payload.id);
    },
    addSubTask: (
      state,
      action: PayloadAction<Partial<Task> & { id: number | string }>
    ) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        if (task.subtasks) {
          task.subtasks.push({
            id: nanoid(),
            title: "subtitile46",
            done: false,
          });
        } else {
          task.subtasks = [
            {
              id: nanoid(),
              title: "subtitile46",
              done: false,
            },
          ];
        }
      }
    },
    updateSubTask: (
      state,
      action: PayloadAction<{
        taskId: number | string;
        subTaskId: number | string;
        subTaskItem: Subtask;
      }>
    ) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      const subTask = task?.subtasks?.find(
        (sub) => sub.id === action.payload.subTaskId
      );
      if (subTask) {
        subTask.done = action.payload.subTaskItem.done || subTask?.done;
        subTask.title = action.payload.subTaskItem.title || subTask?.title;
      }
      return state;
    },
  },
});
export const { addSubTask, updateSubTask } = taskSlice.actions;
export default taskSlice.reducer;
