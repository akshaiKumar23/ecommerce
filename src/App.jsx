
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetailsPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path='favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
