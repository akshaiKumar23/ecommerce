import { Link } from "react-router-dom";

const ProductCard = ({ image, title, rating, category, id }) => {
    return (
        <Link to={`/products/${id}`} >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <div className="flex items-center my-2">
                        <span className="text-yellow-500">{rating}</span>
                        <span className="ml-2 text-gray-600">{category}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
