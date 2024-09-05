import { useSelector } from "react-redux";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";


const ProductList = () => {
    const category = useSelector((state) => state.categories);
    const { data: products } = useProducts(category ? `products/category?type=${category}` : "products?limit=150");
    console.log(products);

    return (
        <div className="container mx-auto px-4 lg:px-8 mt-10">

            <h1 className="text-4xl font-bold mb-4">{category ? category.toUpperCase() : "All Products"}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {products.map((product) => (
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
        </div>
    );
};

export default ProductList;
