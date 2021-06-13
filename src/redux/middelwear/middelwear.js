import { useDispatch } from "react-redux";
import actions from "../action";

export const getUsers = (store) => (next) => (action) => {
  if (action.type == "GET_ALL_USERS") {
    fetch(`https://localhost:3001/getAllUsers`, { method: "GET" })
    .then(response => response.json())
    .then(result =>{
        store.dispatch(actions.setAllUsers(result));
        debugger
    })
    .catch(error => console.log ('error', error));
}
return next(action)

};

export const getOrders = (store) => (next) => (action) => {
  if (action.type == "GET_ALL_ORDERS") {
    fetch(`https://localhost:3001/getAllOrders`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        store.dispatch(actions.getOrders(result));
        debugger;
      })
      .catch((error) => console.log("error", error));
  }
  return next(action);
};




export const setOrder = (store) => (next) => (action) => {
    
  const dispatch = useDispatch();

  if (action.type == "SAVE_ORDER") {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products: action.payLoad.selectedProducts }),
    };
    fetch(
      `https://localhost:3001/saveOrder/${action.payLoad.userId}`,
      requestOptions
    )
    .then((response) => {
      response.json();
      dispatch(actions.setOrderNumber());
    });
  }
  return next(action);
};
