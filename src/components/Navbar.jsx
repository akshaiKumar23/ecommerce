import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/slices/categorySlice";
import { useState } from "react";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
    const { data: categories } = useProducts("products/category");
    console.log(categories)
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        dispatch(setCategory(category));
    };

    return (
        <nav className="bg-gray-900 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-400 transition duration-300">
                        E-Shop
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="favorites" className="text-white text-lg font-medium hover:text-gray-400 transition duration-300">
                        Favorites
                    </Link>
                    <Link to="/cart" className="text-yellow-400 font-semibold">
                        🛒Cart
                    </Link>
                    <ToggleMode />
                    <div className="flex space-x-4">
                        <button

                            onClick={() => handleCategoryClick("")}
                            className={`py-2 px-4 rounded-md text-white text-lg font-medium transition duration-300 
                                    ${selectedCategory === "" ? 'bg-gray-700' : 'bg-gray-600 hover:bg-gray-500'} 
                                    focus:outline-none focus:ring-2 focus:ring-gray-400`}
                        >
                            All
                        </button>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                className={`py-2 px-4 rounded-md text-white text-lg font-medium transition duration-300 
                                    ${selectedCategory === category ? 'bg-gray-700' : 'bg-gray-600 hover:bg-gray-500'} 
                                    focus:outline-none focus:ring-2 focus:ring-gray-400`}
                            >
                                {category.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
