
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
const HomePage = () => {
    const { data: products } = useProducts("products")
    return (
        <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard
                    id={product.id}
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    rating={product.rating.rate}
                    category={product.category}
                />
            ))}
        </div>
    )
}

export default HomePage