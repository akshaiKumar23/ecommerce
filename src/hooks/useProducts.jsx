
import { useEffect, useState } from "react";

export const useProducts = (payload) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const fetchProducts = async () => {
            const res = await fetch(`https://fakestoreapi.in/api/${payload}`);
            const data = await res.json();
            console.log(payload);
            if (payload === "products/category") {
                setData(data.categories)
                console.log(data.categories);
            }
            else {
                setData(data.products);
            }

            setLoading(false);
        }
        fetchProducts();
    }, [payload])
    return { data, setData, loading };
}