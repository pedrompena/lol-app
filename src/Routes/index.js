import { BrowserRouter, Routes, Route } from "react-router-dom";

import Champs from "../Views/Champs/Champs";

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Champs />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesComponent;