import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Components/navbar/Navbar";
import Resource from "./Pages/Resource";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resource" element={<Resource />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
