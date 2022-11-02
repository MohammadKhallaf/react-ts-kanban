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
  { id: nanoid(), boardId: 1, categoryId: 1, title: "new task" },
  { id: nanoid(), boardId: 1, categoryId: 1, title: "new task" },
  { id: nanoid(), boardId: 1, categoryId: 1, title: "new task" },
  { id: nanoid(), boardId: 1, categoryId: 1, title: "new task" },
  { id: nanoid(), boardId: 1, categoryId: 1, title: "new task" },
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
  },
});

export default taskSlice.reducer;
