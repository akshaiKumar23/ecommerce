import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy, Suspense } from 'react';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import FavoritesPage from './pages/FavoritesPage';
import CartPage from './pages/CartPage';


const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LandingPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <ProductDetailsPage />
              </Suspense>
            </ProtectedRoute>
          }
        />

        <Route
          path='/favorites'
          element={
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path='/cart'
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
