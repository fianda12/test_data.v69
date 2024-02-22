import { BrowserRouter, Routes, Route } from "react-router-dom";

import Generate from "../pages/generate";
import Error from "../pages/404";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Error />} />
        <Route path="/data/:id_data" element={<Generate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
