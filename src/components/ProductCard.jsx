import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../store/slices/cartsSlice";

const ProductCard = ({ image, title, category, id, price }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const cartProduct = {
            id,
            title,
            image,
            price,
            quantity: 1,
        }
        dispatch(addToCart(cartProduct))
        navigate("/cart")
    }
    return (
        <Link to={`/products/${id}`}>
            <div className="relative m-6 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md h-[450px] product-card">
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl parallax-image">
                    <img className="object-cover w-full h-full" src={image} alt="product image" />
                </div>

                <div className="mt-4 px-5 pb-5 flex-grow flex flex-col justify-between">
                    <div>
                        <h5 className="text-[26px] tracking-tight text-slate-900 line-clamp-2 overflow-hidden text-ellipsis h-12">
                            {title}
                        </h5>

                        <p className="text-sm text-gray-500 mt-1">{category}</p>

                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-slate-900">${price}</span>
                            </p>
                        </div>
                    </div>

                    <button onClick={handleAddToCart}
                        className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        🛒 Add to cart
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
