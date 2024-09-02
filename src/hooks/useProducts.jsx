
import { useEffect, useState } from "react";

export const useProducts = (payload) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`https://fakestoreapi.com/${payload}`);
            const data = await res.json();
            console.log(payload);
            setData(data);
        }
        fetchProducts();
    }, [payload])
    return { data, setData };
}