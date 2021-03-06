import React from "react";
import "./App.css";
import Manue from "./components/manue";
import ShowProducts from "./components/showProducts";
import Payment from "./components/payment";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/about";
import { Provider } from "react-redux";
import store from "./redux/store";
import SelectedProducts from "./components/selectedProducts";
import Home from "./components/home";

import a from "./pictures/a.jpg";
import b from "./pictures/b.jpg";
import c from "./pictures/c.webp";
import d from "./pictures/d.jpg";
import Order from "./components/order";
import User from "./components/user";




function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <User/> */}
       <Router> 
         <Manue></Manue>
         <Switch>
           <Route path="/SHOWPRODUCTS">
             <ShowProducts />
           </Route>
           <Route path="/ABOUT">
             <About>
              <img src={a} alt="a" style={{width:1000}}></img>
              <img src={b} alt="b"></img>
              <img src={c} alt="c" style={{width:800}}></img>
              <img src={d} alt="d" style={{width:1000}}></img>
             </About>
           </Route>
           <Route path="/PAYMENT">
             <Payment />
           </Route>
           <Route path="/SELECTEDPRODUCTS">
             <SelectedProducts/>
           </Route>
           <Route path="/ORDER">
             <Order />
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
       </Router> 
       </Provider>
     </div>
  );
}

export default App;
