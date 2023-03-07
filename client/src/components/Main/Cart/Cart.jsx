import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart,decreaseQuantity, increaseQuantity} from "../../../redux";


const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartItems);
    useSelector(state => state.numberItems);


    let TotalCart = 0;
    items.forEach(item => {
        TotalCart += item.quantity * item.price;
    });

    return (
        <table className="cartFormat">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => {
                    return (
                        <tr key={i} i={i}>
                            <td><button style={{ cursor: "pointer" }} onClick={() => {
                                dispatch(deleteCart(i))
                            }}>X</button></td>
                            <td>{item.title}</td>
                            <td><img src={item.image} alt={item.title}/></td>
                            <td>{item.price} $</td>
                            <td>
                                <button style={{ margin: '2px', cursor: "pointer" }} onClick={() => {
                                    dispatch(decreaseQuantity(i))
                                }}>-</button>
                                <span>{item.quantity}</span>
                                <button style={{ margin: '2px', cursor: "pointer" }} onClick={() => {
                                    dispatch(increaseQuantity(i))
                                }}>+</button>
                            </td>
                            <td><b>{parseInt(item.price * item.quantity).toFixed(2)} $</b></td>
                        </tr>
                    )
                })}
                <tr>
                    <td id="total" colSpan="5">TOTAL: </td>
                    <td><b>{Number(TotalCart).toFixed(2)} $</b></td>
                </tr>
            </tbody>

        </table>
    )
}


export default Cart