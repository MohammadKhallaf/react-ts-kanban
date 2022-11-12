import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface Board {
  id: number | string;
  title: string;
  createdAt: String;
}
type BoardAction = PayloadAction<Board>;
type BoardActionWithId = PayloadAction<
  Partial<Board> & { id: number | string }
>;

export type AppState = Board[];

const initialState: AppState = [
  {
    id: 1,
    title: "Planning",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Roadmap",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Management",
    createdAt: new Date().toISOString(),
  },
];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    createBoard: {
      reducer: (state, action: BoardAction) => {
        state.push(action.payload);
      },
      prepare: (title: string = "new board") => ({
        payload: {
          id: nanoid(4),
          title: title,
          createdAt: new Date().toISOString(),
        },
      }),
    },
    updateBoard: (state, action: BoardActionWithId) => {
      const boardIdx = state.findIndex(
        (board) => board.id === action.payload.id
      );
      state[boardIdx] = {
        ...state[boardIdx],
        ...action.payload,
      };
      return state;
    },
    removeBoard: (state, { payload }: BoardActionWithId) => {
      return state.filter((board) => board.id !== payload.id);
    },
  },
});

export const { createBoard, updateBoard, removeBoard } = boardSlice.actions;

export default boardSlice.reducer;
