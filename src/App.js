import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import OeuvreOProg from "./Pages/OeuvreOProg";

import "./Styles/index.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
				<Route path="/OeuvreOProg/:id" element={<OeuvreOProg />} />
            </Routes>
      
        </div>
    );
}

export default App;