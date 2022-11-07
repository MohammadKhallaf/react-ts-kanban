import Layout from "./layout";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "./app/router";

function App() {
  return (
    <Layout>
      {/* <!-- Page content --> */}
      <Outlet />
    </Layout>
  );
}

export default App;
