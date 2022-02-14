import {Routes, Route, Navigate} from "react-router-dom";
import SneakersPage from "../pages/SneakersPage";
import OxfordsPage from "../pages/OxfordsPage";
import BootsPage from "../pages/BootsPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";

const MainApp = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Navigate to="Sneakers" />} />
            <Route path="/Sneakers" element={<SneakersPage />} />
            <Route path="/Oxfords" element={<OxfordsPage />} />
            <Route path="/Boots" element={<BootsPage />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
     );
}
 
export default MainApp;