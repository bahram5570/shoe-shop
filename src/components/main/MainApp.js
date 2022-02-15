import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShoesPage from "../pages/ShoesPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

const MainApp = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Shoes" element={<ShoesPage />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
     );
}
 
export default MainApp;