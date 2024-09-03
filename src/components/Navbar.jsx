import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/slices/categorySlice";
import { useState } from "react";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
    const { data: categories } = useProducts("products/categories");
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        dispatch(setCategory(category));
    }

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
                    <ToggleMode />
                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="w-full p-2 rounded-lg text-gray-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
            </div>
        </nav>
    );
};

export default Navbar;