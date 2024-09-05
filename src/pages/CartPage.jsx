import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../store/slices/cartsSlice';
import { useState } from 'react';

const CartPage = () => {
    const carts = useSelector((state) => state.carts);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    let sum = 0;
    carts.forEach((item) => {
        sum += item.price * (item.quantity || 1);
    });

    const handleDelete = (item) => {
        dispatch(deleteFromCart(item));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-semibold mb-5">
                        {carts.length === 0 ? "Your cart is empty" : "Shopping Cart"}
                    </h2>
                    {carts.map((item) => (
                        <div key={item.id} className="flex items-center bg-white shadow-md p-4 rounded-lg mb-4">
                            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                            <div className="ml-4 flex-grow">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
                                <div className="flex items-center mt-2 space-x-2">
                                    <label className="text-gray-700">Qty:</label>
                                    <input
                                        type="number"
                                        value={item.quantity || value}
                                        className="w-16 border border-gray-300 rounded-lg text-center"
                                        min="1"
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button onClick={() => handleDelete(item)} className="text-red-500 hover:text-red-600 font-medium ml-4">
                                Remove
                            </button>
                        </div>
                    ))}
                </div>


                <div className="bg-white shadow-md p-6 rounded-lg max-h-[400px] overflow-y-auto">
                    <h2 className="text-xl font-semibold mb-5">Cart Summary</h2>


                    <div className="space-y-4 mb-5">
                        {carts.map((item) => (
                            <div key={item.id} className="flex justify-between">
                                <span className="text-gray-600">{item.title.substring(0, 15)} (x{item.quantity || 1})</span>
                                <span className="font-medium">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>               <div className="flex justify-between mb-3 text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium">${sum.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${sum.toFixed(2)}</span>
                    </div>


                    <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
