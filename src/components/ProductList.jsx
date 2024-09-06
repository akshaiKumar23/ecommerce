import { useSelector } from "react-redux";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { useState } from "react";
import CardSkeleton from "./CardSkeleton";

const ProductList = () => {
    const category = useSelector((state) => state.categories);
    const { data: products, loading } = useProducts(category ? `products/category?type=${category}` : "products?limit=150");


    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");

    const filteredProducts = products
        .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === "price-asc") {
                return a.price - b.price;
            }
            if (sortOption === "price-desc") {
                return b.price - a.price;
            }
            return 0;
        });

    return (
        <div className="container mx-auto px-4 lg:px-8 mt-10">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold">{category ? category.toUpperCase() : "All Products"}</h1>

                <div className="flex space-x-4">
                    <div className="relative">
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder="Search Products..."
                            className="w-64 p-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011.1 4.6a7.5 7.5 0 005.55 12.05z" />
                        </svg>
                    </div>
                    <div className="relative">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Sort By</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {Array(8).fill().map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            id={product.id}
                            key={product.id}
                            price={product.price}
                            image={product.image}
                            title={product.title}
                            category={product.category}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
