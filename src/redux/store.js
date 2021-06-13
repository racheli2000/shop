

import { createStore, combineReducers, applyMiddleware } from 'redux';
import products from "./reduces/products";
import order from './reduces/order';
import {getOrders, setOrder, getUsers} from './middelwear/middelwear';
import user from './reduces/user';


const reducer= combineReducers({products, order, user});

const store= createStore(reducer, (applyMiddleware(getUsers )));

window.store= store;
export default store;

