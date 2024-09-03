
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


import FavoritesPage from './pages/FavoritesPage'
import { lazy, Suspense } from 'react';

const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"))
const HomePage = lazy(() => import("./pages/HomePage"))

function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>} />
        <Route path="/products/:id" element={<Suspense fallback={<div>Loading...</div>}>
          <ProductDetailsPage />
        </Suspense>} />

        <Route path='favorites' element={<FavoritesPage />} />


      </Routes>
    </div>
  );
}

export default App;
