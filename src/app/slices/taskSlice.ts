import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Subtask {
  id: number | string;
  title: string;
  done: boolean;
}

export interface Task {
  id: number | string;
  boardId?: number | string;
  categoryId?: number | string;
  title: string;
  description?: string;
  category: string;
  subtasks?: Subtask[];
}

const initialState: Task[] = [
  { id: nanoid(), title: "new task", category: "to do" },
];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
