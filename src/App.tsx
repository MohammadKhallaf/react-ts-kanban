import Layout from "./layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Layout>
      {/* <!-- Page content --> */}
      <Outlet />
    </Layout>
  );
}

export default App;
