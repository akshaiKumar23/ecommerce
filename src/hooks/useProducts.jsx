
import { useEffect, useState } from "react";

export const useProducts = (payload) => {
    const [data, setData] = useState([]);
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


        }
        fetchProducts();
    }, [payload])
    return { data, setData };
}