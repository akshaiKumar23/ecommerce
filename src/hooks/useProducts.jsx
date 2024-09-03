
import { useEffect, useState } from "react";

export const useProducts = (payload) => {
    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchProducts = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const res = await fetch(`https://fakestoreapi.com/${payload}`);
            const data = await res.json();
            console.log(payload);
            setData(data);
        }
        fetchProducts();
    }, [payload])
    if (data === null) {

        throw new Promise(() => { });
    }
    return { data, setData };
}