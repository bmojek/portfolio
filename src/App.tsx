import Main from "./pages/Main";
import ManageMe from "./pages/ManageMe";
import SummerRefresh from "./pages/SummerRefresh";
import FakeRestApi from "./pages/FakeRestApi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ManageMe" element={<ManageMe />} />
        <Route path="/SummerRefresh" element={<SummerRefresh />} />
        <Route path="/FakeRestApi" element={<FakeRestApi />} />
      </Routes>
    </Router>
  );
}

export default App;
