import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import BoardView from "../views/BoardView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "board/:boardId",
        element: <BoardView />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
