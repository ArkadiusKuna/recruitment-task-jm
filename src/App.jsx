import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "layout/Header/Header";
import HomePage from "pages/HomePage/HomePage";
import Continents from "pages/Continents/Continents";
import Countries from "pages/Countries/Countries";
import PageNotFound from "pages/PageNotFound/PageNotFound";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/continents/:code" element={<Countries />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </> 
  );
}

export default App;