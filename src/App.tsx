import Layout from "./layout";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "./app/router";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <Layout>
      {/* <!-- Page content --> */}

      <Outlet />
    </Layout>
  );
}

export default App;
