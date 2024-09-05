
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


import FavoritesPage from './pages/FavoritesPage'
import { lazy, Suspense } from 'react';
import CartPage from './pages/CartPage';

const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"))
import HomePage from './pages/HomePage';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Suspense fallback={<div>Loading...</div>}>
          <ProductDetailsPage />
        </Suspense>} />

        <Route path='favorites' element={<FavoritesPage />} />

        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
