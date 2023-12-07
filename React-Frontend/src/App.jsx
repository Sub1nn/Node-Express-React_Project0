import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800 flex justify-between items-center p-2">
        <div className="container mx-auto">
          <div className="flex justify-between ">
            <Link to="/">
              <h2 className="text-white text-2xl font-bold mr-4">
                CRUD with React & Node
              </h2>
            </Link>
            <h3 className="text-white font-bold pt-1.5 ">Created by: Subin</h3>
          </div>
        </div>
      </nav>
      <div className="container mx-auto h-full">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
