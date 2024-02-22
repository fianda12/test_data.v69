import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Generate from "../pages/generate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/data/:id_data" element={<Generate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
