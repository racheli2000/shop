
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Payment() {
  const Data = useSelector((state) => state.products);
  const [sum, setSum] = useState(0);

  useEffect(() => {

    let s = 0;
    Data.selectedProducts.forEach((element) => {
      s += element.price;
    });
    setSum(s);
  }, []);

  return (
    <>
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
