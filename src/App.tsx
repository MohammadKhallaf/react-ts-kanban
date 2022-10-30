import Layout from "./Layout";
import Navbar from "./Layout/Navbar";
import BoardView from "./Views/BoardView";

function App() {
  return (
    <Layout>
      {/* <!-- Page content here --> */}
      <BoardView />
    </Layout>
  );
}

export default App;
