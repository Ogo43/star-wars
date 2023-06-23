import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarWars from "./Component/StarWars";
import Details from "./Component/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<StarWars />}></Route>
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      {/* <StarWars /> */}
    </div>
  );
}

export default App;
