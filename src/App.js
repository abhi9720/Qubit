import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./Components/navbar/Navbar";
import Resource from "./Pages/Resource";
import Page404 from "./Pages/Page404";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Documentation from "./Pages/Documentation";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resource" element={<Resource />} />
          <Route exact path="/document" element={<Documentation />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
