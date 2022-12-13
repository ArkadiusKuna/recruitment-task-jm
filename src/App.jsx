import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Continents from "./pages/Continents/Continents";
import Countries from "./pages/Countries/Countries";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/continent/:code" element={<Countries />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </> 
  );
}

export default App;