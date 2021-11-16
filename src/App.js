import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Hom</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //       <li>
    //         <Link to="/Competences">Compeences</Link>
    //       </li>
    //     </ul>

    //     <hr />

    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/competences" element={<Knowledges />} />
    //       <Route path="" element={<NotFound />}></Route>
    //     </Routes>
    //   </div>
    // </Router>

    <switch>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/competences/" element={<Knowledges />}></Route>
          <Route path="/contact/" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </switch>
  );
}

export default App;
