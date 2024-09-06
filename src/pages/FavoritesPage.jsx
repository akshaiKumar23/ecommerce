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
        <div className="container mx-auto mt-8 px-4">
            {favorites.length === 0 ? (
                <div className="text-center">
                    <p className='text-6xl font-bold'>No Favorites</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.map((product) => (
                        <div key={product.id} className="flex flex-col">
                            <ProductCard
                                id={product.id}
                                image={product.image}
                                price={product.price}
                                title={product.title}
                                category={product.category}
                            />
                            <button
                                onClick={() => handleDelete(product)}
                                className='ml-5 mb-10 bg-red-500 text-white px-4 py-2 rounded-md w-full hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300'
                            >
                                Remove from Favorites
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FavoritesPage
