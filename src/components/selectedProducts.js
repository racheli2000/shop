import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import actions from "../redux/action";


export default function SelectedProducts() {

    const Data= useSelector(state => state.products);
    const dispatch= useDispatch();
    const history= useHistory();
    const [flag, setFlag]= useState(false); 
    let answear;
    
    useEffect(() => {
        answear= window.confirm("do you want to pay???");
      }, [flag==true]);

    function  deletMe(index) {

        dispatch(actions.deleteProduct({name: Data.selectedProducts[index].name}));
    }

    function  addOne(index) {
        dispatch(actions.addToAmount({index: index}))
    }

    function  deleteOne(index) {
        dispatch(actions.deleteFromAmount({index: index}))
    }

    function goToPayment () {
        setFlag(true);
        if(answear == true)
        return history.push("/PAYMENT");
    }

    return(
        <>
        <br></br><br></br>
            {Data.selectedProducts.map((sp, index) =>
            <>
               <p>{sp.name}  ${sp.price} amount: {sp.amount}</p>
               <button onClick={() => deletMe(index)}>delete</button>
               <button onClick={() => addOne(index)}>+1</button>
               <button onClick={() => deleteOne(index)}>-1</button>
               <br></br><br></br>

            </> )}     

            {Data.selectedProducts.length>0&&
            <button onClick={goToPayment}>PAYMENT</button>}
            
            
        </>
    )
    
}