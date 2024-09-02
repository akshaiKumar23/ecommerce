import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavorites } from '../store/slices/favoritesProductsSlice';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (!product) {
        return <div className="text-center mt-8">Product not found</div>;
    }

    const handleAddToFavorite = (product) => {
        dispatch(addFavorites(product))
    }
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
                <img src={product.image} alt={product.title} className="lg:w-1/3 h-64 object-cover" />
                <div className="p-6 lg:w-2/3">
                    <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-lg">{product.rating.rate} ⭐</span>
                        <span className="ml-4 text-gray-600 text-sm">{product.category}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="text-xl font-semibold text-green-500">${product.price}</div>

                    <button onClick={() => handleAddToFavorite(product)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
