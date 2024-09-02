
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { removeFavorite } from '../store/slices/favoritesProductsSlice';
const FavoritesPage = () => {
    const favorites = useSelector((state) => state.favorites)
    const dispatch = useDispatch();

    const handleDelete = (product) => {
        dispatch(removeFavorite(product))
    }
    return (

        <div>

            {favorites.length === 0 ? <div><p className='text-6xl '>No Favorites</p></div> : <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {favorites.map((product) => (
                    <div key={product.id}>
                        <ProductCard
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            rating={product.rating.rate}
                            category={product.category}
                        />
                        <button onClick={() => handleDelete(product)} className='bg-red-400 text-white px-4 py-2 rounded-md w-full'>Remove from cart</button>
                    </div>
                ))}
            </div>}
        </div>

    )
}

export default FavoritesPage