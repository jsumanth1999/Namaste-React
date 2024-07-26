import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items );
    const dispatch = useDispatch();
    const handleClearItem = () => {
        dispatch(clearItem())
    }
    return (
        <div className="text-center w-6/12 m-auto p-2">
            <h1 className="font-bold">Cart</h1>
            <button className="border rounded-md bg-black text-white" onClick={handleClearItem}>Clear Cart</button>
            {(cartItems.length == 0)&& <h2 className="font-bold">Carts are empty, please add some items into the cart</h2>}
            <ItemList items={cartItems}/>
        </div>
    )
}

export default Cart;