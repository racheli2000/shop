import { useDispatch, useSelector } from "react-redux"
import actions from "../redux/action";


export default function ShowProducts(){

    const Data= useSelector(state => state.products);
    const dispatch= useDispatch();

    function addMe (index) {

        dispatch(actions.addProduct({product: Data.AllProducts[index]}));
    }


    return(
        <>
            {Data.AllProducts.map((p, index) =>
            <>
                {/* <img src="{{p.picture}}.jpg"></img> */}
                {/* <br></br> */}
                
                <p>{p.name}  ${p.price}</p>
                <button onClick={() => addMe(index)}>add</button>
                
            </> )}
        </>
    )
}