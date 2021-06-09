

import { createStore, combineReducers, applyMiddleware } from 'redux';
import products from "./reduces/products";



const reducer= combineReducers({products});

const store= createStore(reducer, (applyMiddleware( )));

window.store= store;
export default store;

