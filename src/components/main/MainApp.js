import ContextWrapper from '../store/store';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShoesPage from '../pages/ShoesPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';

const MainApp = () => {
  return (
    <ContextWrapper>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Shoes" element={<ShoesPage />} />
        <Route path="/Shoes/:id" element={<ProductPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </ContextWrapper>
  );
};

export default MainApp;
