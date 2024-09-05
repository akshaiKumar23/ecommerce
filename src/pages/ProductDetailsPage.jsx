import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addFavorites } from '../store/slices/favoritesProductsSlice';
import { addToCart } from '../store/slices/cartsSlice';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
                const data = await res.json();
                setProduct(data.product);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleAddToCart = () => {
        const cartProduct = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
        }
        dispatch(addToCart(cartProduct))
        navigate("/cart")
    }

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (!product) {
        return <div className="text-center mt-8">Product not found</div>;
    }

    const handleAddToFavorite = (product) => {
        dispatch(addFavorites(product));
        navigate("/favorites");
    };

    return (
        <div className="container mx-auto p-8">
            <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300">
                <img
                    src={product.image}
                    alt={product.title}
                    className="lg:w-1/2 w-full h-96 object-contain p-4"
                />
                <div className="p-8 lg:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
                    <div className="flex items-center mb-6">
                        <span className="ml-6 text-gray-600 text-lg capitalize">{product.category}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    <div className="text-2xl font-semibold text-green-600 mb-6">${product.price}</div>

                    <div className='mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8'>
                        <button
                            onClick={handleAddToCart}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-md transition-all duration-200"
                        >
                            🛒 Add to Cart
                        </button>
                        <button
                            onClick={() => handleAddToFavorite(product)}
                            className="flex items-center justify-center py-3.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            💗 Add to Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
