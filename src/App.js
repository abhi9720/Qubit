import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
