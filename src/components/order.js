import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/action";
import order from "../redux/reduces/order";


export default function Order(){

    const Data= useSelector(state => state.order);
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(actions.getAllOrders());
    })

    return(
        <>
            {Data.AllOrders.map((order, index) => {
                <p>
                    order number {index+1}:
                    {order.name}<br></br>
                    {order.price}
                </p>
            })}
        </>
    )
}