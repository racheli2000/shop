
import actions from "../action";

// export const getUsers = (store) => (next) => (action) => {
//   if (action.type == "GET_ALL_USERS") {
//     fetch(`https://localhost:3001/getAllUsers`, { "method": "GET" })
//     .then(response => response.json())
//     .then(result =>{
//         store.dispatch(actions.setAllUsers(result));
//         debugger
//     })
//     .catch(error => console.log ('error', error));
// }
// return next(action)

// };


// export const getUsers = (store) => (next) => (action) => {
//   if (action.type == "GET_ALL_USERS") {

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
    
//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//   };

//   fetch("http://localhost:3001/getAllUsers", requestOptions)
//       .then(response => response.json())
//       .then(result => {
//           console.log(result)
//           store.dispatch(actions.setAllUsers(result))
//       })
//       .catch(error => console.log('error', error));


// };
// return next(action)

// }



export const getUsers = (store) => (next) => (action) => {

    if (action.type == "GET_ALL_USERS") {
      debugger
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      // var raw = JSON.stringify({"name":"Yael","password":"123456789","mail":"yael@gmail.com"});
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3001/getAllUsers", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .then(result =>{
              store.dispatch(actions.setAllUsers(result));
            debugger;}
              )
        .catch(error => console.log('error', error));
    }
    return next(action);
  
};

export const getOrders = (store) => (next) => (action) => {
  if (action.type == "GET_ALL_ORDERS") {
    fetch(`https://localhost:3001/getAllOrders`, { "method": "GET" })
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
      store.dispatch(actions.setOrderNumber());
    });
  }
  return next(action);
};
