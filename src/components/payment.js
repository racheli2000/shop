
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/action";

export default function Payment() {
  const Data = useSelector((state) => state.products);
  const [sum, setSum] = useState(0);
  const dispatch= useDispatch();

  useEffect(() => {

    let s = 0;
    Data.selectedProducts.forEach((element) => {
      s += element.price*element.amount;
    });
    setSum(s);
  }, []);

  const sendOreder = () => {
    dispatch(actions.saveOrder({selectedProducts: Data.selectedProducts, userId: Data.orderNumber}))

  }

  return (
    <>
    {sendOreder}
      {Data.selectedProducts.map((sp, index) => (
        <>
          <p>
            {sp.name} ${sp.price} amount: {sp.amount}
          </p>
        </>
      ))}
      <h1>${sum}</h1>
    </>
  );
}
