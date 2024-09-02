
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const Navbar = () => {
    const { data: categories } = useProducts("products/categories");

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/">
                        E-Shop
                    </Link>
                </div>
                <div>
                    <Link to="favorites" className="text-white">
                        Favorites
                    </Link>
                </div>
                <div className="w-1/2">
                    <select
                        className="w-full p-2 rounded-lg text-gray-800"
                    >
                        <option value="">Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
