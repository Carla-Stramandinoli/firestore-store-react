import Create from "./components/create";
import Edit from "./components/edit";
import Show from "./components/show";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Show />} />
          <Route path={"/edit/:id"} element={<Edit />} />
          <Route path={"/create"} element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
