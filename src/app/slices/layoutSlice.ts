/** Slice for the site layout
 * - side drawer
 * - dark / light mode
 * - navbar title
 * - task add {board related}
 */

import { createSlice } from "@reduxjs/toolkit";
import type { Board } from "./boardSlice";

export interface layout {
  board: Partial<Board> & { id: number | string; title: string };
  dark: boolean;
}
let browser = window.matchMedia("(prefers-color-scheme: dark)");

const initialState: layout = {
  board: {
    id: 0,
    title: "new board",
  },
  dark: browser.matches,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleDark: (state) => {
      state.dark = !state.dark;
      document.documentElement.setAttribute(
        "data-theme",
        state.dark ? "dark" : "light"
      );
    },
    setBoard: (state, action) => {
      state.board = action.payload;
    },
  },
});
export const { setBoard, toggleDark } = layoutSlice.actions;
export default layoutSlice.reducer;
