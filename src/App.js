import React from "react";
import "./App.css";
import Home from "./components/home";
import ShowProducts from "./components/showProducts";
import Payment from "./components/payment";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/about";
import { Provider } from "react-redux";
import store from "./redux/store";
import SelectedProducts from "./components/selectedProducts";

import a from "./pictures/fw7a5605.jpg";
import b from "./pictures/m03106051099.jpg";
import c from "./pictures/m03110051099.jpg";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Router> 
         <Home></Home>
         <Switch>
           <Route path="/SHOWPRODUCTS">
             <ShowProducts />
           </Route>
           <Route path="/ABOUT">
             <About>
              <img src={a}></img>
              <img src={b}></img>
              <img src={c}></img>
             </About>
           </Route>
           <Route path="/PAYMENT">
             <Payment />
           </Route>
           <Route path="/SELECTEDPRODUCTS">
             <SelectedProducts/>
           </Route>
           {/* <Route path="/">
             <Home />
           </Route> */}
         </Switch>
       </Router> 
       </Provider>
     </div>
  );
}

export default App;
